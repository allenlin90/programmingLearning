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
  - [4.6. Security group hands on](#46-security-group-hands-on)
  - [4.7. SSH Overview](#47-ssh-overview)
  - [4.8. How to SSH using Linux or Mac](#48-how-to-ssh-using-linux-or-mac)
  - [4.9. EC2 Instance Connect](#49-ec2-instance-connect)
  - [4.10. EC2 Roles Demo](#410-ec2-roles-demo)
  - [4.11. EC2 instance purchasing options](#411-ec2-instance-purchasing-options)
    - [4.11.1. EC2 On Demand](#4111-ec2-on-demand)
    - [4.11.2. EC2 Reserved Instances](#4112-ec2-reserved-instances)
    - [4.11.3. EC2 Savings Plans](#4113-ec2-savings-plans)
    - [4.11.4. EC2 Spot Instances](#4114-ec2-spot-instances)
    - [4.11.5. EC2 Dedicated Host](#4115-ec2-dedicated-host)
    - [4.11.6. EC2 Dedicated Instances](#4116-ec2-dedicated-instances)
    - [4.11.7. EC2 Capacity Reservations](#4117-ec2-capacity-reservations)
    - [4.11.8. Which purchasing option is right for me?](#4118-which-purchasing-option-is-right-for-me)
  - [4.12. IP Address Charges in AWS](#412-ip-address-charges-in-aws)
  - [4.13. Shared Responsibility Model for EC2](#413-shared-responsibility-model-for-ec2)
  - [4.14. EC2 Summary](#414-ec2-summary)
  - [4.15. EC2 quiz](#415-ec2-quiz)
- [5. EC2 Instance Storage](#5-ec2-instance-storage)
  - [5.1. EBS overview](#51-ebs-overview)
    - [5.1.1. What's an EBS volume](#511-whats-an-ebs-volume)
    - [5.1.2. EBS Volume](#512-ebs-volume)
    - [5.1.3. EBS - Delete on termination attribute](#513-ebs---delete-on-termination-attribute)
  - [5.2. EBS hands-on](#52-ebs-hands-on)
  - [5.3. EBS snapshot overview](#53-ebs-snapshot-overview)
    - [5.3.1. EBS snapshots features](#531-ebs-snapshots-features)
  - [5.4. EBS Snapshots hands on](#54-ebs-snapshots-hands-on)
  - [5.5. AMI Overview](#55-ami-overview)
    - [5.5.1. AMI Process (from an EC2 instance)](#551-ami-process-from-an-ec2-instance)
  - [5.6. AMI hands on](#56-ami-hands-on)
  - [5.7. EC2 Image Builder](#57-ec2-image-builder)
  - [5.8. EC2 Instance store](#58-ec2-instance-store)
  - [5.9. EFS overview](#59-efs-overview)
    - [5.9.1. EBS vs EFS](#591-ebs-vs-efs)
    - [5.9.2. EFS Infrequent Access (EFS-IA)](#592-efs-infrequent-access-efs-ia)
  - [5.10. Shared Responsibility Model for EC2 Storage](#510-shared-responsibility-model-for-ec2-storage)
  - [5.11. Amazon FSx - Overview](#511-amazon-fsx---overview)
    - [5.11.1. Amazon FSx for Windows File Server](#5111-amazon-fsx-for-windows-file-server)
    - [5.11.2. Amazon FSx for Lustre](#5112-amazon-fsx-for-lustre)
  - [5.12. EC2 Instance Storage Summary](#512-ec2-instance-storage-summary)
- [6. ELB \& ASG - Elastic Load Balancing \& Auto Scaling Groups](#6-elb--asg---elastic-load-balancing--auto-scaling-groups)
  - [6.1. High Availability, Scalability, Elasticity](#61-high-availability-scalability-elasticity)
    - [6.1.1. Vertical Scalability](#611-vertical-scalability)
    - [6.1.2. Horizontal Scalability](#612-horizontal-scalability)
    - [6.1.3. High Availability](#613-high-availability)
    - [6.1.4. High Availability \& Scalability for EC2](#614-high-availability--scalability-for-ec2)
    - [6.1.5. Scalability vs Elasticity (vs Agility)](#615-scalability-vs-elasticity-vs-agility)
  - [6.2. Elastic Loading Balancing (ELB) Overview](#62-elastic-loading-balancing-elb-overview)
    - [6.2.1. What is load balancing?](#621-what-is-load-balancing)
    - [6.2.2. Why use a load balancer?](#622-why-use-a-load-balancer)
    - [6.2.3. Why use an Elastic Load Balancer?](#623-why-use-an-elastic-load-balancer)
    - [6.2.4. Difference between ALB, NLB, GLB](#624-difference-between-alb-nlb-glb)
  - [6.3. Application Load Balancer (ALB) Hands on](#63-application-load-balancer-alb-hands-on)
  - [6.4. Auto scaling groups (ASG) Overview](#64-auto-scaling-groups-asg-overview)
  - [6.5. Auto scaling groups (ASG) Hands on](#65-auto-scaling-groups-asg-hands-on)
  - [6.6. Auto scaling groups (ASG) Strategies](#66-auto-scaling-groups-asg-strategies)
  - [6.7. Section Cleanup](#67-section-cleanup)
  - [6.8. ELB \& ASG Summary](#68-elb--asg-summary)
- [7. Amazon S3](#7-amazon-s3)
  - [7.1. S3 Overview](#71-s3-overview)
    - [7.1.1. Amazon S3 use cases](#711-amazon-s3-use-cases)
    - [7.1.2. Amazon S3 - Buckets](#712-amazon-s3---buckets)
    - [7.1.3. Amazon S3 - Objects](#713-amazon-s3---objects)
  - [7.2. S3 Hands on](#72-s3-hands-on)
  - [7.3. S3 security Bucket policy](#73-s3-security-bucket-policy)
    - [7.3.1. S3 security](#731-s3-security)
    - [7.3.2. S3 bucket policies](#732-s3-bucket-policies)
    - [7.3.3. Example: Public Access - Bucket Policy](#733-example-public-access---bucket-policy)
    - [7.3.4. Example: User Access to S3 - IAM permissions](#734-example-user-access-to-s3---iam-permissions)
    - [7.3.5. Example: EC2 instance Access to S3 - IAM roles](#735-example-ec2-instance-access-to-s3---iam-roles)
    - [7.3.6. Advanced: Cross-Account access - Bucket Policy](#736-advanced-cross-account-access---bucket-policy)
    - [7.3.7. Bucket settings for block public access](#737-bucket-settings-for-block-public-access)
  - [7.4. S3 security: Bucket policy hands-on](#74-s3-security-bucket-policy-hands-on)
  - [7.5. S3 website overview](#75-s3-website-overview)
  - [7.6. S3 Website hands on](#76-s3-website-hands-on)
  - [7.7. S3 Versioning overview](#77-s3-versioning-overview)
  - [7.8. S3 versioning hands on](#78-s3-versioning-hands-on)
  - [7.9. S3 Replication overview](#79-s3-replication-overview)
  - [7.10. S3 Replication hands on](#710-s3-replication-hands-on)
  - [7.11. S3 Storage Classes](#711-s3-storage-classes)
    - [7.11.1. S3 Durability and Availability](#7111-s3-durability-and-availability)
    - [7.11.2. S3 Standard - General Purpose](#7112-s3-standard---general-purpose)
    - [7.11.3. S3 Storage Classes - Infrequent Access](#7113-s3-storage-classes---infrequent-access)
    - [7.11.4. Amazon S3 Glacier Storage Classes](#7114-amazon-s3-glacier-storage-classes)
    - [7.11.5. S3 Intelligent - Tiering](#7115-s3-intelligent---tiering)
  - [7.12. S3 Storage Classes Hands On](#712-s3-storage-classes-hands-on)
  - [7.13. S3 Encryption](#713-s3-encryption)
  - [7.14. IAM Access Analyzer for S3](#714-iam-access-analyzer-for-s3)
  - [7.15. Shared Responsibility Model for S3](#715-shared-responsibility-model-for-s3)
  - [7.16. AWS Snow Family overview](#716-aws-snow-family-overview)
    - [7.16.1. Data Migrations with Snowball](#7161-data-migrations-with-snowball)
    - [7.16.2. What is edge computing?](#7162-what-is-edge-computing)
  - [7.17. AWS Snowball Edge - Pricing](#717-aws-snowball-edge---pricing)
  - [7.18. Storage Gateway Overview](#718-storage-gateway-overview)
  - [7.19. S3 Summary](#719-s3-summary)

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
1. The main benefit from the feature is if a password is stolen or hacked, the account is not compromised.
1. MFA devices options including Virtual MFA device such as
   1. Google Authenticator (phone only)
   1. Authy (multi-device)
1. MFA devices options can also use Universal 2nd Factor (U2F) Security Key, such as YubiKey by Yubico which is a 3rd party device.
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

1. In IAM, we can check a user from "users" and create security credentials which is a key/value pair. Note that the key value pair can only be checked when it's created. The secret will be hidden and can't be revoked once we lost it. It's user's responsibility to keep the access key secret safe.
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

1. The main take away is that AWS obvious is responsible for all the infrastructure and hardware maintenance an AWS user subscribes. The user must be responsible for the security, management, and monitoring the usage of AWS services of the AWS account.
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
      1. This allows the server open certain ports to allow connection with specified protocol.
      2. For example, the instance has port `22` for TCP connection to allow users to connect through SSH.
      3. We can set up port `80` for TCP connection with HTTP and allow the source at `0.0.0.0/0, ::/0` which means granted all requests that accepts connection from any other machine. This will allow users to connect to the server for website contents with a regular browser.
   7. Review
      1. AWS may give a warning as we open the instance to the world by setting source at `0.0.0.0/0, ::/0`. We may ignore this since we intend to setup the server for website hosting and allow all users to visit the website.
      2. After clicking launch, AWS will ask to select an existing key pair or create a new one. This is to allow the AWS user to connect to the instance through SSH.
      3. Note that the `.pem` file is critical for SSH connection as the password and can only be downloaded once. Besides, anyone has the `.pem` file can connect to the instance through SSH. For security reason, we should carefully manage the file.
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

1. Security groups are the fundamental of network security in AWS.
2. They control how traffic is allowed into or out of our EC2 instances.
3. Security groups only contain allow rules.
4. Security groups rules can reference by IP or by security group.
5. Security groups are acting as "**firewall**" on EC2 instances.
6. They regulate

   1. access to ports
   2. Authorized IP ranges - IPv4 and IPv6
   3. Control of inbound network (from other to the instance)
   4. Control of outbound network (from the instance to other)

    <img src="./images/67.jpg">
    <img src="./images/68.jpg">

7. Security group good to know

   1. A security group can be attached to multiple instances, while an instance can attach multiple security groups too.
   2. Security group is locked down to the region/VPC combination.
   3. Security group lives outside the EC2. It means that if the traffic is blocked, the EC2 instance won't see the request/traffic.
   4. It's good to maintain one separate security group for SSH access.
   5. Usually if an application is not accessible (timeout), it can be an issue from security group.
   6. On the other hand, if the connection gets a "connection refused" error, it can be an error from the application in EC2 or the app is not even running.
   7. All inbound traffic is **blocked** by default.
   8. All outbound traffic is **authorized** by default.

    <img src="./images/69.jpg">

8. A security group can reference other security groups.
9. For example, we can specify if traffic from security group 1 and 2 is authorized, so if there's any other instances applying security group other than 1 and 2 (such as applying 3), the request will be blocked.

   <img src="./images/70.jpg">

10. Classic ports to know
    1. `22` - SSH (Secure Shell) - log into a linux instance.
    2. `21` - FTP (File Transfer Protocol) - upload files into a file share.
    3. `22` - SFTP (Secure File transfer Protocol) - upload files using SSH.
    4. `80` - HTTP - access unsecured websites
    5. `443` - HTTPS - access secured websites
    6. `3389` - RDP (Remote Desktop Protocol) - log into a Windows instance.
11. `22` and `3389` are like counterparts for connecting to instances using different OS.

    <img src="./images/71.jpg">

## 4.6. Security group hands on

1. When checking on an EC2 instance, we can check on its **security** which shows the security group attaching to it.
2. The security tab shows the overview of the inbound and outbound rule of the instance.
3. In addition, we can review the details of the security group from the network and security section in the left panel.
4. If we have a web app server app running on the instance and open port `80` for inbound HTTP traffic, we can access the web app by visiting its IP address.
5. Note that if the connection to the EC2 instance times out (keeping loading in the client such as browser or SSH), it's usually an issue from security group setup.
6. An EC2 instance can attach multiple security groups.
7. All the outbound traffic are allowed by default.

## 4.7. SSH Overview

<img src="./images/72.jpg">

## 4.8. How to SSH using Linux or Mac

1. In the security group section, the security rule allows `SSH` inbound traffic through port `22` from any address `0.0.0.0/0`.
2. We can put the `.pem` file we downloaded when setting up EC2 and use SSH client to access the EC2 instance with its public IPv4 address.
3. Note that for simplicity, we can change directory to where the `.pem` file is and use SSH client.
4. Besides, the ownership of the file should be set as `chmod 0400`

   ```shell
   # cd to the directory where the .pem file locates
   chmod 0400 {{your_pem_file}}.pem
   # ec2-user is setup by AWS by default
   ssh -i {{your_pem_file}}.pem ec2-user@{{your_ec2_public_ipv4_address}}
   ```

## 4.9. EC2 Instance Connect

<img src="./images/77.jpg">

## 4.10. EC2 Roles Demo

1. As for security, never keep IAM API key in the server EC2 instance directly.
2. The AWS credentials should be provided through IAM roles only.
3. Note that AWS CLI tool is installed in the EC2 instance by default.
4. In the managing console, we can attach an IAM role to the EC2 instance
   1. Instance > Action > Security
5. Note that it can take some time (few seconds for update to IAM reflecting to the instance).

```shell
# aws users and credentials
aws iam list-users
```

## 4.11. EC2 instance purchasing options

<img src="./images/78.jpg">

### 4.11.1. EC2 On Demand

1. Pay for what you use
   1. Linux or Windows - billing per second, after the first minute
   2. All other operating systems - billing per hour
2. Has the highest cost but no upfront payment
3. No long-term commitment
4. Recommended for short-term and un-interrupted workloads, where you can't predict how the application will behave.

<img src="./images/79.jpg">

### 4.11.2. EC2 Reserved Instances

1. Higher amount of discount compared to on-demand.
   1. The discount rate can change over time.
2. You reserve a specific instance attributes (Instance type, Region, Tenancy, OS).
3. Reservation period - 1 year (discount) or 3 years (discount++).
4. Payment options
   1. No upfront
   2. Partial upfront
   3. All upfront
5. Reserved instance's scope - Regional or Zonal (reserve capacity in an AZ).
6. Recommended for steady-state usage applications (think database).
7. You can buy and sell in the reserved instance marketplace.
8. Convertible reserved instance is a special instance type that
   1. can change the EC2 instance type, instance family, OS, scope and tenancy.

<img src="./images/80.jpg">

### 4.11.3. EC2 Savings Plans

1. Get a discount based on long-term usage (up to 72% - same as RIs).
2. Commit to a certain type of usage ($10/hour for 1 or 3 years).
3. Usage beyond EC2 savings plans is billed at the on-demand price.
4. Locked to a specific instance family and AWS region (e.g. M5 in us-east-1)
5. Flexible across
   1. Instance size (e.g. m5.xlarge, m5.2xlarge)
   2. OS (e.g. Linux, Windows)

### 4.11.4. EC2 Spot Instances

1. Can get a discount of up to 90% compared to on-demand.
2. Instances that you can "lose" at any point of time if your max price is less than the current spot price.
3. The **MOST cost-efficient** instances in AWS.
4. Useful for workloads that are resilient to failure.
   1. Batch jobs
   2. Data analysis
   3. Image processing
   4. Any distributed workloads
   5. Workloads with a flexible start and end time
5. Not suitable for critical jobs or database

<img src="./images/81.jpg">

### 4.11.5. EC2 Dedicated Host

1. A physical server with EC2 instance capacity fully dedicated to your use.
2. Allows you address compliance requirements and use your existing server-bound software licenses (per-socket, per-core, pe-vm software licenses).
3. Purchasing options
   1. On-demand - pay per second for active dedicated host
   2. Reserved - 1 or 3 years (No upfront, partial upfront, all upfront)
4. The most expensive option
5. Useful for software that have complicated licensing model (BYOL - Bring your own license)
6. Or for companies that have strong regulatory or compliance needs

<img src="./images/82.jpg">

### 4.11.6. EC2 Dedicated Instances

1. Instances run on hardware that's dedicated to you.
2. May share hardware with other instances in same account.
3. No control over instance placement (can move hardware after stop/start)

<img src="./images/83.jpg">

### 4.11.7. EC2 Capacity Reservations

1. Reserve on-demand instances capacity in a specific AZ for any duration.
2. You always have access to EC2 capacity when you need it.
3. No time commitment (create/cancel anytime), no billing discounts.
4. Combine with **Regional Reserved Instances** and **Saving Plans** to benefit from billing discounts.
5. You're charged at on-demand rate whether you run instance or not.
6. Suitable for short-term, uninterrupted workloads that needs to be in a specific AZ.

### 4.11.8. Which purchasing option is right for me?

1. **On demand**: coming and staying in resort whenever we like, we pay the full price.
2. **Reserved**: like planning ahead and if we plan to stay for a long time, we may get a good discount.
3. **Saving plans**: pay a certain amount per hour for certain period and stay in any room type (e.g. King, Suite, Sea view,...).
4. **Spot instances**: The hotel allows people to bid for the empty rooms and the highest bidder keeps the rooms. You can get kicked out at any time.
5. **Dedicated host**: We book an entire building of the resort.
6. **Capacity reservations**: You book a room for a period with full price even you don't stay in it.

<img src="./images/84.jpg">

- Price difference between plans of the same instance type

<img src="./images/85.jpg">

## 4.12. IP Address Charges in AWS

1. Starting from Feb. 2024, there's a charge for all public IPv4 created in the account.
2. `$0.005` per hour, which is $3.6 per month.
3. AWS only proves 750 hours/month for free tier on EC2.
4. Anything beyond the free tier will have additional charges.
5. For example, if we have a database and want to connect it from the public, it needs the other public IPv4 which will have extra costs.
6. Though public IPv6 is free from AWS at the moment, many ISPs don't support it.
7. We can check from bill and costs management to verify costs if there's addition IPv4 charges.
8. Besides, we can check IP address at IPAM (Amazon VPC IP Address Manager) to check on public IP addresses.

## 4.13. Shared Responsibility Model for EC2

| AWS                                      | User                                                     |
| ---------------------------------------- | -------------------------------------------------------- |
| Infrastructure (global network security) | Security Group rules                                     |
| Isolation on physical hosts              | Operating-system patches and updates                     |
| Replacing faulty hardware                | Software and utilities installed on the EC2 instance     |
| Compliance validation                    | IAM roles assigned to EC2 and IAM user access management |
|                                          | Data security on your instance                           |

<img src="./images/86.jpg">

## 4.14. EC2 Summary

1. EC2 instance: AMI (OS) + Instance Size (CPU + RAM) + Storage + security groups + EC2 user data
2. Security groups: Firewall attached to the EC2 instance
3. EC2 user data: Script launched at the first start of an instance
4. SSH: Start a terminal into our EC2 instances (port 22)
5. EC2 Instance Role: Link to IAM roles
6. Purchasing Options: On-demand, Spot, Reserved (Standard + Convertible), Dedicated Host, Dedicated Instance

<img src="./images/87.jpg">

## 4.15. EC2 quiz

1. Which EC2 purchasing option can provide the biggest discount, but is not suitable for critical jobs or databases?
   1. Reserved instances
   2. Convertible instances
   3. Dedicated instances
   4. Spot instances

# 5. EC2 Instance Storage

## 5.1. EBS overview

### 5.1.1. What's an EBS volume

1. An EBS (Elastic Block Store) Volume is a **network** drive you can attach to your instances while they run.
2. It allows your instances to persist data, even after their termination.
3. They can only be mounted to one instance at a time (at the CCP level).
4. They are bound to a specific availability zone.
5. Analogy: Think of EBS as a **network USB stick**.
6. Free tier: 30 GB of free EBS storage of type General Purpose (SSD) or Magnetic per month.

<img src="./images/89.jpg">

### 5.1.2. EBS Volume

1. It's a network drive (i.e. not a physical drive)
   1. It uses the network to communicate the instance, which means there might be a bit of latency.
   2. It can be detached from a EC2 instance and attached to another one quickly.
2. It's locked to an availability zone (AZ)
   1. An EBS volume in **us-east-1a** cannot be attached to **us-east-1b**.
   2. To move a volume across, you first need to snapshot it
3. Have a provisioned capacity (size in GBs, and IOPS)

   1. You get billed for all the provisioned capacity.
   2. You can increase the capacity of the drive over time.

   <img src="./images/90.jpg">

4. An EBS is not necessarily attached to an EC2 and can be standalone.
   <img src="./images/91.jpg">

5. In AWS Cloud Practitioner level, we view an EBS is only attachable to a single instance.
6. However, there's `io1` and `io2` can be used for EBS multi-attach that an EBS can be attached to multiple EC2 instances.

### 5.1.3. EBS - Delete on termination attribute

1. When we create an EBS volume in the console, we can find **Delete on Termination** option.
2. It controls the EBS behavior when an EC2 instance terminates.

   1. By default, the root EBS volume is deleted (attribute enabled).
   2. By default, any other attached EBS volume is not deleted (attribute disabled).

3. This can be controlled by the AWS console / AWS CLI.
4. Use case: preserve root volume when instance is terminated.

   <img src="./images/92.jpg">

## 5.2. EBS hands-on

1. When checking on an instance, we can check on the **storage** section for the EBS.
2. On the other hand, we can access the volume through **Elastic Block Store** on the same of EC2 on the left panel.
3. After creating a volume, we can attach it to an EC2 instance.
4. Note that an EBS is specific to an AZ (availability zone).
5. After attaching the EBS, we can check from the attached EC2 instance for its block devices.

## 5.3. EBS snapshot overview

1. Make a backup (snapshot) of your EBS volume at a point in time.
2. Not necessary to detach volume to do snapshot, but recommended.
3. Can copy snapshots across AZ or Region.

   <img src="./images/93.jpg">

### 5.3.1. EBS snapshots features

1. EBS snapshot archive

   1. Move a snapshot to an archive tier that is 75% cheaper.
   2. Takes within 24 to 72 hours for restoring the archive.

2. Recycle bin for EBS snapshots

   1. Setup rules to retain deleted snapshots so you can recover them after an accidental deletion.

## 5.4. EBS Snapshots hands on

1. We can create a snapshot in the volumes of EBS.
2. After creating the snapshot, we can check on the snapshot in **Snapshots** section.
3. We can then copy the snapshot to the other region.
4. We can create a volume from a snapshot.
5. In the **Snapshot** section, we can check **Recycle Bin** which can protect EBS snapshots from accidental deletion.
6. In Recycle Bin service, we can setup retention rule, such as retention period to keep a deleted snapshot a certain duration of time.

## 5.5. AMI Overview

1. AMI = Amazon Machine Image
2. AMI are a customization of an EC2 instance

   1. You add your own software, configuration, operating system, monitoring...
   2. Faster boot/configuration time because all your software is prepacked.

3. AMI are built for a specific region (and can be copied across regions)
4. You can launch EC2 instances from

   1. A public AMI: AWS provided
   2. Your own AMI: you make and maintain them yourself
   3. An AWS Marketplace AMI: an AMI someone else made (and potentially sells)

   <img src="./images/94.jpg">

### 5.5.1. AMI Process (from an EC2 instance)

1. Start an EC2 instance and customize it
2. Stop the instance (for data integrity)
3. Build an AMI - this will also creates EBS snapshots
4. Launch instances from other AMIs

   <img src="./images/95.jpg">

## 5.6. AMI hands on

1. On a created EC2 instance in AWS console, we check on **Image and templates** to create an image from an EC2.
2. We then can check from **Images** section for `AMIs` on the left panel.
3. Besides, we can launch a new EC2 instance on AMI page or create an instance with an AMI.

## 5.7. EC2 Image Builder

1. Used to automate the creation of virtual machines or container images.

   1. Automate the creation, maintain, validate and test EC2 AMIs.

2. Can be run on a schedule (weekly, whenever packages are updated, etc.)
3. EC2 image builder is a free service.
4. We only pay for the underlying resources, such as creating a builder EC2 instance, testing instances, and distributed instances from the AMI.

   <img src="./images/96.jpg">

## 5.8. EC2 Instance store

1. EBS volumes are network drives with good but _limited_ performance.
2. If you need a high-performance hardware disk, use EC2 instance store.
3. Better I/O performance
4. EC2 instance store lose their storage if they're stopped (ephemeral).
5. Good for buffer / cache / scratch data / temporary content.
6. Risk of data loss if hardware fails.
7. Backups and Replication are your responsibility.

   <img src="./images/97.jpg">

8. Comparing to EBS, EC2 instance storage has much higher throughput and I/O performance.

   <img src="./images/98.jpg">

## 5.9. EFS overview

1. Managed NFS (network file system) that can be mounted on 100s (multiple) of EC2.
2. Unlike `EBS` which can only be mounted to a single EC2 instance at a time.
3. `EFS` works with Linux EC2 instances in multi-AZ.
4. Highly available, scalable, expensive (3x `gp2`), pay per use, no capacity planning.

   <img src="./images/99.jpg">

### 5.9.1. EBS vs EFS

1. An EBS can only attach to a single EC2 instance.
2. When duplicating EBS across AZ, we need to create a snapshot and restore the snapshot to a new EBS, so we can attach it to an EC2 instance in the other AZ.
3. Note that the new EBS is just a replica from the snapshot, so the EBS in 2 AZs can be out of sync.
4. On the other hand, an EC2 instances in different AZs can access the same EFS to share the data and files.

   <img src="./images/100.jpg">

### 5.9.2. EFS Infrequent Access (EFS-IA)

1. Storage class that is cost-optimized for files not accessed every day.
2. Up to 92% lower cost compared to EFS standard.
3. When EFS-IA is enabled, EFS will automatically move the files to EFS-IA based on the last time they were accessed.
4. Enable EFS-IA with a **lifecycle policy**
   1. For example, moving a file that is not accessed in the last 60 days.
5. There's no drawback for the mechanism, as the application will not be aware if the files and data are kept at EFS or EFS-IA.

   <img src="./images/101.jpg">

## 5.10. Shared Responsibility Model for EC2 Storage

| AWS                                                 | User                                               |
| --------------------------------------------------- | -------------------------------------------------- |
| Infrastructure                                      | Setting up backup/snapshot procedures              |
| Replication for data for EBS volumes and EFS drives | Setting up data encryption                         |
| Replacing faulty hardware                           | Responsibility of any data on the drives           |
| Ensuring their employees cannot access your data    | Understanding the risk of using EC2 instance store |

   <img src="./images/102.jpg">

## 5.11. Amazon FSx - Overview

1. Launch 3rd party high-performance file systems on AWS.
2. Fully managed service.

### 5.11.1. Amazon FSx for Windows File Server

1. A fully managed, highly reliable, and scalable **Windows native** shared file system.
2. Built on **Windows File Server**
3. Supports **SMB protocol** and Windows NTFS.
4. Integrated with Microsoft Active Directory.
5. Can be accessed from AWS or your on-premise infrastructure.

   <img src="./images/103.jpg">

### 5.11.2. Amazon FSx for Lustre

1. A fully managed, high-performance, scalable file storage for High Performance Computing (HPC).
2. The name Lustre is derived from **Linux** and **cluster**
3. Machine learning, Analytics, Video Processing, Financial Modeling...
4. Scales up to 100s GB/s, millions of IOPS, sub-ms latencies.

   <img src="./images/104.jpg">

## 5.12. EC2 Instance Storage Summary

1. EBS volumes:
   1. network drives attached to one EC2 instance at a time.
   2. Mapped to an Availability Zone.
   3. Can use EBS snapshots for backups/transferring EBS volumes across AZ.
2. AMI: create ready-to-use EC2 instances with our customizations.
3. EC2 Image Builder: automatically build, test and distribute AMIs.
4. EC2 Instance Store:
   1. High performance hardware disk attached to our EC2 instance.
   2. Lost if our instance is stopped/terminated.
5. EFS: network file system, can be attached to 100s of instances in a region.
6. EFS-IA: cost-optimized storage class for infrequent accessed files.
7. FSx for Windows: Network File System for Windows servers.
8. FSx for Lustre: High Performance Computing Linux file system.

   <img src="./images/105.jpg">

# 6. ELB & ASG - Elastic Load Balancing & Auto Scaling Groups

## 6.1. High Availability, Scalability, Elasticity

1. Scalability means that an application / system can handle greater loads by adapting.
2. There are two kinds of scalability

   1. Vertical Scalability
   2. Horizontal Scalability (=elasticity)

3. Scalability is linked but different to **High Availability**

   <img src="./images/107.jpg">

### 6.1.1. Vertical Scalability

1. Vertical Scalability means increasing the size of the instance.
2. For example, your application runs a **t2.micro**.
3. Scaling that application vertically means running it on a **t2.large**.
4. Vertical scalability is very common for non-distributed systems, such as database.
5. There's usually a limit to how much you can vertically scale (hardware limit).

   <img src="./images/108.jpg">

### 6.1.2. Horizontal Scalability

1. Horizontal Scalability means increasing the number of instances/systems for your application.
2. Horizontal scaling implies distributed systems.
3. This is very common for web applications/modern applications.
4. It's easy to horizontally scale thanks the cloud offerings such as Amazon EC2.

   <img src="./images/109.jpg">

### 6.1.3. High Availability

1. High availability usually goes hand in hand with horizontal scaling.
2. High availability means running your application/ system in at least 2 Availability Zones.
3. The goal of high availability is to survive a data center loss (disaster).

   <img src="./images/110.jpg">

### 6.1.4. High Availability & Scalability for EC2

1. Vertical Scaling: Increase instance size (=scale up/down)

   1. From: t2.nano - 0.5G of RAM, 1 vCPU
   2. To: u-12tb1.metal - 12.3TB of RAM, 448 vCPUs

2. Horizontal Scaling: Increase number of instances (=scale out/in)

   1. Auto scaling group
   2. Load balancer

3. High Availability: Run instances for the same application across multiple AZ.

   1. Auto Scaling Group multiple AZ
   2. Load Balancer multiple AZ

   <img src="./images/111.jpg">

### 6.1.5. Scalability vs Elasticity (vs Agility)

1. Scalability: ability to accommodate a larger load by making the hardware stronger (scale up), or by adding nodes (scale out).
2. Elasticity: once a system is scalable, elasticity means that there will be some "**auto-scaling**" so that the system can scale based on the load. This is "**cloud-friendly**": pay-per-use, match demand, optimize costs.
3. Agility: (not related to scalability - distractor) new IT resources are only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes.

   <img src="./images/112.jpg">

## 6.2. Elastic Loading Balancing (ELB) Overview

### 6.2.1. What is load balancing?

1. Load balancers are servers that forward internet traffic to multiple servers (EC2 instances) downstream.

   <img src="./images/113.jpg">

### 6.2.2. Why use a load balancer?

1. Spread load across multiple downstream instances
2. Expose a single point of access (DNS) to your application
3. Seamlessly handle failures of downstream instances
4. Do regular health checks to your instances
5. Provide SSL termination (HTTPS) for your websites
6. High availability across zones

   <img src="./images/114.jpg">

### 6.2.3. Why use an Elastic Load Balancer?

1. An ELB (Elastic Load Balancer) is a **managed load balancer**
   1. AWS guarantees that it will be working
   2. AWS takes care of upgrades, maintenance, high availability
   3. AWS provides only a few configuration knobs
2. It costs less to setup your own load balancer but it will be a lot more effort on your end (maintenance, integrations)
3. 4 kinds of load balancers offered by AWS:

   1. Application Load Balancer (HTTP/HTTPS only) - Layer 7
   2. Network Load Balancer (ultra-high performance, allows for TCP) - Layer 4
   3. Gateway Load Balancer - Layer 3
   4. Class Load Balancer (retired in 2023) - Layer 4 & 7

    <img src="./images/115.jpg">

### 6.2.4. Difference between ALB, NLB, GLB

| Application Load Balancer           | Network Load Balancer                             | Gateway Load Balancer                                       |
| ----------------------------------- | ------------------------------------------------- | ----------------------------------------------------------- |
| HTTP/HTTPS/gRPC protocols (Layer 7) | TCP/UDP protocols (Layer 4)                       | GENEVE protocol on IP packets (Layer 3)                     |
| HTTP Routing features               | High Performance: millions of request per seconds | Route Traffic to firewalls that you manage on EC2 instances |
| Static DNS (URL)                    | Static IP through Elastic IP                      | Intrusion detection or deep packet inspection               |

1. Gateway load balancer doesn't balance load of applications but balance the load of traffic to the virtual appliances that you run on EC2 instances so that you can analyze the traffic or perform firewall operations.
2. Therefore, when a request hits the architecture using GLB, the traffic will be sent to EC2 instances (3rd party security virtual appliances) to analyze the traffic.
3. The traffic will be sent back to GLB and forward back to the applications.
4. GLB allow us to analyze IP packets and perform firewall features, intrusion detection, or deep packet inspection.

   <img src="./images/aws_load_balancers.png">

## 6.3. Application Load Balancer (ALB) Hands on

1. To enable ALB, we need multiple EC2 instances to be balanced for the traffic.
2. In this case, we can create 2 `t2.micro` instances for experiment.
   1. Don't need key pair because SSH is not required.
   2. Select existing security group and re-use settings for accessible protocols such as HTTP and SSH.
3. We can use some configuration for EC2 user data in advanced settings.
4. The following settings are just to create a simple HTTP server with `httpd` (apache server) and return HTML.

   ```bash
   #!/bin/bash
   # Use this for your user data (script from top to bottom)
   # install httpd (Linux 2 version)
   yum update -y
   yum install -y httpd
   systemctl start httpd
   systemctl enable httpd
   echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html
   ```

5. After creating the instances, we can create load balancers in **Load Balancing** section.
6. We can keep the IP address type as `IPv4`.
7. Assign the load balancer to all the AZs we want to handle the traffic in the region.
8. Select the security group.
   1. In this case, we create a new security group which allows only HTTP/HTTPS traffic.
9. Create a target group where the load balancer points to
   1. The targets in this context are the EC2 instances that we want the load balancer directs.
   2. We can select instances, Lambda functions, or the other load balancer to handle and forward the traffic.
10. Load balancers checks instances health that if any of the instances are down, the traffic will only be forwarded to the healthy instances in the target group.

## 6.4. Auto scaling groups (ASG) Overview

1. In real-life, the load on your website and application can change.
2. In the cloud, you can create and get rid of servers very quickly.
3. The goal of an Auto Scaling Group (ASG) is to:

   1. Scale out (add EC2 instances) to match an increased load.
   2. Scale in (remove EC2 instances) to match a decreased load.
   3. Ensure we have a minimum and a maximum number of machines running.
   4. Automatically register new instances to a load balancer.
   5. Replace unhealthy instances.

4. Cost savings: only run at an optimal capacity (principle of the cloud)

   <img src="./images/116.jpg">

   <img src="./images/117.jpg">

5. ASG works hand in hand with Load balancer.
6. When the traffic goes high and more EC2 instances are created, load balancer will register the instances and distribute traffic accordingly.

   <img src="./images/118.jpg">

## 6.5. Auto scaling groups (ASG) Hands on

1. To experiment ASG, we can firstly terminate the running instances.
2. Navigate to **Auto Scaling** section on the left panel for **Auto Scaling Groups**.
3. We then can setup a **launch template** which tells AWS how to create new instances.
4. The configuration and flow is very similar to setting up an EC2 instance.
5. We can attach existing and re-use security group settings.
6. Besides, we can attach user data as when we create EC2 instance.
7. For example, creating a simple HTTP server with apache server

   ```bash
   #!/bin/bash
   # Use this for your user data (script from top to bottom)
   # install httpd (Linux 2 version)
   yum update -y
   yum install -y httpd
   systemctl start httpd
   systemctl enable httpd
   echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html
   ```

8. After creating the launch template, we can select it in the auto scaling group.
9. After selecting the launch template for EC2 instance templates, we can configure the other settings such as networking, load balancer, and health check.
10. Besides, we can configure group size to set target desired number of EC2 instances with minimum and maximum number.
    1. Minimum capacity at `1`
    2. Target capacity at `2`
    3. Maximum capacity at `4`
11. If any of the instances in the target group becomes unhealthy, ASG will spin up the other instance to cope up with the desire capacity which is `2` in this case.
12. For example, we can manually terminate one of the instances in the target group.

## 6.6. Auto scaling groups (ASG) Strategies

1. Manual Scaling: Update the size of an ASG manually
2. Dynamic Scaling: Respond to changing demand

   1. Simple/step scaling
      1. When a CloudWatch alarm is triggered (example `CPU > 70%`), then add 2 units
      2. When a CloudWatch alarm is triggered (example `CPU < 30%`), then remove 1 unit
   2. Target tracking scaling
      1. Example: I want the average ASG CPU to stay at around `40%`.
   3. Scheduled scaling
      1. Anticipate a scaling based on known usage patterns.
      2. Example: increase the min capacity to `10` at 5pm on Fridays.

   <img src="./images/119.jpg">

3. Predictive scaling

   1. Uses **machine learning** to predict future traffic ahead of time.
   2. Automatically provisions the right number of EC2 instances in advance.
   3. Useful when your load has predictable time-based patterns

   <img src="./images/120.jpg">

## 6.7. Section Cleanup

1. To remove the instances, we need to remove the auto scaling group (ASG) rather than the instances.
2. Otherwise, ASG will keep adding new instances to the target group.
3. After deleting ASG, we can delete the load balancer.

## 6.8. ELB & ASG Summary

1. High Availability vs Scalability (vertical and horizontal) vs Elasticity vs Agility in the Cloud.
2. Elastic Load Balancers (ELB)
   1. Distribute traffic across backend EC2 instances, can be multi-AZ.
   2. Supports health checks
   3. 4 types: Class (old), Application (HTTP - L7), Network (TCP - L4), Gateway (L3).
3. Auto Scaling Groups (ASG)

   1. Implement Elasticity for your application across multiple AZs.
   2. Scale EC2 instances based on the demand on your system, replace unhealthy.
   3. Integrated with the ELB.

   <img src="./images/121.jpg">

# 7. Amazon S3

## 7.1. S3 Overview

1. Amazon S3 is one of the main building blocks of AWS
2. It's advertised as "**infinitely scaling**" storage
3. Many websites use Amazon S3 as a backbone
4. Many AWS services use Amazon S3 as an integration as well

   <img src="./images/123.jpg">

### 7.1.1. Amazon S3 use cases

1. Backup and storage
2. Disaster Recovery
3. Archive
4. Hybrid Cloud storage
5. Application hosting
6. Media hosting
7. Data lakes and big data analytics
8. Software delivery
9. Static website

   <img src="./images/124.jpg">

### 7.1.2. Amazon S3 - Buckets

1. Amazon S3 allows people to store objects (files) in "buckets" (directories).
2. Buckets must have a globally unique name (across all regions all accounts).
3. Buckets are defined at the region level.
4. S3 looks like a global service but buckets are created in a region.
5. Naming convention

   1. No uppercase, No underscore
   2. 3-63 characters long
   3. Not an IP
   4. Must start with lowercase letter or number
   5. Must NOT start with the prefix `xn--`
   6. Must NOT end with the suffix `-s3alias`

   <img src="./images/125.jpg">

### 7.1.3. Amazon S3 - Objects

1. Objects (files) have a Key.
2. The `key` is the FULL path:
   1. `s3://my-bucket/my_file.txt`
   2. `s3://my-bucket/my_folder/another_folder/my_file.txt`
3. The key is composed of `prefix` + `object name`
   1. `s3://my-bucket/my_folder1/another_folder/my_file.txt`
4. There's no concept of `directories` with buckets. (Although the UI will trick you to think otherwise)
5. Just keys with very long names that contain slashes (`/`).

   <img src="./images/126.jpg">

6. Object values are the content of the body

   1. Max object size is 5TB.
   2. If uploading more than 5GB, must use "multi-part" upload.

7. Metadata (list of text key/value pairs - system or user metadata).
8. Tags (unicode key/value pair - up to 10) useful for security /lifecycle.
9. Version ID (if versioning is enabled).

   <img src="./images/127.jpg">

## 7.2. S3 Hands on

1. When creating a bucket to store objects, it can be `General purpose` or `Directory` type.
   1. Some region may not support the bucket type yet.
2. In most of the cases and scope of cloud practitioner, `General purpose` is the type to go.
3. The bucket name must be unique across region and all AWS accounts.
4. We can keep object ownership as default `ACLs disabled` for security settings.
5. For maximum security of the bucket, we can block all public access, so only the account owner can upload files to it.
6. Default encryption can be `Server-side` encryption with Amazon S3 managed keys (SSE-S3).
7. Besides, we can enable bucket key to use an S3 `bucket key`.
8. In this case, we keep all the settings with default and only changes the bucket name.
9. After creating a bucket, we can use the web UI to upload files to it.
10. After uploading the file (object), we can click on it and check on the object details such as properties, permissions, and versions.
11. If we click on "**open**" on the object, it will make a GET request so we can preview the object in the browser.
12. For example, if the object is an image file, the browser will render the image.
13. However, if we navigate to the link of "**object URL**", we will get an access denied.
14. The URL generated from "**open**" attaches with some other credentials to allow the user to check on the object.
15. Besides uploading files, we can create folders by the UI.
16. In addition, we can delete files/objects and remove a directory that will also remove all the files in the folder.

## 7.3. S3 security Bucket policy

### 7.3.1. S3 security

1. User-based

   1. IAM policies - which API calls should be allowed for a specific user from `IAM`.

2. Resource-based

   1. Bucket policies - bucket wide rules from the S3 console - allows cross account.
   2. Object access control list (ACL) - finer grain (can be disabled).
   3. Bucket access control list (ACL) - less common (can be disabled).

3. Note: an IAM principal can access S3 object if

   1. The user IAM permissions **ALLOW** it OR the resource policy **ALLOWS** it
   2. **AND** there's no explicit **DENY**

4. Encryption: encrypt object in Amazon S3 using encryption keys.

   <img src="./images/128.jpg">

### 7.3.2. S3 bucket policies

1. JSON based policies

   1. Resources: buckets and objects
   2. Effect: Allow / Deny
   3. Actions: Set of API to Allow or Deny
   4. Principal: The account or user to apply the policy to

      ```json
      // s3 bucket policies
      {
        "Version": "2012-10-17",
        "Statement": [
          {
            "Sid": "PublicRead",
            "Effect": "Allow",
            "Principal": "*",
            "Action": ["s3:GetObject"],
            "Resource": ["arn:aws:s3::examplebucket/*"]
          }
        ]
      }
      ```

      <img src="./images/133.jpg">

2. Use S3 bucket for policy to

   1. Grant public access to the bucket.
   2. Force objects to be encrypted at upload.
   3. Grant access to another account (Cross Account).

### 7.3.3. Example: Public Access - Bucket Policy

1. We can setup bucket policy to allow public traffic to access any objects of a bucket.
2. For example, anonymous user can read an image object from a S3 bucket.

   <img src="./images/129.jpg">

### 7.3.4. Example: User Access to S3 - IAM permissions

1. An AWS user can be assigned with IAM policy to access a S3 bucket with granted actions.

   <img src="./images/130.jpg">

### 7.3.5. Example: EC2 instance Access to S3 - IAM roles

1. To grant certain permissions of EC2 instance to work on the other AWS services, we can use EC2 instance role which has IAM permissions through [IAM roles](#313-iam-roles-for-aws-services).

   <img src="./images/131.jpg">

### 7.3.6. Advanced: Cross-Account access - Bucket Policy

1. To apply cross-account access, we can use bucket policy.

   <img src="./images/132.jpg">

### 7.3.7. Bucket settings for block public access

- Block all public access
  - Block public access to buckets and objects granted through new access control list (ACLs).
  - Block public access to buckets and objects granted through any access control list (ACLs).
  - Block public access to buckets and objects granted through new public bucket or access point policies.
  - Block public and cross-account access to buckets and objects through any public bucket or access point policies.

1. These settings were created to prevent company data leaks.
2. If you know your bucket should never be public, leave these on.
3. Can be set at the account level.

   <img src="./images/134.jpg">

## 7.4. S3 security: Bucket policy hands-on

1. We can setup **Permissions** of a S3 bucket through the admin dashboard.
2. To allow public traffic, we need to unable ""**Block all public access**"" by editing "**Edit Block public access (bucket settings)**".
3. We can generate bucket policy template using AWS policy generator.
4. Step 1 - Choose the template to generate the policy (S3 Bucket).
5. Step 2 - Add statements
   1. The `Effect` is either "Allow" or "Deny" as the permission.
   2. The `Principal` can be assigned as asterisk `*` as to allow any request.
   3. `AWS Service` as Amazon S3
   4. For readonly purpose, we can give `Actions` as only `GetObject`.
   5. For `ARN` (Amazon Resource Name), we can assign the bucket name with an asterisk for all the objects in the bucket.
6. The above statements will be generated in a JSON template.
7. After applying the settings, the objects in the bucket will be publicly available through the object URL.

## 7.5. S3 website overview

1. S3 can host static websites and have them accessible on the Internet.
2. The website URL will be (depending on the region)

   1. http://<span style="color: #025E91">bucket-name</span>.s3-website<span style="color: red;">-</span><span style="color: #025E91">aws-region</span>.amazonaws.com
   2. http://<span style="color: #025E91">bucket-name</span>.s3-website<span style="color: red;">.</span><span style="color: #025E91">aws-region</span>.amazonaws.com

3. If you get a 403 Forbidden error, make sure the bucket policy allows public reads.

   <img src="./images/135.jpg">

## 7.6. S3 Website hands on

1. We can setup website hosting in `Properties` of a bucket for `Static website hosting`.
2. In the settings, we can choose
   1. The `Hosting type` to be "**Host a static website**".
   2. Index document as `index.html`.
3. In the `Static website hosting` section, we can find `Bucket website endpoint` that provides an URL for the website.

## 7.7. S3 Versioning overview

1. You can version your files in Amazon S3.
2. It is enabled at the bucket level.
3. It is best practice to version your buckets.

   1. Protect against unintended deletes (ability to restore a version).
   2. Easy to rollback to previous version

4. Notes:

   1. Any file that is not versioned prior to enabling versioning will have version `null`.
   2. Suspending versioning does not delete the previous versions.

   <img src="./images/136.jpg">

## 7.8. S3 versioning hands on

1. We can enable versioning in bucket `properties` settings.
2. As state in the previous section, any object uploaded before enabling versioning will have version ID as `null`.
3. To rollback to the previous version (e.g. using previous version of `index.html`), we can remove the latest one with a specific "**version ID**".
4. Note that if we delete an object without version ID, it puts on a `Delete marker`, which has its version ID, to indicate that the object is removed.
5. To resume the object, we can remove the `Delete marker` with its version ID.

## 7.9. S3 Replication overview

1. Must enable versioning in source and destination bucket.
2. **Cross-region Replication (CRR)**
3. **Same-region Replication (SRR)**
4. Buckets can be in different AWS accounts.
5. Copying is asynchronous
6. Must give proper IAM permissions to S3.
7. Use cases:

   1. CRR - compliance, lower latency access, replication across accounts.
   2. SRR - log aggregation, live replication between production and test accounts.

   <img src="./images/138.jpg">

## 7.10. S3 Replication hands on

1. In bucket settings, we can find `Replication rules` in `Management`.
2. We can choose to `Apply to all objects in the bucket` for the source bucket.
3. and then specify the name of the destination bucket whether it's in the same or the other account.
4. For `IAM role`, we can `Choose from existing IAM roles` and `Create new role`.
5. Note that by setting the replication rules, AWS may ask if we'd like to replicate all existing objects from the source bucket to the destination with batch operations.
6. The replication feature only works on the new objects uploaded to the source bucket after configuring the settings.
7. Note that replication feature and batch operations to replicate existing objects are 2 different features.
8. The replicated objects in the destination bucket will have the same version IDs as of from the source bucket.

## 7.11. S3 Storage Classes

1. Amazon S3 Standard - General Purpose
2. Amazon S3 Standard - Infrequent Access (IA)
3. Amazon S3 One Zone - Infrequent Access
4. Amazon S3 Glacier Instant Retrieval
5. Amazon S3 Glacier Flexible Retrieval
6. Amazon S3 Glacier Deep Archive
7. Amazon S3 Intelligent Tiering
8. Can move between classes manually or using S3 Lifecycle configurations

   <img src="./images/139.jpg">

### 7.11.1. S3 Durability and Availability

1. Durability

   1. High durability (99.9999999%, 11 9's) of objects across multiple AZ
   2. If you store 10,000,000 objects with Amazon S3, you can on average expect to incur a loss of a single object once every 10,000 years.
   3. Same for all storage classes

2. Availability

   1. Measure how readily available a service is
   2. Varies depending on storage class
   3. Example: S3 standard has 99.99% availability = not available 53 minutes a year

   <img src="./images/140.jpg">

### 7.11.2. S3 Standard - General Purpose

1. 99.99% availability
2. Used for frequently accessed data
3. Low latency and high throughput
4. Sustain 2 concurrent facility failures
5. Use cases: big data analytics, mobile and gaming applications, content distribution...

   <img src="./images/141.jpg">

### 7.11.3. S3 Storage Classes - Infrequent Access

1. For data that is less frequently accessed, but requires rapid access when needed.
2. Lower cost than S3 standard.
3. Amazon S3 Standard - Infrequent Access (S3 Standard-IA)

   1. 99.9% availability
   2. Use cases: Disaster Recovery, backups

4. Amazon S3 One Zone - Infrequent Access (S3 One Zone-IA)

   1. High durability (99.999999999%) in a single AZ; data lost when AZ is destroyed
   2. 99.5% availability
   3. Use cases: Storing secondary backup copies of on-premise data, or data you can recreate

   <img src="./images/142.jpg">

   <img src="./images/144.jpg">

### 7.11.4. Amazon S3 Glacier Storage Classes

1. Low-cost object storage meant for archiving/backup
2. Pricing: price for storage + object retrieval cost
3. Amazon S3 Glacier Instant Retrieval

   1. Millisecond retrieval, great for data accessed once a quarter
   2. Minimum storage duration of 90 days

4. Amazon S3 Glacier Flexible Retrieval (Formerly Amazon S3 Glacier)

   1. Expedited (1 to 5 minutes), Standard (3 to 5 hours), Bulk (5 to 12 hours) - free
   2. Minimum storage duration of 90 days

5. Amazon S3 Glacier Deep Archive - for long term storage

   1. Standard (12 hours), Bulk (48 hours)
   2. Minimum storage duration of 180 days

   <img src="./images/145.jpg">

### 7.11.5. S3 Intelligent - Tiering

1. Small monthly monitoring and auto-tiering fee.
2. Moves objects automatically between **Access Tiers** based on usage.
3. There are no retrieval charges in S3 Intelligent-Tiering.
4. Frequent access tier (automatic): default tier.
5. Infrequent access tier (automatic): objects not accessed for 30 days.
6. Archive Instance Access tier (automatic): objects not accessed for 90 days.
7. Archive Access tier (optional): configurable from 90 days to 700+ days.
8. Deep Archive Access tier (optional): configurable from 180 days to 700+ days.

   <img src="./images/143.jpg">

## 7.12. S3 Storage Classes Hands On

1. By uploading an object to a S3 bucket, we can configure the object property to change its storage class.
2. After uploading the object with a storage class, we can check on an object and change the storage class in its property.
3. In the bucket `Management`, we can change the `Lifecycle rules` and choose to apply the lifecycle rules to all objects in the bucket.
4. For example, We can choose to "**move current versions of objects between storage classes**" in `Lifecycle rule actions`.
5. Besides, we can setup storage class transition for objects after certain period of time.

   1. Choose storage class to change to `Standard-IA` after object creation for `30` days.
   2. Choose storage class to change to `Intelligent-Tiering` after object creation for `60` days.
   3. Choose storage class to change to `Glacier Flexible Retrieval` after object creation for `180` days.

6. We can use the `Lifecycle rules` to automate storage transition based on duration and conditions.

   <img src="./images/146.jpg">

   <img src="./images/147.jpg">

## 7.13. S3 Encryption

1.  Server-side encryption (default) encrypts objects when user uploads the objects to S3 service.
2.  AWS S3 server encrypts the file after receiving it.
3.  On the other hand, the client (user) can encrypts the file and upload the encrypted file to AWS S3 as Client-side encryption.
4.  Note that without configuration, server-side encryption is always on.

## 7.14. IAM Access Analyzer for S3

1. Ensures that only intended people have access to your S3 buckets.
2. Example: public accessible bucket, bucket shared with other AWS account...
3. Evaluates S3 bucket policies, S3 ACLs, S3 Access Point Policies.
4. Powered by IAM Access Analyzer

## 7.15. Shared Responsibility Model for S3

| AWS                                                                                                           | User                                   |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Infrastructure (global security, durability, availability, sustain concurrent loss of data in two facilities) | S3 versioning                          |
| Configuration and vulnerability analysis                                                                      | S3 bucket policies                     |
| Compliance validation                                                                                         | S3 replication setup                   |
|                                                                                                               | Logging and Monitoring                 |
|                                                                                                               | S3 Storage Classes                     |
|                                                                                                               | Data encryption at rest and in transit |

   <img src="./images/149.jpg">

## 7.16. AWS Snow Family overview

1. Highly-secure, portable devices to collect and process data at the **edge**, and **migrate data into and out of AWS**.
2. Helps migrate up to Petabytes of data.

   <img src="./images/150.jpg">

### 7.16.1. Data Migrations with Snowball

1. Challenges
   1. Limited connectivity
   2. Limited bandwidth
   3. High network cost
   4. Shared bandwidth (can't maximize the line)
   5. Connection stability
2. AWS snowball offline devices to perform data migrations
3. If it takes more than a week to transfer over the network, use Snowball devices.

   <img src="./images/151.jpg">

4. For example, we can get a Snowball device offline and manage the data and ship it back to AWS to export and keep the data in S3 service.

   <img src="./images/152.jpg">

### 7.16.2. What is edge computing?

1. Process data while it's being created on an edge location.
   1. A truck on the road, a ship on the sea, a mining station undergroud...
2. These locations may have limited internet and no access to computing power.
3. We setup a Snowball edge device to do edge computing
   1. **Snowball Edge Compute Optimized** (dedicated for that use case) and **Storage Optimized**
   2. Run EC2 Instances or Lambda functions at the edge
4. Use cases: preprocess data, machine learning, transcoding media

   <img src="./images/158.jpg">

## 7.17. AWS Snowball Edge - Pricing

1. You pay for device usage and data transfer out of AWS
2. **Data transfer IN to Amazon S3 is $0.00 per GB**
3. On-demand
   1. Includes a one-time service fee per job, which includes
      1. 10 days of usage for Snowball Edge Storage Optimized 80 TB.
      2. 15 days of usage for Snowball Edge Storage Optimized 210 TB.
   2. Shipping days are NOT counted towards the included 10 or 15 days
   3. Pay per day for any additional days
4. Committed Upfront

   1. Pay in advance for monthly, 1-year, and 3-year of usage (Edge Computing).
   2. Up to 62% discounted pricing.

## 7.18. Storage Gateway Overview

1. AWS is pushing for hybrid cloud
   1. Part of your infrastructure is on-premises.
   2. Part of your infrastructure is on the cloud.
2. This can be due to
   1. Long cloud migrations
   2. Security requirements
   3. Compliance requirements
   4. IT strategy
3. S3 is a proprietary storage technology (unlike EFS/NFS), so how do you expose the S3 data on-premise?
4. AWS Storage Gateway

   <img src="./images/162.jpg">

5. Bridge between on-premise data and cloud data in S3.
6. Hybrid storage service to allow on-premises to seamlessly use the AWS cloud.
7. Use cases: disaster recovery, backup, and restore, tiered storage.
8. Types of Storage Gateway
   1. File Gateway
   2. Volume Gateway
   3. Tape Gateway
9. No need to know the types at the exam

   <img src="./images/163.jpg">

## 7.19. S3 Summary

1. Buckets vs Objects: global unique name, tied to a region.
2. S3 security: IAM policy, S3 Bucket Policy (public access), S3 Encryption.
3. S3 Websites: host a static website on Amazon S3.
4. S3 Versioning: multiple versions for files, prevent accidental deletes.
5. S3 Replication: same-region or cross-region, must enable versioning.
6. S3 Storage Classes: Standard, IA, IZ-IA, Intelligent, Glacier (Instant, Flexible, Deep).
7. Snow Family: import data onto S3 through a physical device, edge computing.
8. OpsHub: Desktop application to manage Snow Family devices.
9. Storage Gateway: hybrid solution to extend on-premisses storage to S3.

   <img src="./images/164.jpg">
