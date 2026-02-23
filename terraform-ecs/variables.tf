variable "region" {
  description = "AWS region"
  default     = "us-west-1"
}

variable "image_url" {
  description = "ECR image URI"
  default     = "105181209418.dkr.ecr.us-west-1.amazonaws.com/admiral-trucker-landing:latest"
}

variable "domain_name" {
  description = "Custom domain"
  default     = "aws.victorlayade.com"
}

variable "key_name" {
  description = "EC2 key pair name for SSH access"
  type        = string
}