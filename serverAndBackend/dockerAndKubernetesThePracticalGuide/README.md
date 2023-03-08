Start - 2021/02/17
End - 

- [1. Docker Images and Containers: The Core Building Blocks](#1-docker-images-and-containers-the-core-building-blocks)
  - [1.1. Images and Containers: What and Why?](#11-images-and-containers-what-and-why)
  - [1.2. Using and Running External (Pre-Built) Images](#12-using-and-running-external-pre-built-images)
  - [1.3. Our Goal: A NodeJS App](#13-our-goal-a-nodejs-app)
  - [1.4. Building our own Image with Dockerfile](#14-building-our-own-image-with-dockerfile)
  - [1.5. Running a Container based on our own Image](#15-running-a-container-based-on-our-own-image)
  - [1.6. Images are Read-Only!](#16-images-are-read-only)
  - [1.7. Understanding Image Layers](#17-understanding-image-layers)
  - [1.8. Managing Images and Containers](#18-managing-images-and-containers)
  - [1.9. Stopping and Restarting Containers](#19-stopping-and-restarting-containers)
  - [1.10. Understanding Attached and Detached Containers](#110-understanding-attached-and-detached-containers)
  - [1.11. Entering Interactive Mode](#111-entering-interactive-mode)
  - [1.12. Deleting Images and Containers](#112-deleting-images-and-containers)
  - [1.13. Removing Stopped Containers Automatically](#113-removing-stopped-containers-automatically)
  - [1.14. A Look Behind the Scenes: Inspecting Images](#114-a-look-behind-the-scenes-inspecting-images)
  - [1.15. Copying Files Into and From a Container](#115-copying-files-into-and-from-a-container)
  - [1.16. Naming and Tagging Container and Images](#116-naming-and-tagging-container-and-images)
  - [1.17. Sharing Images - Overview](#117-sharing-images---overview)
  - [1.18. Pushing Images to DockerHub](#118-pushing-images-to-dockerhub)
  - [1.19. Pulling and Using Shared Images](#119-pulling-and-using-shared-images)
- [2. Managing Data and Working with Volumes](#2-managing-data-and-working-with-volumes)
  - [2.1. Understanding Data Categories/Different Kinds of Data](#21-understanding-data-categoriesdifferent-kinds-of-data)
  - [2.2. Analyzing a Real App](#22-analyzing-a-real-app)
  - [2.3. Building and Understanding the Demo App](#23-building-and-understanding-the-demo-app)
  - [2.4. Understanding the Problem](#24-understanding-the-problem)
  - [2.5. Introducing Volumes](#25-introducing-volumes)
  - [2.6. A First, Unsucessful Try](#26-a-first-unsucessful-try)
  - [2.7. Named Volumes To THe Rescue!](#27-named-volumes-to-the-rescue)
  - [2.8. Getting Started with Bind Mounts (Coding Sharing)](#28-getting-started-with-bind-mounts-coding-sharing)
  - [2.9. Combining and Merging Different Volumes](#29-combining-and-merging-different-volumes)
  - [2.10. A NodeJS-specific Adjustment: Using Nodemon in a Container](#210-a-nodejs-specific-adjustment-using-nodemon-in-a-container)
  - [2.11. Volumes and Bind Mounts: Summary](#211-volumes-and-bind-mounts-summary)
  - [2.12. A Look at Read-Only Volumes](#212-a-look-at-read-only-volumes)
  - [2.13. Managing Docker Volumes](#213-managing-docker-volumes)
  - [2.14. Using "COPY" vs Bind Mounts](#214-using-copy-vs-bind-mounts)
  - [2.15. Don't COPY Everything: Using "dockerignore" Files](#215-dont-copy-everything-using-dockerignore-files)
  - [2.16. Working with Environment Variables and ".env" Files](#216-working-with-environment-variables-and-env-files)
  - [2.17. Using Build Arguments (ARG)](#217-using-build-arguments-arg)
- [3. Networking: (Cross-)Container Communication](#3-networking-cross-container-communication)
  - [3.1. Case 1: Container to WWW Communication](#31-case-1-container-to-www-communication)
  - [3.2. Case 2: Container to Local Host Machine Communiaction](#32-case-2-container-to-local-host-machine-communiaction)
  - [3.3. Case 3: Container to Container Communication](#33-case-3-container-to-container-communication)
  - [3.4. Analyzing the Demo App](#34-analyzing-the-demo-app)
  - [3.5. Creating a Container and Communicating to the Web (WWW)](#35-creating-a-container-and-communicating-to-the-web-www)
  - [3.6. Making Container to Host Communication Work](#36-making-container-to-host-communication-work)
  - [3.7. Container to Container Communication: A Basic Solution](#37-container-to-container-communication-a-basic-solution)
  - [3.8. Introducing Docker Networks: Elegant Container to Container Communication](#38-introducing-docker-networks-elegant-container-to-container-communication)
  - [3.9. How Docker Resolves IP Addresses](#39-how-docker-resolves-ip-addresses)
- [4. Building Multi-Container Applications with Docker](#4-building-multi-container-applications-with-docker)
  - [4.1. Our Target App and Setup](#41-our-target-app-and-setup)
  - [4.2. Dockerizing the MongoDB Service](#42-dockerizing-the-mongodb-service)
  - [4.3. Dockerizing the Node App](#43-dockerizing-the-node-app)
  - [4.4. Moving the React SPA into a Container](#44-moving-the-react-spa-into-a-container)
  - [4.5. Adding Docker Networks for Efficient Cross-Container Communication](#45-adding-docker-networks-for-efficient-cross-container-communication)
  - [4.6. Adding Data Persistence to MongoDB with Volumes](#46-adding-data-persistence-to-mongodb-with-volumes)
  - [4.7. Volumes, Bind Mounts and Polishing for the NodeJS Container](#47-volumes-bind-mounts-and-polishing-for-the-nodejs-container)
  - [4.8. Live Source Code Updates for the React Container (with Bind Mounts)](#48-live-source-code-updates-for-the-react-container-with-bind-mounts)
- [5. Docker Compose: Elegant Multi-Container Orchestration](#5-docker-compose-elegant-multi-container-orchestration)
  - [5.1. Docker-Compose: What and Why?](#51-docker-compose-what-and-why)
  - [5.2. Creating a Compose File](#52-creating-a-compose-file)
  - [5.3. Diving into the Compose File Configuration](#53-diving-into-the-compose-file-configuration)
  - [5.4. Docker Compose Up and Down](#54-docker-compose-up-and-down)
  - [5.5. Working with Multiple Containers](#55-working-with-multiple-containers)
  - [5.6. Adding Another Container](#56-adding-another-container)
  - [5.7. Building Images and Understanding Container Names](#57-building-images-and-understanding-container-names)
- [6. Working with "Utility Containers" and Executing Commands In Container](#6-working-with-utility-containers-and-executing-commands-in-container)
  - [6.1. Introduction and What are "Utility Containers"?](#61-introduction-and-what-are-utility-containers)
  - [6.2. Utility Containers: Why would you use them?](#62-utility-containers-why-would-you-use-them)
  - [6.3. Different Ways of Running Commands in Containers](#63-different-ways-of-running-commands-in-containers)
  - [6.4. Building a First Utility Container](#64-building-a-first-utility-container)
  - [6.5. Utilizing ENTRYPOINT](#65-utilizing-entrypoint)
  - [6.6. Using Docker Compose](#66-using-docker-compose)
- [7. A More Complex Setup: A Laravel and PHP Dockerized Project](#7-a-more-complex-setup-a-laravel-and-php-dockerized-project)
  - [7.1. The Target Setup](#71-the-target-setup)
  - [7.2. Adding a Nginx (Web Server) Container](#72-adding-a-nginx-web-server-container)
  - [7.3. Adding a PHP Container](#73-adding-a-php-container)
  - [7.4. Adding a MySQL Container](#74-adding-a-mysql-container)
  - [7.5. Adding a Composer Utility Container](#75-adding-a-composer-utility-container)
  - [7.6. Creating a Laravel App via the Composer Utility Container](#76-creating-a-laravel-app-via-the-composer-utility-container)
  - [7.7. Launching Only Some Docker Compose Services](#77-launching-only-some-docker-compose-services)
  - [7.8. Adding More Utlity Containers](#78-adding-more-utlity-containers)
  - [7.9. Docker Compose with and without Dockerfiles](#79-docker-compose-with-and-without-dockerfiles)
  - [7.10. Bind Mounts and COPY: When to Use What](#710-bind-mounts-and-copy-when-to-use-what)
- [8. Deploying Docker Containers](#8-deploying-docker-containers)
  - [8.1. From Development To Production](#81-from-development-to-production)
  - [8.2. Deployment Process and Providers](#82-deployment-process-and-providers)
  - [8.3. Getting Started with an Example](#83-getting-started-with-an-example)
  - [8.4. Bind Mounts In Production](#84-bind-mounts-in-production)
  - [8.5. Introducing AWS and EC2](#85-introducing-aws-and-ec2)
  - [8.6. Connecting to an EC2 Instance](#86-connecting-to-an-ec2-instance)
  - [8.7. Installing Docker on a Virtual Machine](#87-installing-docker-on-a-virtual-machine)
  - [8.8. Pushing our local Image to the Cloud](#88-pushing-our-local-image-to-the-cloud)
  - [8.9. Running and Publishing the App (on EC2)](#89-running-and-publishing-the-app-on-ec2)
  - [8.10. Managing and Updating the Container / Image](#810-managing-and-updating-the-container--image)
  - [8.11. Disadvantages of our Current Approach](#811-disadvantages-of-our-current-approach)
  - [8.12. From Manual Deployment to Managed Services](#812-from-manual-deployment-to-managed-services)
  - [8.13. Deploying with AWS ECS: A Managed Docker Container Service](#813-deploying-with-aws-ecs-a-managed-docker-container-service)
  - [8.14. More on AWS](#814-more-on-aws)
  - [8.15. Updating Managed Containers](#815-updating-managed-containers)
  - [8.16. Preparing a Multi-Container App](#816-preparing-a-multi-container-app)
  - [8.17. Configuring the NodeJS Backend Container](#817-configuring-the-nodejs-backend-container)
  - [8.18. Deploying a Second Container and A Load Balancer](#818-deploying-a-second-container-and-a-load-balancer)
  - [8.19. Using a Load Balancer for a Stable Domain](#819-using-a-load-balancer-for-a-stable-domain)
  - [8.20. Using EFS Volume with ECS](#820-using-efs-volume-with-ecs)
  - [8.21. Our Current Architecture](#821-our-current-architecture)
  - [8.22. Databases and Containers: An Important Consideration](#822-databases-and-containers-an-important-consideration)
  - [8.23. Moving to MongoDB Atlas](#823-moving-to-mongodb-atlas)
  - [8.24. Using MongoDB Atlas in Production](#824-using-mongodb-atlas-in-production)
  - [8.25. Our Updated and Target Architecture](#825-our-updated-and-target-architecture)
  - [8.26. Understanding a Common Problem](#826-understanding-a-common-problem)
  - [8.27. Creating a "build-only" Container](#827-creating-a-build-only-container)
  - [8.28. Introducing Multi-Stage Builds](#828-introducing-multi-stage-builds)
  - [8.29. Building a Multi-Stage Image](#829-building-a-multi-stage-image)
  - [8.30. Deploying a Standalone Frontend App](#830-deploying-a-standalone-frontend-app)
  - [8.31. Development vs Production: Differences](#831-development-vs-production-differences)
  - [8.32. Understanding Multi-Stage Build Targets](#832-understanding-multi-stage-build-targets)
  - [8.33. Beyond AWS](#833-beyond-aws)
- [9. Docker and Container - A Summary](#9-docker-and-container---a-summary)
  - [9.1. Images and Containers](#91-images-and-containers)
  - [9.2. Key Commands](#92-key-commands)
  - [9.3. Data, Volumes and Networking](#93-data-volumes-and-networking)
  - [9.4. Docker Compose](#94-docker-compose)
  - [9.5. Local vs Remote](#95-local-vs-remote)
  - [9.6. Deployment](#96-deployment)
- [10. Getting Started with Kubernetes](#10-getting-started-with-kubernetes)
  - [10.1. More Problems with Manual Deployment](#101-more-problems-with-manual-deployment)
  - [10.2. Why Kubernetes?](#102-why-kubernetes)
  - [10.3. What is Kubernetes Exactly?](#103-what-is-kubernetes-exactly)
  - [10.4. Kubernetes: Architecutre and Core Concepts](#104-kubernetes-architecutre-and-core-concepts)
  - [10.5. Kubernetes will not manage your Infrastructure!](#105-kubernetes-will-not-manage-your-infrastructure)
  - [10.6. A Closer Look at the Worker Nodes](#106-a-closer-look-at-the-worker-nodes)
  - [10.7. A Closer Look at the Master Node](#107-a-closer-look-at-the-master-node)
  - [10.8. Important Terms and Concepts](#108-important-terms-and-concepts)
- [11. Kubernetes in Action - Diving into the Core Concepts](#11-kubernetes-in-action---diving-into-the-core-concepts)
  - [11.1. Kubernetes does NOT manage your Infrastructure](#111-kubernetes-does-not-manage-your-infrastructure)
  - [11.2. Kubernetes: Required Setup and Installation Steps](#112-kubernetes-required-setup-and-installation-steps)
  - [11.3. Understanding Kubernetes Objects (Resources)](#113-understanding-kubernetes-objects-resources)
  - [11.4. The "Deployment" Object (Resource)](#114-the-deployment-object-resource)
  - [11.5. A First Deployment - Using the Imperative Approach](#115-a-first-deployment---using-the-imperative-approach)
  - [11.6. kubectl: Behind the Scenes](#116-kubectl-behind-the-scenes)
  - [11.7. The "Service" Object (Resource)](#117-the-service-object-resource)
  - [11.8. Exposing a Deployment with a Service](#118-exposing-a-deployment-with-a-service)
  - [11.9. Restarting Containers](#119-restarting-containers)
  - [11.10. Scaling in Action](#1110-scaling-in-action)
  - [11.11. Updating Deployments](#1111-updating-deployments)
  - [11.12. Deployment Rollbacks and History](#1112-deployment-rollbacks-and-history)
  - [11.13. The Imperative vs The Declarative Approach](#1113-the-imperative-vs-the-declarative-approach)
  - [11.14. Creating Deployment Configuration File (Declarative Approach)](#1114-creating-deployment-configuration-file-declarative-approach)
  - [11.15. Adding Pod and Container Specs](#1115-adding-pod-and-container-specs)
  - [11.16. Working with Labels and Selectors](#1116-working-with-labels-and-selectors)
  - [11.17. Creating a Service Declaratively](#1117-creating-a-service-declaratively)
  - [11.18. Updating and Deleting Resources](#1118-updating-and-deleting-resources)
  - [11.19. Multiple vs Single Config Files](#1119-multiple-vs-single-config-files)
  - [11.20. More on Labels and Selectors](#1120-more-on-labels-and-selectors)
  - [11.21. Liveness Probes](#1121-liveness-probes)
  - [11.22. A Closer Look at the Configuration Options](#1122-a-closer-look-at-the-configuration-options)
- [12. Managing Data and Volumes with Kubernetes](#12-managing-data-and-volumes-with-kubernetes)
  - [12.1. Starting Project and What we know Already](#121-starting-project-and-what-we-know-already)
  - [12.2. Kubernetes and Volumes - More Than Docker Volumes](#122-kubernetes-and-volumes---more-than-docker-volumes)
  - [12.3. Kubernetes Volumes: Theory and Docker Comparison](#123-kubernetes-volumes-theory-and-docker-comparison)
  - [12.4. Creating a New Deployment and Service](#124-creating-a-new-deployment-and-service)
  - [12.5. Getting Started with Kubernetes Volumes](#125-getting-started-with-kubernetes-volumes)
  - [12.6. A First Volume: The "emptyDir" Type](#126-a-first-volume-the-emptydir-type)
  - [12.7. A Second Volume: The "hostPath" Type](#127-a-second-volume-the-hostpath-type)
  - [12.8. Understanding the "CSI" Volume Type](#128-understanding-the-csi-volume-type)
  - [12.9. From Volumes to Persistent Volumes](#129-from-volumes-to-persistent-volumes)
  - [12.10. Defining a Persistent Volume](#1210-defining-a-persistent-volume)
  - [12.11. Creating a Persistent Volume Claim](#1211-creating-a-persistent-volume-claim)
  - [12.12. Using a Claim in a Pod](#1212-using-a-claim-in-a-pod)
  - [12.13. Volumes vs Persistent Volumes](#1213-volumes-vs-persistent-volumes)
  - [12.14. Using Environment Variables](#1214-using-environment-variables)
  - [12.15. Environment Variables and ConfigMaps](#1215-environment-variables-and-configmaps)
- [13. Kubernetes Networking](#13-kubernetes-networking)
  - [13.1. Starting Project and Our Goal](#131-starting-project-and-our-goal)
  - [13.2. Creating a First Deployment](#132-creating-a-first-deployment)
  - [13.3. Another Look at Services](#133-another-look-at-services)
  - [13.4. Multiple Containers in One Pod](#134-multiple-containers-in-one-pod)
  - [13.5. Pod-internal Communication](#135-pod-internal-communication)
  - [13.6. Creating Multiple Deployments](#136-creating-multiple-deployments)
  - [13.7. Pod-to-Pod Communication with IP Addresses and Environment Variables](#137-pod-to-pod-communication-with-ip-addresses-and-environment-variables)
  - [13.8. using DNS for Pod-to-Pod Communication](#138-using-dns-for-pod-to-pod-communication)
  - [13.9. Which Approach is Best? And a Challenge!](#139-which-approach-is-best-and-a-challenge)
  - [13.10. Adding a Containerized Frontend](#1310-adding-a-containerized-frontend)
  - [13.11. Deploying the Frontend with Kubernetes](#1311-deploying-the-frontend-with-kubernetes)
  - [13.12. Using a Reverse Proxy for the Frontend](#1312-using-a-reverse-proxy-for-the-frontend)
- [14. Kubernetes - Deployment (AWS EKS)](#14-kubernetes---deployment-aws-eks)
  - [14.1. Deployment Options and Steps](#141-deployment-options-and-steps)
  - [14.2. AWS EKS vs AWS ECS](#142-aws-eks-vs-aws-ecs)
  - [14.3. Preparing the Starting Project](#143-preparing-the-starting-project)
  - [14.4. Diving Into AWS](#144-diving-into-aws)
  - [14.5. Creating and Configuring the Kubernetes Cluster with EKS](#145-creating-and-configuring-the-kubernetes-cluster-with-eks)
  - [14.6. Adding Worker Nodes](#146-adding-worker-nodes)
  - [14.7. Applying Our Kubernetes Config](#147-applying-our-kubernetes-config)
  - [14.8. Getting Started with Volumes](#148-getting-started-with-volumes)
  - [14.9. Adding EFS as a Volume (with the CSI Volume Type)](#149-adding-efs-as-a-volume-with-the-csi-volume-type)
  - [14.10. Creating a Persistent Volume for EFS](#1410-creating-a-persistent-volume-for-efs)
  - [14.11. Using the EFS Volume](#1411-using-the-efs-volume)
  - [14.12. A Challenge!](#1412-a-challenge)


# 1. Docker Images and Containers: The Core Building Blocks
## 1.1. Images and Containers: What and Why?
1. `Images` are generated from a `Docker` file as a snapshot which can then run in a `container`.

## 1.2. Using and Running External (Pre-Built) Images
1. We can use pre-built images such as `Node.js` runtime that is hosted on Docker Hub.
2. For example, we can run `docker run node` in the terminal, while docker may prompt an error as if there's no `Node.js` image.
3. Docker will then download the image runs a container that is running Node.js runtime. 
4. However, the container doesn't keep going after installation. 
5. We then can run `docker run -it node` which creates an interactive session that allows users to use CLI to interact with the `Node.js` runtime in the container. 

## 1.3. Our Goal: A NodeJS App
## 1.4. Building our own Image with Dockerfile
## 1.5. Running a Container based on our own Image
## 1.6. Images are Read-Only!
## 1.7. Understanding Image Layers
## 1.8. Managing Images and Containers
## 1.9. Stopping and Restarting Containers
## 1.10. Understanding Attached and Detached Containers
## 1.11. Entering Interactive Mode
## 1.12. Deleting Images and Containers
## 1.13. Removing Stopped Containers Automatically
## 1.14. A Look Behind the Scenes: Inspecting Images
## 1.15. Copying Files Into and From a Container
## 1.16. Naming and Tagging Container and Images
## 1.17. Sharing Images - Overview
## 1.18. Pushing Images to DockerHub
## 1.19. Pulling and Using Shared Images



# 2. Managing Data and Working with Volumes
## 2.1. Understanding Data Categories/Different Kinds of Data
## 2.2. Analyzing a Real App
## 2.3. Building and Understanding the Demo App
## 2.4. Understanding the Problem
## 2.5. Introducing Volumes
## 2.6. A First, Unsucessful Try
## 2.7. Named Volumes To THe Rescue!
## 2.8. Getting Started with Bind Mounts (Coding Sharing)
## 2.9. Combining and Merging Different Volumes
## 2.10. A NodeJS-specific Adjustment: Using Nodemon in a Container
## 2.11. Volumes and Bind Mounts: Summary
## 2.12. A Look at Read-Only Volumes
## 2.13. Managing Docker Volumes
## 2.14. Using "COPY" vs Bind Mounts
## 2.15. Don't COPY Everything: Using "dockerignore" Files
## 2.16. Working with Environment Variables and ".env" Files
## 2.17. Using Build Arguments (ARG)



# 3. Networking: (Cross-)Container Communication
## 3.1. Case 1: Container to WWW Communication
## 3.2. Case 2: Container to Local Host Machine Communiaction
## 3.3. Case 3: Container to Container Communication
## 3.4. Analyzing the Demo App
## 3.5. Creating a Container and Communicating to the Web (WWW)
## 3.6. Making Container to Host Communication Work
## 3.7. Container to Container Communication: A Basic Solution
## 3.8. Introducing Docker Networks: Elegant Container to Container Communication
## 3.9. How Docker Resolves IP Addresses



# 4. Building Multi-Container Applications with Docker
## 4.1. Our Target App and Setup
## 4.2. Dockerizing the MongoDB Service
## 4.3. Dockerizing the Node App
## 4.4. Moving the React SPA into a Container
## 4.5. Adding Docker Networks for Efficient Cross-Container Communication
## 4.6. Adding Data Persistence to MongoDB with Volumes
## 4.7. Volumes, Bind Mounts and Polishing for the NodeJS Container
## 4.8. Live Source Code Updates for the React Container (with Bind Mounts)



# 5. Docker Compose: Elegant Multi-Container Orchestration
## 5.1. Docker-Compose: What and Why?
## 5.2. Creating a Compose File
## 5.3. Diving into the Compose File Configuration
## 5.4. Docker Compose Up and Down
## 5.5. Working with Multiple Containers
## 5.6. Adding Another Container
## 5.7. Building Images and Understanding Container Names



# 6. Working with "Utility Containers" and Executing Commands In Container
## 6.1. Introduction and What are "Utility Containers"?
## 6.2. Utility Containers: Why would you use them?
## 6.3. Different Ways of Running Commands in Containers
## 6.4. Building a First Utility Container
## 6.5. Utilizing ENTRYPOINT
## 6.6. Using Docker Compose



# 7. A More Complex Setup: A Laravel and PHP Dockerized Project
## 7.1. The Target Setup
## 7.2. Adding a Nginx (Web Server) Container
## 7.3. Adding a PHP Container
## 7.4. Adding a MySQL Container
## 7.5. Adding a Composer Utility Container
## 7.6. Creating a Laravel App via the Composer Utility Container
## 7.7. Launching Only Some Docker Compose Services
## 7.8. Adding More Utlity Containers
## 7.9. Docker Compose with and without Dockerfiles
## 7.10. Bind Mounts and COPY: When to Use What



# 8. Deploying Docker Containers
## 8.1. From Development To Production
## 8.2. Deployment Process and Providers
## 8.3. Getting Started with an Example
## 8.4. Bind Mounts In Production
## 8.5. Introducing AWS and EC2
## 8.6. Connecting to an EC2 Instance
## 8.7. Installing Docker on a Virtual Machine
## 8.8. Pushing our local Image to the Cloud
## 8.9. Running and Publishing the App (on EC2)
## 8.10. Managing and Updating the Container / Image
## 8.11. Disadvantages of our Current Approach
## 8.12. From Manual Deployment to Managed Services
## 8.13. Deploying with AWS ECS: A Managed Docker Container Service
## 8.14. More on AWS
## 8.15. Updating Managed Containers
## 8.16. Preparing a Multi-Container App
## 8.17. Configuring the NodeJS Backend Container
## 8.18. Deploying a Second Container and A Load Balancer
## 8.19. Using a Load Balancer for a Stable Domain
## 8.20. Using EFS Volume with ECS
## 8.21. Our Current Architecture
## 8.22. Databases and Containers: An Important Consideration
## 8.23. Moving to MongoDB Atlas
## 8.24. Using MongoDB Atlas in Production
## 8.25. Our Updated and Target Architecture
## 8.26. Understanding a Common Problem
## 8.27. Creating a "build-only" Container
## 8.28. Introducing Multi-Stage Builds
## 8.29. Building a Multi-Stage Image
## 8.30. Deploying a Standalone Frontend App
## 8.31. Development vs Production: Differences
## 8.32. Understanding Multi-Stage Build Targets
## 8.33. Beyond AWS



# 9. Docker and Container - A Summary
## 9.1. Images and Containers
## 9.2. Key Commands
## 9.3. Data, Volumes and Networking
## 9.4. Docker Compose
## 9.5. Local vs Remote
## 9.6. Deployment



# 10. Getting Started with Kubernetes
## 10.1. More Problems with Manual Deployment
## 10.2. Why Kubernetes?
## 10.3. What is Kubernetes Exactly?
## 10.4. Kubernetes: Architecutre and Core Concepts
## 10.5. Kubernetes will not manage your Infrastructure!
## 10.6. A Closer Look at the Worker Nodes
## 10.7. A Closer Look at the Master Node
## 10.8. Important Terms and Concepts



# 11. Kubernetes in Action - Diving into the Core Concepts
## 11.1. Kubernetes does NOT manage your Infrastructure
## 11.2. Kubernetes: Required Setup and Installation Steps
## 11.3. Understanding Kubernetes Objects (Resources)
## 11.4. The "Deployment" Object (Resource)
## 11.5. A First Deployment - Using the Imperative Approach
## 11.6. kubectl: Behind the Scenes
## 11.7. The "Service" Object (Resource)
## 11.8. Exposing a Deployment with a Service
## 11.9. Restarting Containers
## 11.10. Scaling in Action
## 11.11. Updating Deployments
## 11.12. Deployment Rollbacks and History
## 11.13. The Imperative vs The Declarative Approach
## 11.14. Creating Deployment Configuration File (Declarative Approach)
## 11.15. Adding Pod and Container Specs
## 11.16. Working with Labels and Selectors
## 11.17. Creating a Service Declaratively
## 11.18. Updating and Deleting Resources
## 11.19. Multiple vs Single Config Files
## 11.20. More on Labels and Selectors
## 11.21. Liveness Probes
## 11.22. A Closer Look at the Configuration Options



# 12. Managing Data and Volumes with Kubernetes
## 12.1. Starting Project and What we know Already
## 12.2. Kubernetes and Volumes - More Than Docker Volumes
## 12.3. Kubernetes Volumes: Theory and Docker Comparison
## 12.4. Creating a New Deployment and Service
## 12.5. Getting Started with Kubernetes Volumes
## 12.6. A First Volume: The "emptyDir" Type
## 12.7. A Second Volume: The "hostPath" Type
## 12.8. Understanding the "CSI" Volume Type
## 12.9. From Volumes to Persistent Volumes
## 12.10. Defining a Persistent Volume
## 12.11. Creating a Persistent Volume Claim
## 12.12. Using a Claim in a Pod
## 12.13. Volumes vs Persistent Volumes
## 12.14. Using Environment Variables
## 12.15. Environment Variables and ConfigMaps



# 13. Kubernetes Networking
## 13.1. Starting Project and Our Goal
## 13.2. Creating a First Deployment
## 13.3. Another Look at Services
## 13.4. Multiple Containers in One Pod
## 13.5. Pod-internal Communication
## 13.6. Creating Multiple Deployments
## 13.7. Pod-to-Pod Communication with IP Addresses and Environment Variables
## 13.8. using DNS for Pod-to-Pod Communication
## 13.9. Which Approach is Best? And a Challenge!
## 13.10. Adding a Containerized Frontend
## 13.11. Deploying the Frontend with Kubernetes
## 13.12. Using a Reverse Proxy for the Frontend



# 14. Kubernetes - Deployment (AWS EKS)
## 14.1. Deployment Options and Steps
## 14.2. AWS EKS vs AWS ECS
## 14.3. Preparing the Starting Project
## 14.4. Diving Into AWS
## 14.5. Creating and Configuring the Kubernetes Cluster with EKS
## 14.6. Adding Worker Nodes
## 14.7. Applying Our Kubernetes Config
## 14.8. Getting Started with Volumes
## 14.9. Adding EFS as a Volume (with the CSI Volume Type)
## 14.10. Creating a Persistent Volume for EFS
## 14.11. Using the EFS Volume
## 14.12. A Challenge!