- [1. Course Introduction](#1-course-introduction)
  - [1.1. Estimated Cost to use services on AWS](#11-estimated-cost-to-use-services-on-aws)
  - [1.2. Different types of cloud computing](#12-different-types-of-cloud-computing)
- [2. What is Cloud Computing](#2-what-is-cloud-computing)
  - [2.1. AWS Cloud Overview](#21-aws-cloud-overview)
- [3. IAM - Identity and Access Management](#3-iam---identity-and-access-management)
  - [3.1. IAM Introduction Users, Gruops, Policies](#31-iam-introduction-users-gruops-policies)
  - [3.2. IAM Users and Groups hands-on](#32-iam-users-and-groups-hands-on)
  - [3.3. IAM Policies](#33-iam-policies)
  - [3.4. IAM Policies hands-on](#34-iam-policies-hands-on)
  - [3.5. IAM MFA Overview](#35-iam-mfa-overview)
  - [3.6. IAM MFA hands-on](#36-iam-mfa-hands-on)
  - [3.7. AWS Access Key, CLI and SDK](#37-aws-access-key-cli-and-sdk)
  - [3.8. AWS CLI Setup on Windows](#38-aws-cli-setup-on-windows)
  - [3.9. AWS CLI Setup on Mac](#39-aws-cli-setup-on-mac)
  - [3.10. AWS CLI Setup on Linux](#310-aws-cli-setup-on-linux)
  - [3.11. AWS CLI hands-on](#311-aws-cli-hands-on)
  - [3.12. AWS CloudShell](#312-aws-cloudshell)
  - [3.13. IAM Roles for AWS Services](#313-iam-roles-for-aws-services)
  - [3.14. IAM Roles hands-on](#314-iam-roles-hands-on)
  - [3.15. IAM Security Tools](#315-iam-security-tools)
  - [3.16. IAM Security Tools hands-on](#316-iam-security-tools-hands-on)
  - [3.17. IAM Best Practices](#317-iam-best-practices)
  - [3.18. Shared Responsibility Model for IAM](#318-shared-responsibility-model-for-iam)
  - [3.19. IAM Summary](#319-iam-summary)
- [4. EC2 - Elastic Compute Cloud](#4-ec2---elastic-compute-cloud)
  - [4.1. AWS Budget Setup](#41-aws-budget-setup)
  - [4.2. EC2 Basics](#42-ec2-basics)
  - [4.3. Create an EC2 Instance with EC2 User Data to have a Website hands-on](#43-create-an-ec2-instance-with-ec2-user-data-to-have-a-website-hands-on)
  - [4.4. EC2 Instance type basics](#44-ec2-instance-type-basics)
    - [4.4.1. General purpose](#441-general-purpose)
    - [4.4.2. Compute optimized](#442-compute-optimized)
    - [4.4.3. Memory optimized](#443-memory-optimized)
    - [4.4.4. Storage optimized](#444-storage-optimized)
  - [4.5. Security groups and classic ports overview](#45-security-groups-and-classic-ports-overview)
---

# 1. Course Introduction
## 1.1. Estimated Cost to use services on AWS
1. Registrar: $12.00
1. Route53: $0.50
1. Config: $0.18
1. kms: $0.02
1. Other Services: $0.00
1. Total: $12.7

## 1.2. Different types of cloud computing
1. The scope of management on the application is different
    1. Iaas - Infrastructure as a Service
        1. Amazon EC2
        1. Google Cloud Platform, Digital Ocean
    1. Paas - Platform as a Service
        1. Elastic Ebanstalk
        1. Heroku, Google App Engine, Windows Azure
    1. Saas - Software as a Service
        1. Gmail, Zoom, etc.

# 2. What is Cloud Computing
## 2.1. AWS Cloud Overview
1. AWS Global Infrastructure
    1. AWS Regions
    1. AWS Availability Zones
    1. AWS Data Centers
    1. AWS Edge Locations / Points of Presence
1. We can check the detials at [https://aws.amazon.com/about-aws/global-infrastructure/regions_az/](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
1. Factors to choose an AWS region
    1. Compliance with data goverance and legal requirements: data never leaves a region without your explicit permission.
    1. Proximity to customers: reduced latency.
    1. Available services within a region: new services and new features aren't available in every region.
    1. Pricing: Pricing varies region to region and is transparent in the service pricing page.
1. AWS console
    1. Global Services
        1. Identity and Access Management (IAM)
        1. Route 53 (DNS service)
        1. CloudFront (Content Delivery Network, CDN)
        1. WAF (Web Application Firewall)
    1. Most AWS services are region-scoped
        1. Amazon EC2 (IaaS)
        1. Elastic Beanstalk (PaaS)
        1. Lambda (FaaS)
        1. Rekognition (Saas)

# 3. IAM - Identity and Access Management
## 3.1. IAM Introduction Users, Gruops, Policies
1. IAM stands for Identity and Access Management, which is a Global service.
1. Root account created by default, should be used or shared.
1. Users are people within your organization, and can be grouped.
1. Groups only contain users, not other groups.
1. A user can be isolated and not in any group.
1. A user can be in multiple groups.
1. IAM Permissions can be assigned by "**policies**" in JSON format. The policies define the permissions of the users
1. In AWS, we usually apply the least privilege principle. It means we don't provide additional permissions which the user doesn't need.

## 3.2. IAM Users and Groups hands-on
1. Though we may have root user which can access all the functions in the console, we should have a separated "admin" with scoped privilege.
1. Note that IAM is a global service which policies can be applied to all the regions that the organization has. 
1. Add a new user and create a group
    1. In IAM, we can add a new user by giving "AWS Management Console access" which is an admin role. We can allow user using custom password or generated by the first time and allow the user to reset the password upon 2nd use and so on.
    1. After the user is created, we can create a group and select the privileges we want to assign. For example, admins can have "**AdministratorAccess**". 
    1. We then can add tags and values as description as the metadata of the user.
    1. After the user is created, we can review the user profile and download the list of users in the organization in CSV.
1. In IAM dashboard, we can check the sign-in URL for IAM users. We can also create alias to have a custom URL link. 
1. In AWS management console login page, we can select to login as a root user or IAM. To select the AWS account, we can either use the account ID or the alias we created in IAM dashboard and provide IAM user name with password to login.

## 3.3. IAM Policies
1. IAM Policies scope and groups
    <img src="images/40.jpg">
1. IAM Policies Structure
    <img src="images/41.jpg">

## 3.4. IAM Policies hands-on
1. Remove permission of users by the root user account.
1. Give the user privilege "IAMReadOnlyAccess" which only allows the user to view the data but can't edit the user groups.
1. Create another group with difference privilege(s) and add user to the group. 
1. After configure the settings for a user, we can check a user that which group(s) is the user in and what privilege does the user have.

## 3.5. IAM MFA Overview
1. In AWS, we can setup a password policy
    1. Set a minimum password length
    1. Require specific character types
    1. Allow all IAM users to change their own passwords
    1. Require users to change their password after some time (password expiration)
    1. Prevent password re-use
1. Multi Factor Authentication - MFA
    1. Users have access to your account and can possibly change configurations or delete resources in your AWS account.
    1. You want to protect your Root Accounts and IAM users.
    1. MFA = password you know + security device you own.
1. The main benefit from the featuer is if a password is stolen or hacked, the account is not icompromised.
1. MFA devices options including Virtual MFA device such as 
    1. Google Authenticator (phone only)
    1. Authy (multi-device)
1. MFA devices options can also use Universal 2nd Facgtor (U2F) Security Key, such as YubiKey by Yubico which is a 3rd party device.
    <img src="images/44.jpg">
    <img src="images/45.jpg">

## 3.6. IAM MFA hands-on
1. We can create and change password policy in "Account settings" in IAM. 
    <img src="images/19-setup_security_credentials_mfa.png">
1. After setup the device for MFA, the AWS management console will ask to use passcode from MFA when login. This feature can be very useful to secure root user for AWS account.

## 3.7. AWS Access Key, CLI and SDK
1. To access AWS, we can use the following options
    1. AWS Management Console (protected by password + MFA). This is web-based user interface. 
    1. AWS Command Line Interface (CLI) (protected by access key)
    1. AWS Software Developer Kit (SDK) (protected by access key)
1. Access keys are generated through the AWS console
1. Users manage their own access keys
1. Access Key ID is similar to username
1. Secret Access Key is similar to password
1. AWS CLI
    1. AWS CLI is a tool to interact with AWS services using commands in command-line shell
    1. Direct access to the public APIs of AWS services
    1. We can develop custom scripts to manage your resources
    1. It's an alternative to using AWS management console
1. AWS SDK
    1. AWS SDK is language-specific APIs (set of libraries)
    1. This enables users to access and manage AWS services programmatically

## 3.8. AWS CLI Setup on Windows
## 3.9. AWS CLI Setup on Mac
## 3.10. AWS CLI Setup on Linux
1. We can download AWS CLI version 2 for the OS system we are using from [https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
1. After installing, we can use `aws --version` to check in the command-line shell.

## 3.11. AWS CLI hands-on
1. In IAM, we can check a user from "users" and create security credentials which is a key/value pair. Note that the key value pair can only be checked when it's created. The secrect will be hidden and can't be revoked once we lost it. It's user's responsibility to keep the access key secret safe. 
1. We can configure AWS with `aws configure`, so we can set up the user to login from the command-line shell. 
1. After setting up, we can use `aws iam list-users` to check users created for the AWS account. Note that if the logged in user doesn't have the privilege to access, we can't check the data. This part is similar to the webpage checking "users" in IAM service on AWS management console.

## 3.12. AWS CloudShell
1. This feature is only available in some of the regions. We can check the [list](https://aws.amazon.com/cloudshell/) if the region we are going access has the feature enabled. 
1. This interface is similar to AWS CLI which is web-based. Besides, we can use this tool to easily upload or download the file to the server. 

## 3.13. IAM Roles for AWS Services
1. Some AWS service will need to perform actions on your behalf. We can assign permissions to AWS services with "IAM Roles". This is to allow AWS services execute certain functions by under controlled with IAM privileges. 
1. For example, we have an EC2 instance (virtual server) to do perform certain functions to AWS account. This can be applied to other AWS services such as LAMBDA. 

## 3.14. IAM Roles hands-on
1. In AWS management console, we can check "Roles" tab and create a new "role" for AWS service.
1. We can create a role for certain AWS services. The common services to apply are "EC2" and "LAMBDA". 

## 3.15. IAM Security Tools
1. IAM credentials reports (account-level)
    1. A report that lists all the AWS account's users and the status of their various credentials.
1. IAM Access Advisor (user-level)
    1. Access advisor shows the service permissions granted to a user and when those services were last accessed.
    1. We can use the information to revise IAM policies.

## 3.16. IAM Security Tools hands-on
1. In IAM, we can look up "credential report" to download all the users and settings in CSV.
1. For each user in "users", we can check "Access Advisor" to check what permission(s) is assigned to the user and when did the user last access the permission.

## 3.17. IAM Best Practices
<img src="images/52.jpg">

## 3.18. Shared Responsibility Model for IAM
1. The main take away is that AWS obvious is responsible for all the infrastructure and hardware maintainence an AWS user subscribes. The user must be reponsible for the security, management, and monitoring the usage of AWS services of the AWS account.
    <img src="images/53.jpg">

## 3.19. IAM Summary
<img src="images/54.jpg">

# 4. EC2 - Elastic Compute Cloud
## 4.1. AWS Budget Setup
1. In account settings for billing, we can check to enable `IAM user and role access to Billing information` to allow IAM `admin` users to work on billing related tasks. 
   1. [https://console.aws.amazon.com/billing/home#/account](https://console.aws.amazon.com/billing/home#/account)
2. We can check the bill of an AWS account firstly with Root user access. By clicking the account and go to "My Bill Dashboard".
3. We can check "Bills" in the navigation panel on the left. This shows the services the account used and list of service fee on each service.
    1. Each services groups regions that the AWS account access and uses the service at.
    2. The region group includes all the details in the list that how the account uses the service.
4. We can navigate back to the "Home" page of bills to check usage on free-tier services on AWS. 
5. To create a limited budget spending for each billing cycle, we can create a budget plan in "Budgets".

## 4.2. EC2 Basics
1. We can rent a virtual server from AWS with specific hardware.
    <img src="images/56.jpg">
    <img src="images/57.jpg">
    <img src="images/58.jpg">
2. We can also setup "**EC2 User data**" script to bootstrap an instance when the machine starts.
    <img src="images/59.jpg">

## 4.3. Create an EC2 Instance with EC2 User Data to have a Website hands-on
1. In EC2, we can check "Instances" under Instances and create a new instance by clicking "Launch Instances". It takes several steps to setup a new instance
    1. Choose AMI
        1. This is to select the image for OS and environment of the machine. For example, we can choose Ubuntu 18.04. 
    2. Choose Instance Type
        1. This is the hardware specs such as how many CPU and how much RAM we'd like to have for the machine. 
    3. Configure Instance
        1. We can configure the instance with "User data" in "Advanced Details" down below. This scripts will execute when the machine starts or reboot.
    4. Add Storage
        1. We can have this by default and set if the extra storage should be bound to the instance, so when the instance is removed, the attached storage will be removed. 
    5. Add Tags
        1. We can attach tags with key/value pairs on the instance for up to 50 tags.
    6. Configure Security Group
        1. This allows the server open certain ports to allow conneciton with specified protocol.
        2. For example, the instance has port 22 for TCP connection to allow users to connect through SSH.
        3. We can set up port 80 for TCP connection with HTTP and allow the source at `0.0.0.0/0, ::/0` which means granted all requests that accepts connection from any other machine. This will allow users to connect to the server for website contents with a regular browser.
    7. Review
        1. AWS may give a warning as we open the instance to the world by setting source at `0.0.0.0/0, ::/0`. We may ignore this since we intend to setup the server for website hosting and allow all users to visit the website.
        2. After clicking launch, AWS will ask to select an exisiting key pair or create a new one. This is to allow the AWS user to connect to the instance through SSH.
        3. Note that the `.pem` file is critical for SSH connection as the password and can only be downloaded once. Besides, anyone has the `.pem` file can connect to the instnace through SSH. For security reason, we should carefully manage the file.
2. After creating a new instance, we can manage instances to start, stop, or terminate and dispose the instance if we don't need it.
3. Note that every time the instance stop and start as rebooting, the public IPv4 address will change. 

## 4.4. EC2 Instance type basics

1. There are several [EC2 instance types](https://aws.amazon.com/ec2/instance-types/) focusing on different purposes. 
2. List of EC2 instances [https://ec2instances.info/](https://ec2instances.info/) and [https://instances.vantage.sh/](https://instances.vantage.sh/)
3. We can tell the instance type, generation, and size from its name. 

    <img src="./images/60.jpg">

4. In this course, we use `t2.micro` in free tier which is a general purpose instance.

### 4.4.1. General purpose
1. Great for a diversity of workloads such as web servers or code repositories.
2. It's balanced between 
   1. Compute
   2. Memory
   3. Networking

    <img src="./images/61.jpg">

### 4.4.2. Compute optimized
1. Great for compute intensive tasks that require high performance processors. 
   1. Batch processing workloads
   2. Media transcoding
   3. High performance web servers
   4. High performance computing (HPC)
   5. Scientific modeling and machine learning
   6. Dedicated gaming servers

    <img src="./images/62.jpg">

### 4.4.3. Memory optimized 
1. Fast performance for workloads that process large data sets in memory.
   1. High performance, relational/non-relational databases
   2. Distributed web scale cache stores
   3. In-memory databases optimized for BI (business intelligence)
   4. Applications performing real-time processing of big unstructured data

    <img src="./images/63.jpg">

### 4.4.4. Storage optimized
1. Great for storage-intensive tasks that require high, sequential read and write access to large data sets on local storage. 
   1. High frequency online transaction processing (OLTP) systems
   2. Relational and NoSQL databases
   3. Cache for in-memory databases (for example, Redis)
   4. Data warehousing applications
   5. Distributed file systems

    <img src="./images/64.jpg">

    <img src="./images/65.jpg">

## 4.5. Security groups and classic ports overview
