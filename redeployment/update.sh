# aws ecs update-service \
#   --region us-west-1 \
#   --cluster truck-cluster \
#   --service truck-service \
#   --task-definition truck-app

aws ecs update-service \
  --region us-west-1 \
  --cluster truck-cluster \
  --service truck-service \
  --force-new-deployment

# aws ecs update-service \
#   --region us-west-1 \
#   --cluster truck-cluster \
#   --service truck-service \
#   --task-definition truck-app