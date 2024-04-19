[中文版](README_zh.md)
## How to Deploy
### GCP Credentials setup
```shell
gcloud auth application-default login
或者
GOOGLE_CREDENTIALS=service-account-key-xxxx.json
```
### Deploy the resource, replace the variables with your's
```shell
cd gcp-cloud-function-gcs-meta-manager/
terraform init
terraform apply -var="project_id=PROJECT_ID" -var="region=REGION"  -var="trigger_bucket=BUCKET_NAME" -var="subfix=xxx"  --auto-approve
```
### Delete all resource
```shell
terraform destroy -var="project_id=PROJECT_ID" -var="region=REGION"  -var="trigger_bucket=BUCKET_NAME" -var="subfix=xxx" --auto-approve
```
