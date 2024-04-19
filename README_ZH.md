[English Version](README.md)
## 如何部署
### 设置GCP认证
```shell
gcloud auth application-default login
或者
GOOGLE_CREDENTIALS=service-account-key-xxxx.json
```
### 部署，注意替换环境变量中的项目ID和域名
```shell
cd gcp-cloud-function-gcs-meta-manager/
terraform init
terraform apply -var="project_id=PROJECT_ID" -var="region=REGION"  -var="trigger_bucket=BUCKET_NAME" -var="subfix=xxx"  --auto-approve
```
### 销毁资源
```shell
terraform destroy -var="project_id=PROJECT_ID" -var="region=REGION"  -var="trigger_bucket=BUCKET_NAME" -var="subfix=xxx" --auto-approve
```
