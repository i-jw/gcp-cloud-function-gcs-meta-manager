# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Input variable definitions
variable "project_id" {
  description = "Project ID of the cloud resource."
  type        = string
}
variable "region" {
  description = "region of cloud resource."
  type        = string
}
variable "trigger_bucket" {
  description = "Bucket name of the trigger."
  type        = string
}
variable "subfix" {
  description = "subfix list separate  by comma."
  type        = string
}
variable "gcp_service_list" {
  description = "The list of apis necessary for the project"
  type        = list(string)
  default = [
    "cloudresourcemanager.googleapis.com",
    "serviceusage.googleapis.com",
    "certificatemanager.googleapis.com",
    "networkmanagement.googleapis.com"
  ]
}
