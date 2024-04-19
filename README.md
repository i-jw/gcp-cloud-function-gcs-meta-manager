## 如何使用
### 设置GCP认证
```shell
gcloud auth application-default login
或者
GOOGLE_CREDENTIALS=service-account-key-xxxx.json
```
### 部署，注意替换环境变量中的项目ID和域名
```shell
cd examples
terraform init
terraform apply -var="project_id=PROJECT_ID" -var="region=us-central1"  -var="trigger_bucket=BUCKET_NAME" -var="subfix=lua"  -var="region=us-central1" --auto-approve
```
### 销毁资源
```shell
terraform destroy -var="project_id=PROJECT_ID" -var="region=us-central1"  -var="trigger_bucket=BUCKET_NAME" -var="subfix=lua"  -var="region=us-central1" --auto-approve
```
