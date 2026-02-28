#!/usr/bin/env bash
#
# register-task.sh
# Registers or updates an ECS task definition for the truck-app
# Loads config from .env file safely (works in Git Bash / WSL / Linux)
#
# Usage:
#   chmod +x register-task.sh    (once)
#   ./register-task.sh
#

set -euo pipefail   # exit on error, undefined vars, pipe failures

# ─── 1. Locate and load .env (relative to script location) ───────────────────

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"

if [ ! -f "$ENV_FILE" ]; then
    echo "ERROR: .env file not found at: $ENV_FILE"
    echo "Please create .env in the same folder as this script."
    exit 1
fi

# Load variables safely
set -a
source "$ENV_FILE"
set +a

# ─── 2. Required variables validation ────────────────────────────────────────

required_vars=(
    "AWS_REGION"
    "ACCOUNT_ID"
    "ECR_REPO_NAME"
    "TASK_FAMILY"
    "EXECUTION_ROLE_NAME"
    "IMAGE_TAG"
    "CPU"
    "MEMORY"
    "CONTAINER_NAME"
    "CONTAINER_PORT"
)

for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo "ERROR: Required variable $var is empty or unset in .env"
        exit 1
    fi
done

# ─── 3. Build dynamic values ─────────────────────────────────────────────────

IMAGE_FULL_URI="${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO_NAME}:${IMAGE_TAG}"
EXECUTION_ROLE_ARN="arn:aws:iam::${ACCOUNT_ID}:role/${EXECUTION_ROLE_NAME}"

# Optional: Print what we're about to do (for confirmation)
echo "Registering ECS task definition:"
echo "  Family              : ${TASK_FAMILY}"
echo "  Image               : ${IMAGE_FULL_URI}"
echo "  Execution Role ARN  : ${EXECUTION_ROLE_ARN}"
echo "  CPU / Memory        : ${CPU} vCPU / ${MEMORY} MiB"
echo "  Container port      : ${CONTAINER_PORT}"
echo ""

# ─── 4. Register task definition ─────────────────────────────────────────────

aws ecs register-task-definition \
    --region "${AWS_REGION}" \
    --family "${TASK_FAMILY}" \
    --network-mode bridge \
    --requires-compatibilities EC2 \
    --cpu "${CPU}" \
    --memory "${MEMORY}" \
    --execution-role-arn "${EXECUTION_ROLE_ARN}" \
    --container-definitions "[
        {
            \"name\": \"${CONTAINER_NAME}\",
            \"image\": \"${IMAGE_FULL_URI}\",
            \"essential\": true,
            \"portMappings\": [
                {
                    \"containerPort\": ${CONTAINER_PORT},
                    \"hostPort\": ${CONTAINER_PORT}
                }
            ]
        }
    ]"

echo ""
echo "Task definition registration complete."
echo "Next step: update your ECS service with:"
echo "aws ecs update-service --cluster <your-cluster> --service <your-service> --task-definition ${TASK_FAMILY} --force-new-deployment --region ${AWS_REGION}"