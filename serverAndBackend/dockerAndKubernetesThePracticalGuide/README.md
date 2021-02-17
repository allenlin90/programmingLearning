Start - 2021/02/17
End - 
1. Docker Images and Containers: The Core Building Blocks
    1. [Images and Containers: What and Why?](#Images-and-Containers:-What-and-Why?)
    1. [Using and Running External (Pre-Built) Images](#Using-and-Running-External-(Pre-Built)-Images)
    1. [Our Goal: A NodeJS App](#Our-Goal:-A-NodeJS-App)
    1. [Building our own Image with Dockerfile](#Building-our-own-Image-with-Dockerfile)
    1. [Running a Container based on our own Image](#Running-a-Container-based-on-our-own-Image)
    1. [Images are Read-Only!](#Images-are-Read-Only!)
    1. [Understanding Image Layers](#Understanding-Image-Layers)
    1. [Managing Images and Containers](#Managing-Images-and-Containers)
    1. [Stopping and Restarting Containers](#Stopping-and-Restarting-Containers)
    1. [Understanding Attached and Detached Containers](#Understanding-Attached-and-Detached-Containers)
    1. [Entering Interactive Mode](#Entering-Interactive-Mode)
    1. [Deleting Images and Containers](#Deleting-Images-and-Containers)
    1. [Removing Stopped Containers Automatically](#Removing-Stopped-Containers-Automatically)
    1. [A Look Behind the Scenes: Inspecting Images](#A-Look-Behind-the-Scenes:-Inspecting-Images)
    1. [Copying Files Into and From a Container](#Copying-Files-Into-and-From-a-Container)
    1. [Naming and Tagging Container and Images](#Naming-and-Tagging-Container-and-Images)
    1. [Sharing Images - Overview](#Sharing-Images---Overview)
    1. [Pushing Images to DockerHub](#Pushing-Images-to-DockerHub)
    1. [Pulling and Using Shared Images](#Pulling-and-Using-Shared-Images)
1. Managing Data and Working with Volumes
    1. [Understanding Data Categories/Different Kinds of Data](#Understanding-Data-Categories/Different-Kinds-of-Data)
    1. [Analyzing a Real App](#Analyzing-a-Real-App)
    1. [Building and Understanding the Demo App](#Building-and-Understanding-the-Demo-App)
    1. [Understanding the Problem](#Understanding-the-Problem)
    1. [Introducing Volumes](#Introducing-Volumes)
    1. [A First, Unsucessful Try](#A-First,-Unsucessful-Try)
    1. [Named Volumes To THe Rescue!](#Named-Volumes-To-THe-Rescue!)
    1. [Getting Started with Bind Mounts (Coding Sharing)](#Getting-Started-with-Bind-Mounts-(Coding-Sharing))
    1. [Combining and Merging Different Volumes](#Combining-and-Merging-Different-Volumes)
    1. [A NodeJS-specific Adjustment: Using Nodemon in a Container](#A-NodeJS-specific-Adjustment:-Using-Nodemon-in-a-Container)
    1. [Volumes and Bind Mounts: Summary](#Volumes-and-Bind-Mounts:-Summary)
    1. [A Look at Read-Only Volumes](#A-Look-at-Read-Only-Volumes)
    1. [Managing Docker Volumes](#Managing-Docker-Volumes)
    1. [Using "COPY" vs Bind Mounts](#Using-"COPY"-vs-Bind-Mounts)
    1. [Don't COPY Everything: Using "dockerignore" Files](#Don't-COPY-Everything:-Using-"dockerignore"-Files)
    1. [Working with Environment Variables and ".env" Files](#Working-with-Environment-Variables-and-".env"-Files)
    1. [Using Build Arguments (ARG)](#Using-Build-Arguments-(ARG))
1. Networking: (Cross-)Container Communication
    1. [Case 1: Container to WWW Communication](#Case-1:-Container-to-WWW-Communication)
    1. [Case 2: Container to Local Host Machine Communiaction](#Case-2:-Container-to-Local-Host-Machine-Communiaction)
    1. [Case 3: Container to Container Communication](#Case-3:-Container-to-Container-Communication)
    1. [Analyzing the Demo App](#Analyzing-the-Demo-App)
    1. [Creating a Container and Communicating to the Web (WWW)](#Creating-a-Container-and-Communicating-to-the-Web-(WWW))
    1. [Making Container to Host Communication Work](#Making-Container-to-Host-Communication-Work)
    1. [Container to Container Communication: A Basic Solution](#Container-to-Container-Communication:-A-Basic-Solution)
    1. [Introducing Docker Networks: Elegant Container to Container Communication](#Introducing-Docker-Networks:-Elegant-Container-to-Container-Communication)
    1. [How Docker Resolves IP Addresses](#How-Docker-Resolves-IP-Addresses)
1. Building Multi-Container Applications with Docker
    1. [Our Target App and Setup](#Our-Target-App-and-Setup)
    1. [Dockerizing the MongoDB Service](#Dockerizing-the-MongoDB-Service)
    1. [Dockerizing the Node App](#Dockerizing-the-Node-App)
    1. [Moving the React SPA into a Container](#Moving-the-React-SPA-into-a-Container)
    1. [Adding Docker Networks for Efficient Cross-Container Communication](#Adding-Docker-Networks-for-Efficient-Cross-Container-Communication)
    1. [Adding Data Persistence to MongoDB with Volumes](#Adding-Data-Persistence-to-MongoDB-with-Volumes)
    1. [Volumes, Bind Mounts and Polishing for the NodeJS Container](#Volumes,-Bind-Mounts-and-Polishing-for-the-NodeJS-Container)
    1. [Live Source Code Updates for the React Container (with Bind Mounts)](#Live-Source-Code-Updates-for-the-React-Container-(with-Bind-Mounts))
1. Docker Compose: Elegant Multi-Container Orchestration
    1. [Docker-Compose: What and Why?](#Docker-Compose:-What-and-Why?)
    1. [Creating a Compose File](#Creating-a-Compose-File)
    1. [Diving into the Compose File Configuration](#Diving-into-the-Compose-File-Configuration)
    1. [Docker Compose Up and Down](#Docker-Compose-Up-and-Down)
    1. [Working with Multiple Containers](#Working-with-Multiple-Containers)
    1. [Adding Another Container](#Adding-Another-Container)
    1. [Building Images and Understanding Container Names](#Building-Images-and-Understanding-Container-Names)
1. Working with "Utility Containers" and Executing Commands In Container
    1. [Introduction and What are "Utility Containers"?](#Introduction-and-What-are-"Utility-Containers"?)
    1. [Utility Containers: Why would you use them?](#Utility-Containers:-Why-would-you-use-them?)
    1. [Different Ways of Running Commands in Containers](#Different-Ways-of-Running-Commands-in-Containers)
    1. [Building a First Utility Container](#Building-a-First-Utility-Container)
    1. [Utilizing ENTRYPOINT](#Utilizing-ENTRYPOINT)
    1. [Using Docker Compose](#Using-Docker-Compose)
1. A More Complex Setup: A Laravel and PHP Dockerized Project
    1. [The Target Setup](#The-Target-Setup)
    1. [Adding a Nginx (Web Server) Container](#Adding-a-Nginx-(Web-Server)-Container)
    1. [Adding a PHP Container](#Adding-a-PHP-Container)
    1. [Adding a MySQL Container](#Adding-a-MySQL-Container)
    1. [Adding a Composer Utility Container](#Adding-a-Composer-Utility-Container)
    1. [Creating a Laravel App via the Composer Utility Container](#Creating-a-Laravel-App-via-the-Composer-Utility-Container)
    1. [Launching Only Some Docker Compose Services](#Launching-Only-Some-Docker-Compose-Services)
    1. [Adding More Utlity Containers](#Adding-More-Utlity-Containers)
    1. [Docker Compose with and without Dockerfiles](#Docker-Compose-with-and-without-Dockerfiles)
    1. [Bind Mounts and COPY: When to Use What](#Bind-Mounts-and-COPY:-When-to-Use-What)
1. Deploying Docker Containers
    1. [From Development To Production](#From-Development-To-Production)
    1. [Deployment Process and Providers](#Deployment-Process-and-Providers)
    1. [Getting Started with an Example](#Getting-Started-with-an-Example)
    1. [Bind Mounts In Production](#Bind-Mounts-In-Production)
    1. [Introducing AWS and EC2](#Introducing-AWS-and-EC2)
    1. [Connecting to an EC2 Instance](#Connecting-to-an-EC2-Instance)
    1. [Installing Docker on a Virtual Machine](#Installing-Docker-on-a-Virtual-Machine)
    1. [Pushing our local Image to the Cloud](#Pushing-our-local-Image-to-the-Cloud)
    1. [Running and Publishing the App (on EC2)](#Running-and-Publishing-the-App-(on-EC2))
    1. [Managing and Updating the Container / Image](#Managing-and-Updating-the-Container-/-Image)
    1. [Disadvantages of our Current Approach](#Disadvantages-of-our-Current-Approach)
    1. [From Manual Deployment to Managed Services](#From-Manual-Deployment-to-Managed-Services)
    1. [Deploying with AWS ECS: A Managed Docker Container Service](#Deploying-with-AWS-ECS:-A-Managed-Docker-Container-Service)
    1. [More on AWS](#More-on-AWS)
    1. [Updating Managed Containers](#Updating-Managed-Containers)
    1. [Preparing a Multi-Container App](#Preparing-a-Multi-Container-App)
    1. [Configuring the NodeJS Backend Container](#Configuring-the-NodeJS-Backend-Container)
    1. [Deploying a Second Container and A Load Balancer](#Deploying-a-Second-Container-and-A-Load-Balancer)
    1. [Using a Load Balancer for a Stable Domain](#Using-a-Load-Balancer-for-a-Stable-Domain)
    1. [Using EFS Volume with ECS](#Using-EFS-Volume-with-ECS)
    1. [Our Current Architecture](#Our-Current-Architecture)
    1. [Databases and Containers: An Important Consideration](#Databases-and-Containers:-An-Important-Consideration)
    1. [Moving to MongoDB Atlas](#Moving-to-MongoDB-Atlas)
    1. [Using MongoDB Atlas in Production](#Using-MongoDB-Atlas-in-Production)
    1. [Our Updated and Target Architecture](#Our-Updated-and-Target-Architecture)
    1. [Understanding a Common Problem](#Understanding-a-Common-Problem)
    1. [Creating a "build-only" Container](#Creating-a-"build-only"-Container)
    1. [Introducing Multi-Stage Builds](#Introducing-Multi-Stage-Builds)
    1. [Building a Multi-Stage Image](#Building-a-Multi-Stage-Image)
    1. [Deploying a Standalone Frontend App](#Deploying-a-Standalone-Frontend-App)
    1. [Development vs Production: Differences](#Development-vs-Production:-Differences)
    1. [Understanding Multi-Stage Build Targets](#Understanding-Multi-Stage-Build-Targets)
    1. [Beyond AWS](#Beyond-AWS)
1. Docker and Container - A Summary
    1. [Images and Containers](#Images-and-Containers)
    1. [Key Commands](#Key-Commands)
    1. [Data, Volumes and Networking](#Data,-Volumes-and-Networking)
    1. [Docker Compose](#Docker-Compose)
    1. [Local vs Remote](#Local-vs-Remote)
    1. [Deployment](#Deployment)
1. Getting Started with Kubernetes
    1. [More Problems with Manual Deployment](#More-Problems-with-Manual-Deployment)
    1. [Why Kubernetes?](#Why-Kubernetes?)
    1. [What is Kubernetes Exactly?](#What-is-Kubernetes-Exactly?)
    1. [Kubernetes: Architecutre and Core Concepts](#Kubernetes:-Architecutre-and-Core-Concepts)
    1. [Kubernetes will not manage your Infrastructure!](#Kubernetes-will-not-manage-your-Infrastructure!)
    1. [A Closer Look at the Worker Nodes](#A-Closer-Look-at-the-Worker-Nodes)
    1. [A Closer Look at the Master Node](#A-Closer-Look-at-the-Master-Node)
    1. [Important Terms and Concepts](#Important-Terms-and-Concepts)
1. Kubernetes in Action - Diving into the Core Concepts
    1. [Kubernetes does NOT manage your Infrastructure](#Kubernetes-does-NOT-manage-your-Infrastructure)
    1. [Kubernetes: Required Setup and Installation Steps](#Kubernetes:-Required-Setup-and-Installation-Steps)
    1. [Understanding Kubernetes Objects (#Resources)](#Understanding-Kubernetes-Objects-(#Resources))
    1. [The "Deployment" Object (#Resource)](#The-"Deployment"-Object-(#Resource))
    1. [A First Deployment - Using the Imperative Approach](#A-First-Deployment---Using-the-Imperative-Approach)
    1. [kubectl: Behind the Scenes](#kubectl:-Behind-the-Scenes)
    1. [The "Service" Object (#Resource)](#The-"Service"-Object-(#Resource))
    1. [Exposing a Deployment with a Service](#Exposing-a-Deployment-with-a-Service)
    1. [Restarting Containers](#Restarting-Containers)
    1. [Scaling in Action](#Scaling-in-Action)
    1. [Updating Deployments](#Updating-Deployments)
    1. [Deployment Rollbacks and History](#Deployment-Rollbacks-and-History)
    1. [The Imperative vs The Declarative Approach](#The-Imperative-vs-The-Declarative-Approach)
    1. [Creating Deployment Configuration File (#Declarative Approach)](#Creating-Deployment-Configuration-File-(#Declarative-Approach))
    1. [Adding Pod and Container Specs](#Adding-Pod-and-Container-Specs)
    1. [Working with Labels and Selectors](#Working-with-Labels-and-Selectors)
    1. [Creating a Service Declaratively](#Creating-a-Service-Declaratively)
    1. [Updating and Deleting Resources](#Updating-and-Deleting-Resources)
    1. [Multiple vs Single Config Files](#Multiple-vs-Single-Config-Files)
    1. [More on Labels and Selectors](#More-on-Labels-and-Selectors)
    1. [Liveness Probes](#Liveness-Probes)
    1. [A Closer Look at the Configuration Options](#A-Closer-Look-at-the-Configuration-Options)
1. Managing Data and Volumes with Kubernetes
    1. [Starting Project and What we know Already](#Starting-Project-and-What-we-know-Already)
    1. [Kubernetes and Volumes - More Than Docker Volumes](#Kubernetes-and-Volumes---More-Than-Docker-Volumes)
    1. [Kubernetes Volumes: Theory and Docker Comparison](#Kubernetes-Volumes:-Theory-and-Docker-Comparison)
    1. [Creating a New Deployment and Service](#Creating-a-New-Deployment-and-Service)
    1. [Getting Started with Kubernetes Volumes](#Getting-Started-with-Kubernetes-Volumes)
    1. [A First Volume: The "emptyDir" Type](#A-First-Volume:-The-"emptyDir"-Type)
    1. [A Second Volume: The "hostPath" Type](#A-Second-Volume:-The-"hostPath"-Type)
    1. [Understanding the "CSI" Volume Type](#Understanding-the-"CSI"-Volume-Type)
    1. [From Volumes to Persistent Volumes](#From-Volumes-to-Persistent-Volumes)
    1. [Defining a Persistent Volume](#Defining-a-Persistent-Volume)
    1. [Creating a Persistent Volume Claim](#Creating-a-Persistent-Volume-Claim)
    1. [Using a Claim in a Pod](#Using-a-Claim-in-a-Pod)
    1. [Volumes vs Persistent Volumes](#Volumes-vs-Persistent-Volumes)
    1. [Using Environment Variables](#Using-Environment-Variables)
    1. [Environment Variables and ConfigMaps](#Environment-Variables-and-ConfigMaps)
1. Kubernetes Networking
    1. [Starting Project and Our Goal](#Starting-Project-and-Our-Goal)
    1. [Creating a First Deployment](#Creating-a-First-Deployment)
    1. [Another Look at Services](#Another-Look-at-Services)
    1. [Multiple Containers in One Pod](#Multiple-Containers-in-One-Pod)
    1. [Pod-internal Communication](#Pod-internal-Communication)
    1. [Creating Multiple Deployments](#Creating-Multiple-Deployments)
    1. [Pod-to-Pod Communication with IP Addresses and Environment Variables](#Pod-to-Pod-Communication-with-IP-Addresses-and-Environment-Variables)
    1. [using DNS for Pod-to-Pod Communication](#using-DNS-for-Pod-to-Pod-Communication)
    1. [Which Approach is Best? And a Challenge!](#Which-Approach-is-Best?-And-a-Challenge!)
    1. [Adding a Containerized Frontend](#Adding-a-Containerized-Frontend)
    1. [Deploying the Frontend with Kubernetes](#Deploying-the-Frontend-with-Kubernetes)
    1. [Using a Reverse Proxy for the Frontend](#Using-a-Reverse-Proxy-for-the-Frontend)
1. Kubernetes - Deployment (AWS EKS)
    1. [Deployment Options and Steps](#Deployment-Options-and-Steps)
    1. [AWS EKS vs AWS ECS](#AWS-EKS-vs-AWS-ECS)
    1. [Preparing the Starting Project](#Preparing-the-Starting-Project)
    1. [Diving Into AWS](#Diving-Into-AWS)
    1. [Creating and Configuring the Kubernetes Cluster with EKS](#Creating-and-Configuring-the-Kubernetes-Cluster-with-EKS)
    1. [Adding Worker Nodes](#Adding-Worker-Nodes)
    1. [Applying Our Kubernetes Config](#Applying-Our-Kubernetes-Config)
    1. [Getting Started with Volumes](#Getting-Started-with-Volumes)
    1. [Adding EFS as a Volume (with the CSI Volume Type)](#Adding-EFS-as-a-Volume-(with-the-CSI-Volume-Type))
    1. [Creating a Persistent Volume for EFS](#Creating-a-Persistent-Volume-for-EFS)
    1. [Using the EFS Volume](#Using-the-EFS-Volume)
    1. [A Challenge!](#A-Challenge!)



# Docker Images and Containers: The Core Building Blocks
## Images and Containers: What and Why?
## Using and Running External (Pre-Built) Images
## Our Goal: A NodeJS App
## Building our own Image with Dockerfile
## Running a Container based on our own Image
## Images are Read-Only!
## Understanding Image Layers
## Managing Images and Containers
## Stopping and Restarting Containers
## Understanding Attached and Detached Containers
## Entering Interactive Mode
## Deleting Images and Containers
## Removing Stopped Containers Automatically
## A Look Behind the Scenes: Inspecting Images
## Copying Files Into and From a Container
## Naming and Tagging Container and Images
## Sharing Images - Overview
## Pushing Images to DockerHub
## Pulling and Using Shared Images



# Managing Data and Working with Volumes
## Understanding Data Categories/Different Kinds of Data
## Analyzing a Real App
## Building and Understanding the Demo App
## Understanding the Problem
## Introducing Volumes
## A First, Unsucessful Try
## Named Volumes To THe Rescue!
## Getting Started with Bind Mounts (Coding Sharing)
## Combining and Merging Different Volumes
## A NodeJS-specific Adjustment: Using Nodemon in a Container
## Volumes and Bind Mounts: Summary
## A Look at Read-Only Volumes
## Managing Docker Volumes
## Using "COPY" vs Bind Mounts
## Don't COPY Everything: Using "dockerignore" Files
## Working with Environment Variables and ".env" Files
## Using Build Arguments (ARG)



# Networking: (Cross-)Container Communication
## Case 1: Container to WWW Communication
## Case 2: Container to Local Host Machine Communiaction
## Case 3: Container to Container Communication
## Analyzing the Demo App
## Creating a Container and Communicating to the Web (WWW)
## Making Container to Host Communication Work
## Container to Container Communication: A Basic Solution
## Introducing Docker Networks: Elegant Container to Container Communication
## How Docker Resolves IP Addresses



# Building Multi-Container Applications with Docker
## Our Target App and Setup
## Dockerizing the MongoDB Service
## Dockerizing the Node App
## Moving the React SPA into a Container
## Adding Docker Networks for Efficient Cross-Container Communication
## Adding Data Persistence to MongoDB with Volumes
## Volumes, Bind Mounts and Polishing for the NodeJS Container
## Live Source Code Updates for the React Container (with Bind Mounts)



# Docker Compose: Elegant Multi-Container Orchestration
## Docker-Compose: What and Why?
## Creating a Compose File
## Diving into the Compose File Configuration
## Docker Compose Up and Down
## Working with Multiple Containers
## Adding Another Container
## Building Images and Understanding Container Names



# Working with "Utility Containers" and Executing Commands In Container
## Introduction and What are "Utility Containers"?
## Utility Containers: Why would you use them?
## Different Ways of Running Commands in Containers
## Building a First Utility Container
## Utilizing ENTRYPOINT
## Using Docker Compose



# A More Complex Setup: A Laravel and PHP Dockerized Project
## The Target Setup
## Adding a Nginx (Web Server) Container
## Adding a PHP Container
## Adding a MySQL Container
## Adding a Composer Utility Container
## Creating a Laravel App via the Composer Utility Container
## Launching Only Some Docker Compose Services
## Adding More Utlity Containers
## Docker Compose with and without Dockerfiles
## Bind Mounts and COPY: When to Use What



# Deploying Docker Containers
## From Development To Production
## Deployment Process and Providers
## Getting Started with an Example
## Bind Mounts In Production
## Introducing AWS and EC2
## Connecting to an EC2 Instance
## Installing Docker on a Virtual Machine
## Pushing our local Image to the Cloud
## Running and Publishing the App (on EC2)
## Managing and Updating the Container / Image
## Disadvantages of our Current Approach
## From Manual Deployment to Managed Services
## Deploying with AWS ECS: A Managed Docker Container Service
## More on AWS
## Updating Managed Containers
## Preparing a Multi-Container App
## Configuring the NodeJS Backend Container
## Deploying a Second Container and A Load Balancer
## Using a Load Balancer for a Stable Domain
## Using EFS Volume with ECS
## Our Current Architecture
## Databases and Containers: An Important Consideration
## Moving to MongoDB Atlas
## Using MongoDB Atlas in Production
## Our Updated and Target Architecture
## Understanding a Common Problem
## Creating a "build-only" Container
## Introducing Multi-Stage Builds
## Building a Multi-Stage Image
## Deploying a Standalone Frontend App
## Development vs Production: Differences
## Understanding Multi-Stage Build Targets
## Beyond AWS



# Docker and Container - A Summary
## Images and Containers
## Key Commands
## Data, Volumes and Networking
## Docker Compose
## Local vs Remote
## Deployment



# Getting Started with Kubernetes
## More Problems with Manual Deployment
## Why Kubernetes?
## What is Kubernetes Exactly?
## Kubernetes: Architecutre and Core Concepts
## Kubernetes will not manage your Infrastructure!
## A Closer Look at the Worker Nodes
## A Closer Look at the Master Node
## Important Terms and Concepts



# Kubernetes in Action - Diving into the Core Concepts
## Kubernetes does NOT manage your Infrastructure
## Kubernetes: Required Setup and Installation Steps
## Understanding Kubernetes Objects (Resources)
## The "Deployment" Object (Resource)
## A First Deployment - Using the Imperative Approach
## kubectl: Behind the Scenes
## The "Service" Object (Resource)
## Exposing a Deployment with a Service
## Restarting Containers
## Scaling in Action
## Updating Deployments
## Deployment Rollbacks and History
## The Imperative vs The Declarative Approach
## Creating Deployment Configuration File (Declarative Approach)
## Adding Pod and Container Specs
## Working with Labels and Selectors
## Creating a Service Declaratively
## Updating and Deleting Resources
## Multiple vs Single Config Files
## More on Labels and Selectors
## Liveness Probes
## A Closer Look at the Configuration Options



# Managing Data and Volumes with Kubernetes
## Starting Project and What we know Already
## Kubernetes and Volumes - More Than Docker Volumes
## Kubernetes Volumes: Theory and Docker Comparison
## Creating a New Deployment and Service
## Getting Started with Kubernetes Volumes
## A First Volume: The "emptyDir" Type
## A Second Volume: The "hostPath" Type
## Understanding the "CSI" Volume Type
## From Volumes to Persistent Volumes
## Defining a Persistent Volume
## Creating a Persistent Volume Claim
## Using a Claim in a Pod
## Volumes vs Persistent Volumes
## Using Environment Variables
## Environment Variables and ConfigMaps



# Kubernetes Networking
## Starting Project and Our Goal
## Creating a First Deployment
## Another Look at Services
## Multiple Containers in One Pod
## Pod-internal Communication
## Creating Multiple Deployments
## Pod-to-Pod Communication with IP Addresses and Environment Variables
## using DNS for Pod-to-Pod Communication
## Which Approach is Best? And a Challenge!
## Adding a Containerized Frontend
## Deploying the Frontend with Kubernetes
## Using a Reverse Proxy for the Frontend



# Kubernetes - Deployment (AWS EKS)
## Deployment Options and Steps
## AWS EKS vs AWS ECS
## Preparing the Starting Project
## Diving Into AWS
## Creating and Configuring the Kubernetes Cluster with EKS
## Adding Worker Nodes
## Applying Our Kubernetes Config
## Getting Started with Volumes
## Adding EFS as a Volume (with the CSI Volume Type)
## Creating a Persistent Volume for EFS
## Using the EFS Volume
## A Challenge!