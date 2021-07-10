1. [Course Introduction](#Course-Introduction)
    1. [Estimated Cost to use services on AWS](#Estimated-Cost-to-use-services-on-AWS)
    1. [Different types of cloud computing](#Different-types-of-cloud-computing)
1. [What is Cloud Computing](What-is-Cloud-Computing)
    1. [AWS Cloud Overview](#AWS-Cloud-Overview)
1. [IAM - Identity and Access Management](#IAM---Identity-and-Access-Management)
---

# Course Introduction
## Estimated Cost to use services on AWS
1. Registrar: $12.00
1. Route53: $0.50
1. Config: $0.18
1. kms: $0.02
1. Other Services: $0.00
1. Total: $12.7

## Different types of cloud computing
1. The scope of management on the application is different
    1. Iaas - Infrastructure as a Service
        1. Amazon EC2
        1. Google Cloud Platform, Digital Ocean
    1. Paas - Platform as a Service
        1. Elastic Ebanstalk
        1. Heroku, Google App Engine, Windows Azure
    1. Saas - Software as a Service
        1. Gmail, Zoom, etc.

# What is Cloud Computing
## AWS Cloud Overview
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

# IAM - Identity and Access Management