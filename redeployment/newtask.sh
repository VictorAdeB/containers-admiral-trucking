# aws ecs register-task-definition \
#   --region us-west-1 \
#   --family truck-app \
#   --network-mode bridge \
#   --requires-compatibilities EC2 \
#   --cpu 256 \
#   --memory 512 \
#   --execution-role-arn arn:aws:iam::105181209418:role/ecsInstanceRole \
#   --container-definitions '[
#     {
#       "name": "truck",
#       "image": "105181209418.dkr.ecr.us-west-1.amazonaws.com/admiral-trucker-landing:latest",
#       "essential": true,
#       "portMappings": [
#         {
#           "containerPort": 80,
#           "hostPort": 80
#         }
#       ]
#     }
#   ]'

aws ecs register-task-definition \
  --region us-west-1 \
  --family truck-app \
  --network-mode bridge \
  --requires-compatibilities EC2 \
  --cpu 256 \
  --memory 512 \
  --execution-role-arn arn:aws:iam::105181209418:role/ecsInstanceRole \
  --container-definitions "[
    {
      \"name\": \"truck\",
      \"image\": \"105181209418.dkr.ecr.us-west-1.amazonaws.com/admiral-trucker-landing:${GITHUB_SHA}\",
      \"essential\": true,
      \"portMappings\": [{\"containerPort\":80,\"hostPort\":80}]
    }
  ]"