![AWS Static Deployment Diagram](./images/Blank%20diagram%20(2).png)


### 🚀 Truck App Deployment (ECR → ECS with GitHub Actions)

This project deploys a Dockerized application to AWS ECS (EC2 launch type) using images stored in Amazon ECR and automated via GitHub Actions

<hr/>

### 📦 Architecture Overview

* Build Docker image

* Push image to Amazon ECR

* Register ECS Task Definition

* Update ECS Service

* ECS pulls latest image and runs container

### 🛠 Technologies Used

* Docker

* AWS CLI

* Amazon ECR

* Amazon ECS (EC2)

* IAM Roles

* GitHub Actions

### 🔐 IAM Roles Used
*** 1️⃣ ecsTaskExecutionRole

Used by ECS to:

Pull images from ECR

Send logs to CloudWatch

Trust Relationship:

```
{
  "Effect": "Allow",
  "Principal": {
    "Service": "ecs-tasks.amazonaws.com"
  },
  "Action": "sts:AssumeRole"
}
```


### 🐳 Step 1 — Build Docker Image
```
docker build -t admiral-trucker-landing .
```

### 🔑 Step 2 — Login to ECR
```
aws ecr get-login-password --region us-west-1 | \
docker login --username AWS --password-stdin 105181209418.dkr.ecr.us-west-1.amazonaws.com
```

### 🏷 Step 3 — Tag Image
```
docker tag admiral-trucker-landing:latest \
105181209418.dkr.ecr.us-west-1.amazonaws.com/admiral-trucker-landing:latest
```

###📤 Step 4 — Push Image to ECR
```
docker push 105181209418.dkr.ecr.us-west-1.amazonaws.com/admiral-trucker-landing:latest
```

### 📄 Step 5 — Register ECS Task Definition

⚠️ Important: Must use ecsTaskExecutionRole, NOT ecsInstanceRole.

```
aws ecs register-task-definition \
  --region us-west-1 \
  --family truck-app \
  --network-mode bridge \
  --requires-compatibilities EC2 \
  --cpu 256 \
  --memory 512 \
  --execution-role-arn arn:aws:iam::105181209418:role/ecsTaskExecutionRole \
  --container-definitions '[
    {
      "name": "truck",
      "image": "105181209418.dkr.ecr.us-west-1.amazonaws.com/admiral-trucker-landing:latest",
      "essential": true,
      "portMappings": [
        {
          "containerPort": 80,
          "hostPort": 80
        }
      ]
    }
  ]'
```
</hr>

### 🚀 CI/CD Pipeline — Build, Scan, Push Docker Image to Amazon ECR

This project uses GitHub Actions to automatically:

* Build a Docker image

* Scan the image for vulnerabilities

* Push the image to Amazon ECR

* Prepare it for ECS deployment

* The workflow triggers automatically when changes are pushed to the main branch inside the build/ directory.

### 🔄 Workflow Trigger
```
on:
  push:
    branches:
      - main
    paths:
      - "build/**"
```
<strong> The above block of actions makes the deployment runs only when there is changes inside the build folder and prevents unnecessary build</strong>

### 🏗 Pipeline Breakdown
1️⃣ Checkout Code
```
- uses: actions/checkout@v4
```

This pulls the latest version of the repository into the GitHub runner.


#### 2️⃣ Configure AWS Credentials

```
- uses: aws-actions/configure-aws-credentials@v4
```

This step authenticates GitHub Actions with AWS using repository secrets:
       <center> AWS_ACCESS_KEY_ID
            AWS_SECRET_ACCESS_KEY
            AWS_REGION
 AWS_ACCOUNT_ID
ECR_REPOSITORY
        </center> 

<strong> Without this step, AWS CLI and Docker cannot access ECR.</strong>


### 3️⃣ Login to Amazon ECR
```
- uses: aws-actions/amazon-ecr-login@v2
```

This authenticates Docker with your ECR registry:
```
$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com
  ```
#### 4️⃣ Build Docker Image

```
docker build \
  -t $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:${{ env.IMAGE_TAG }} \
  -t $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest \
  .
  ```


### ⚠️ Important Note:

Using only latest can cause ECS not to detect updates due to image caching.
A better approach is using unique tags per commit:
```
IMAGE_TAG: ${{ github.sha }}
```
### 5️⃣ Security Scan with Trivy
```
- uses: aquasecurity/trivy-action@master
```

<strong>Trivy scans the Docker image for:</strong>

<strong>
 
*  HIGH vulnerabilities

* CRITICAL vulnerabilities

* severity: HIGH,CRITICAL

* ✅ Prevents insecure images from reaching production

* ❌ The build fails if vulnerabilities are found and thus add a DevSecOps layer to the pipeline
</strong>


### 6️⃣ Push Image to Amazon ECR
```
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:${{ env.IMAGE_TAG }}
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest
```

After this step:
<p>Image is stored in Amazon ECR and ECS can now pull the updated image</p>

<strong> 
🐛 Why ECS Might Not Reflect Updates

Even if ECR updates successfully, ECS may not deploy new changes because: </strong>

###### 1️⃣ ECS Caches latest

<strong> If your task definition uses:
image: repository:latest
ECS may reuse the old image. </strong>

###### 2️⃣ No New Task Definition Revision

ECS only deploys new images when:

A new task definition revision is created

Or the service is forced to redeploy

###### 3️⃣ Service Not Forced to Deploy

You must run:
```
aws ecs update-service \
  --cluster truck-cluster \
  --service truck-service \
  --force-new-deployment
  ```

This forces ECS to pull the newest image from ECR.

###### 💡 Recommended Improvement (Best Practice)

Instead of:

IMAGE_TAG: latest

Use:

IMAGE_TAG: ${{ github.sha }}

Then:

Each commit has a unique image

ECS always pulls a new image

No caching issues

Full deployment traceability

###### 🧠 Key DevOps Concepts Demonstrated

This pipeline demonstrates:

CI/CD automation

Docker image versioning

Vulnerability scanning (DevSecOps)

AWS ECR integration

Secure credential management with GitHub Secrets

Infrastructure-ready deployment flow for ECS

### 🎯 Summary

When code is pushed to main:

GitHub Actions builds Docker image

Trivy scans it for vulnerabilities

Image is pushed to Amazon ECR

ECS can pull and deploy the image

If deployment does not reflect updates:

✔ Ensure unique image tags
✔ Force new ECS deployment
✔ Verify task definition revision