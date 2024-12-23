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
  - [2.6. A First, Unsuccessful Try](#26-a-first-unsuccessful-try)
  - [2.7. Named Volumes To The Rescue!](#27-named-volumes-to-the-rescue)
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
  - [3.2. Case 2: Container to Local Host Machine Communication](#32-case-2-container-to-local-host-machine-communication)
  - [3.3. Case 3: Container to Container Communication](#33-case-3-container-to-container-communication)
  - [3.4. Analyzing the Demo App](#34-analyzing-the-demo-app)
  - [3.5. Creating a Container and Communicating to the Web (WWW)](#35-creating-a-container-and-communicating-to-the-web-www)
  - [3.6. Making Container to Host Communication Work](#36-making-container-to-host-communication-work)
  - [3.7. Container to Container Communication: A Basic Solution](#37-container-to-container-communication-a-basic-solution)
  - [3.8. Introducing Docker Networks: Elegant Container to Container Communication](#38-introducing-docker-networks-elegant-container-to-container-communication)
  - [3.9. How Docker Resolves IP Addresses](#39-how-docker-resolves-ip-addresses)
  - [3.10. Docker Network Drivers](#310-docker-network-drivers)
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
  - [7.8. Adding More Utility Containers](#78-adding-more-utility-containers)
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
1. The Node.js app has the following features
   1. Running the app in `Node.js` runtime as a Docker container
   2. Having an API endpoint for `POST` request
   3. Serving static files on its `/public` path
   4. Using 3rd party dependencies `Express` and `body-parser` listed in `package.json`

## 1.4. Building our own Image with Dockerfile
1. `FROM` indicates which image should it refer to. For example, we can pull to use `Node.js`. 
2. `COPY` indicates what code and files should be included in the container. For example, we can use `COPY . .`
   1. The 1st dot indicates that all the files (besides `Dockerfile`) should be included. 
   2. The 2nd dot means the directory where should the code go.
   3. For the destination directory, we can setup the other folder such as `/app`. 
3. We can specify the working directory with `WORKDIR`.
   1. Note that the destination can simply be `.` for `COPY` instruction as we have set up `WORKDIR`. 
   2. However, for clarity, we can keep the destination path the same as the working directory. 
4. After running all the required commands, we can use `CMD` to run commands to start the service after all the `RUN` are done. 
   1. In this case, we can use an array and pass the commands. 
   2. Note that if there's no `CMD` specified, the `CMD` of the base image will be executed.
   3. Without both `CMD` and image, an error will be prompted. 
5. Besides running the server app, we need to expose the port to allow outside network connecting to the docker container.

```dockerfile
FROM node

WORKDIR /app

# by setting WORKDIR, destination to COPY can simply be '.'
COPY . /app

RUN npm install

# depending on the server port
EXPOSE 80

CMD ["node", "server.js"]
```

## 1.5. Running a Container based on our own Image
1. After setting up the `Dockerfile`, we can run `docker build .`, which `.` means all the files in the current directory.
2. We then can run the built image by `docker run [IMAGE_ID]`
3. However, the app is still not accessible from the outside world as we haven't map the port to the local machine. 
4. We can run the image with `-p` flag with port mapping as `LOCAL_PORT:CONTAINER_EXPOSE_PORT`. 
5. In this case, we want to map our port at `3000`, we then can use `docker run -p 3000:80 [IMAGE_ID]`. 
6. We then can use a browser or HTTP client to interact with the server at `http://localhost:3000`.

## 1.6. Images are Read-Only!
1. Once an image is built, it's not mutable.
2. It means that though we change the source code, the image is still the same as when we built it.
3. However, there's the other approach to hot load and rebuilt the image every time we update the source code.

## 1.7. Understanding Image Layers
1. Docker will build image based on the changes and use the caches in the previous builds. 
2. Every instruction in a `Dockerfile` can be assessed as a layer.
3. Since Docker image is read-only, Docker will check on each instruction and see if there's any difference to use caches rather than re-run the instruction if it's the same. 
4. In the previous case, though we only change the source code, Docker will re-run `npm install` instruction which is not necessary as only the source code is changed (rather than changing `package.json` and dependencies).
5. Therefore, we can optimize the instructions in `Dockerfile` as the following
    ```Dockerfile
    FROM node

    WORKDIR /app

    COPY package.json /app

    RUN npm install

    COPY . /app

    EXPOSE 80

    CMD ["node", "server.js"]
    ```
6. In this optimization, we ensure `package.json` and `npm install` happens before Docker copies the other source code. 
7. Hence, if there's only changes on the source code, Docker will only re-run the instructions for copying the source code while using the cache to implement dependency installation. 

## 1.8. Managing Images and Containers
1. There are many commands to allow us interact with Docker CLI. 
2. For example, we can name a docker image, list all built images, analyze an image and remove images. 
3. For containers, we can name a container, configure a container in detail, list all containers, and remove containers.

## 1.9. Stopping and Restarting Containers
1. While we can list all containers including the stopped ones, we can re-use those containers without using `docker run`. 
2. `docker run` will create a new container which is not necessary in some cases. 
3. To restart a container, we can use `docker start [container_name]`.
4. However, the behavior of `docker start` is different from `docker run` that it only starts the container and falls back to the terminal, so the user cannot interact with the container through CLI. 

## 1.10. Understanding Attached and Detached Containers
1. When running `docker run`, docker starts with attached mode by default which redirect the user into container CLI.
2. On the other hand, running `docker start` starts with detached mode by default, so docker only starts the container while putting the user back to local terminal. 
3. To run in detach mode with `docker run`, we can put `-d` flag as `docker run -d`, so a new container is built and starts with detached mode. 
4. We want to enter the container context through CLI, we can use `docker attach [container_name]`, docker will then attach the context of the container, so the user can check the printed logs.
5. Note that `attach` can be simplified as `-a` flag as for `attach`.
6. Besides `attach`, we can use `docker logs [container_name]` to check logs printed in a container.
7. In addition, we can add `-f` follow flag to keep listening the logs printed from a running container.
8. Note that if we log from a stopped container, it only prints the logs from the records and return the user back to local terminal.
9. This `docker logs -f [container_name]` is similar to `docker attach` while it also prints the log before the user attaches the container since the container was built.  

## 1.11. Entering Interactive Mode
1. Though the user is in the attach mode when running `docker run` to create a new container to run an image, the attach mode doesn't allow users to **interact** with the runtime by default.
2. In this case, we can check `-i` flag which stands for `--interactive` to keep `STDIN` open even if not attached (in attach mode).
3. We then can use `-t` flag which is `--tty` to allocate a pseudo-TTY (creating a terminal).
4. When running the container, we can use `-a` for attach mode and `-i` for interactive to work with the CLI of the container runtime. 

## 1.12. Deleting Images and Containers
1. To delete docker container, we can use `docker rm [container_name]`. 
2. Note that the command doesn't work if the container is still running. This command only removes a container if it's stopped.
3. In addition, we can pass multiple `container_name` to interact with at the same time.
4. For removing docker images, we can use `docker rmi` which includes `i` to work with `rm` and removes docker images.
5. We can remove images that is not used in any container by using `docker image prune`. Note that it is `image` rather than `images`.

## 1.13. Removing Stopped Containers Automatically
1. When creating a new container, we can add `--rm` flag as to remove the container right after it stops. 

## 1.14. A Look Behind the Scenes: Inspecting Images
1. To inspect an image, we can use `docker image inspect [image_hash]`. 

## 1.15. Copying Files Into and From a Container
1. Docker allows users to copy files to/from a container.
2. Note that this command works though the container is not running.
3. `docker cp [from_path] [to_path]`. Note that we need to put a column `:` after the container. 
4. For example, we can copy a folder which includes files from a local path such as `test/text.txt`.
   1. `docker cp test/. [container_name]:[container_path]`
5. Vice versa, we can copy a folder from the container to our local system. 
6. This could be useful when doing local development as any of the source code changes, we only need to copy the changed files to the container without rebuilding the image. 
7. However, there's a better solution to develop apps with docker.

## 1.16. Naming and Tagging Container and Images
1. We can assign name to a container with `--name` when creating it from an image with `docker run`.
2. Besides assigning name to docker container, we can give docker images tags when building the image with `docker build .`.
3. `name` and `tag` works with different purposes. For example, we can have a `name` for conventional understanding, such as the function of the app itself, while use `tag` to specify the version of the app. 
4. When setting up `Dockerfile` and load `node` image, we can specify the version as `FROM node:12` to use `Node.js` version 12. 

## 1.17. Sharing Images - Overview
1. Every user having the same image can build containers from the image. 
2. Besides sharing `Dockerfile`, we can share a built image directly. 

## 1.18. Pushing Images to DockerHub
1. Docker has mechanism to share images through Docker hub or the other private registry. 
2. To rename an existing docker image, we can use `docker tag [old_image_name] [new_image_name]`. Note that if we'd like to push the image to a registry, we may need to name if with the user ID with a slash `/`. 
3. By renaming an image, docker creates a clone with the new given name rather than getting rid of the old image. 
4. We can also use `docker login` to sign in to docker hub by giving username and password. 

## 1.19. Pulling and Using Shared Images
1. To pull image from the signed in registry, we can use `docker pull [repository]`. 
2. If the image repository is public, it works similar to `git` and `npm` that everyone can pull the resource. 
3. Note that we can use `docker logout` to sign out from the docker app. 


# 2. Managing Data and Working with Volumes
## 2.1. Understanding Data Categories/Different Kinds of Data
1. There are several types of data when we work with a docker container.
2. The app itself which is the image that is read-only. 
3. Temporary data that is fetched or produced by the apps in the container which only exists in RAM or temporary files. The data is scoped in the container. 
4. Permanent data that is fetched or produced in the container that must not be lost when the container stops or restarts. 
5. To keep data permanent, we can use docker `Volumes`. 

## 2.2. Analyzing a Real App
## 2.3. Building and Understanding the Demo App
1. The demo app should be dockerized and run in docker container. 
2. It collects feedback from users and store in a file.
3. If the file exists, server will prompt an error that the file has been created. 

## 2.4. Understanding the Problem
1. If we don't use `--rm` when creating a container, the container simply stops rather than being removed.
2. If we restart the container, the files written in the file system will be persist as the container is an isolated environment that the files modification persists.

## 2.5. Introducing Volumes
1. Volumes are folders on your host machine hard drive which are mounted ("made available", mapped) into containers. 
2. Though the concept is similar to `COPY` in `Dockerfile`, the files and data in volumes is on the host machine, while `COPY` only happens when the image is built. 
3. Volumes persist if a container shuts down. If a container (re-)starts and mounts a volume, any data inside of that volume is available in the container. 
4. A container can write data into a volume and read data from it. 

## 2.6. A First, Unsuccessful Try
1. To use volumes, we can have `VOLUME` in `Dockerfile` and specify the path to keep the files and data. 
```dockerfile
# anonymous volumes
VOLUME ["[WORKDIR]/[path_or_directory]"]
```

## 2.7. Named Volumes To The Rescue!
1. If we create a volume in Dockerfile without naming, it will be an anonymous volume.
2. We can use `docker volume ls` to list all volumes on the host machine. 
3. The anonymous volume is managed by docker. Besides, the volume is bound to the container that once the container is removed, the anonymous volume will be removed too. 
4. Besides, the user won't know where the volume is stored on the host machine as docker controls and manages the volume. 
5. On the other hand, users have better control over `named volumes`. 
6. Note that the main purpose of volumes is to persist data for containers to work with rather than edit the data directly by the user. 
7. A named volume cannot be created through `Dockerfile` but when creating a container from an image. 
8. An anonymous volume is attached to the container, while a named volume is not. 
9. When creating a container by image, we can add `-v` flag with given name and path `docker run -d -p LOCAL_PORT:EXPOSE_PORT --rm --name [container_name] -v [volume_name]:[path_to_store_as_volume] [images_name]:[image_tag]`.
10. In addition, if we create an anonymous volume without `--rm` when creating the container, the volume will persist though the container attached is removed later, but the volume will then become an orphan that is not accessible and useful. 
11. To remove unused volumes, we can run `docker volume prune` or `docker volume rm [volume_name]`. 

## 2.8. Getting Started with Bind Mounts (Coding Sharing)
1. Users has fully control with `bind mounts` which is similar to `volumes`. 
2. Bind mounts are useful for persistent, editable data. In development cycle, this is useful to work with source code to do hot reload rather than rebuilding the image when the source code changes.
3. To create a bind mount, we can do from the host machine rather than the `Dockerfile`.
4. In addition, we may need to check on docker app settings under `Resources` to ensure docker has access authorization to the source code directory. 
5. Note that the path for bind mounts should be **absolute path**. 
6. On different OS of the host machine, we may use `$(pwd)` to current absolute path on UNIX based OS such as Linux and MacOS, and use `%cd%` to get the absolute path on Windows OS.
    ```bash
    # create docker container
    docker run -d -p 3000:3000 --name docker-app -v named_volume:directory_to_keep_in_volume "absolute_path_to_bind_mounts_with:docker_WORKDIR" image_name:image_tag
    ```
7. In this case, we overwrite the files from given absolute path to the working directory in the docker container. 
8. In cases, this may cause problem as `node_modules` and/or the other dependencies we setup from `Dockerfile` would be overwritten and lost. 
9. Bind mounts are not portable between different host systems or environments, because they depend on the directory structure of the host system.

## 2.9. Combining and Merging Different Volumes
1. When using bind mounts, the files in bind mounts will be shared and used in docker containers.
2. However, in some case, we don't want all the data and files from the current directory on the host machine overwrites everything in the docker container. 
3. For example, we can develop without `node_modules` in local repository but only install the dependencies in the docker container. 
4. In this case, we can have an anonymous volume to keep `node_modules` of the container. 
5. In the example, we may create a `named volume`, a `bind mount`, and an `anonymous volume`.
6. Note that creating a volume without a column `:` is as creating `VOLUME ["path/in/container"]` in `Dockerfile`. 

## 2.10. A NodeJS-specific Adjustment: Using Nodemon in a Container
1. For developing `Node.js` apps, we can use `nodemon` to let `Node.js` watch on the changes and hot reload to reflect. 
2. In this case, we can change `npm start` to `nodemon your_app_entry.js` to run the app. We can also change the `CMD` to `["npm", "start"]` in `Dockerfile`. 
3. Note that bind mounts doesn't work directly when using Docker on WindowsOS as Docker daemon is actually running on `wsl2` and it may not have the right permission to access the on the path.
4. Therefore, the source code repository should be located in `wsl` file system to allow docker proceed bind mount and reflect on the changes. 

## 2.11. Volumes and Bind Mounts: Summary
1. Anonymous volumes
   1. Created specifically for a single container.
   2. Survives container shutdown/restart unless `--rm` is used.
   3. Cannot be shared across containers. 
   4. Since it's anonymous, it cannot be re-used (even on the same image).
   5. Can be useful to persist re-usable resource for a container or outsource to keep the resource on the host machine (such as `node_modules` or data caches). 
2. Named volumes
   1. Created in general, not tied to any specific container. 
   2. Survives container shutdown/restart and can be removed through Docker CLI. 
   3. Can share across containers.
   4. Can be re-used for same container (across restarts).
3. Bind mounts
   1. Location on host file system, not tied to any specific container.
   2. Survives container shutdown/restart removal on host file system.
   3. Can share across containers.
   4. Can be re-used for same container (across restarts).
4. The main difference between volumes and bind mounts is that volumes cannot be modified directly from Docker CLI or the host machine, while bind mounts is a mapping which maps and reflects changes on certain file or directory on the host machine. 

## 2.12. A Look at Read-Only Volumes
1. By default bind mounts are enabled for `read-write` access. 
2. To enabled `read-only` on bind mount, we can add the other column `:` after destination and give `ro` for `read-only`. `docker run -v $(pwd):[docker_file_path]:ro docker_image:tag`.
3. Note that any sub-path or specified paths will overwrite the volumes above its scope. 
4. For example, we create a volume for local `data` store while having the whole working directory to be `read-only` bind mount. 
```bash
docker run -v $(pwd):WORKDIR:ro -v named_volume:WORKDIR/data docker_image:tag
```
5. Note that the specified volumes only overwrites when its given as arguments in command rather than in `Dockerfile`. 

## 2.13. Managing Docker Volumes
1. We can use `docker volume ls` to list all volumes. 
2. We can easily notice anonymous volumes as their name will be a long hash. 
3. Note that bind mounts are created by the user and docker has no directly control to the mounts. 
4. We can create a volume directly with `docker volume create [volume_name]` and use the volume when creating a container. 
5. `docker volume rm` and `docker volume prune` to remove volumes. 
6. We can inspect docker volume with `docker volume inspect [volume_name]`.

## 2.14. Using "COPY" vs Bind Mounts
1. Though we may use bind mount to put source code into the container and reflect changes.
2. Thus, we don't need `COPY` in `Dockerfile` as source code will be replaced with bind mount injects.  
3. However, when deploying to a online server, we don't use bind mount but require source code from the built image. 

## 2.15. Don't COPY Everything: Using "dockerignore" Files
1. We can create a `.dockerignore` which is similar to `.gitignore`. 
2. In common cases, we don't need to `COPY` `node_modules` as we don't need the local copy added to the container. 
3. Besides, we can add every files that doesn't affect app execution to `.dockerignore`. 

## 2.16. Working with Environment Variables and ".env" Files
1. We can pass build-time `ARG` arguments and runtime `ENV` environment variables. 
2. `ARG`
   1. Available inside of `Dockerfile`, NOT accessible in `CMD` or any application code. 
   2. Set on image build (`docker build`) via `--build-arg`.
3. `ENV`
   1. Available inside of `Dockerfile` and in application code 
   2. Set via `ENV` in `Dockerfile` or `--env` on `docker run`.
4. To use variables such as `ARG` or `ENV` in `Dockerfile`, we can put a dollar sign `$` with the variable. 
5. Note that specifying an `ENV` in `docker run` command will overwrite the values in `Dockerfile`. 
6. Docker also allows to get environment variables from `.env` file with `--env-file [file_path]`.

## 2.17. Using Build Arguments (ARG)
1. Arguments can be defined with `ARG` and used only in a `Dockerfile`. 
2. We can also use `--build-arg` in the command similar to ENVs. 



# 3. Networking: (Cross-)Container Communication
## 3.1. Case 1: Container to WWW Communication
1. Server in a container can use HTTP client such as `axios` to send HTTP request to WWW. 

## 3.2. Case 2: Container to Local Host Machine Communication
1. The server in a container may connect to a local hosted database such as MongoDB. 

## 3.3. Case 3: Container to Container Communication
1. The server in a container may talk to the other container such as a MySQL database hosted on the other container. 

## 3.4. Analyzing the Demo App
1. The server app has several endpoints to query and create entities in a MongoDB database. 
2. There are other endpoints work as proxies to query data from a public API for Starwar movie data. 

## 3.5. Creating a Container and Communicating to the Web (WWW)
1. A docker container works with WWW HTTP request by default without further configuration. 
2. However, it doesn't work with localhost and communication between containers out of the box. 

## 3.6. Making Container to Host Communication Work
1. To connect to localhost on the host machine, it needs to use `host.docker.internal` rather than using `localhost` directly. 

## 3.7. Container to Container Communication: A Basic Solution
1. To allow containers communicate to each other, we can firstly use `docker inspect [container_name]` to check on a container for the details. 
2. In the inspect object, we can find `IPAddress` in `NetworkSettings` to allow a container to connect to the other. 
3. However, such method isn't ideal as we need to check on the IP address every time we spin up a container. 

## 3.8. Introducing Docker Networks: Elegant Container to Container Communication
1. When running containers, we can firstly setup a Network which is shared by the scoped/group of containers. 
2. To use a network, we can use `docker run --network [network_name]`. 
3. Within a Docker network, all containers can communicate with each other and IPs are automatically resolved.
4. Note that we need to create and set up a network before hand. Docker doesn't create a network on the fly when we try to use it as the other commands such as for using volumes.
5. To create a docker network, we can use `docker network create [network_name]`.
6. We then can list and check all networks with `docker network ls`. 
7. After creating a network, we can use it when creating or running a docker container with `docker run -d --rm --name [container_name] --network [network_name] [image_name]`. 
8. In a container, we can simply use the name of the other container we want to connect to as the URI, docker will resolve the container name as the IP address. 
9. For example, we have a MongoDB container named `mongodb` and runs on port `27017`. We can connect to mongo db container through `mongodb://mongodb:27017/[database]` in the other containers. 
10. In addition, containers in the same network can simply connect to each other through the name, and we don't need to use `-p` flag to expose the port and map it to something else as if we only need communication between containers.  

## 3.9. How Docker Resolves IP Addresses
1. Though we can use container name in a container source code to replace the IP address for the other container in the same network, Docker doesn't actually replace the source but intercept the outgoing requests and resolves the name to an IP address.

## 3.10. Docker Network Drivers
1. Docker has `bridge` driver as default which has the usage in the note above. 
2. There are some other drivers for different cases and scenarios, but for most of the cases, `bridge` by default has been suitable for most cases. 
3. The other [Docker network drivers](https://docs.docker.com/network/)



# 4. Building Multi-Container Applications with Docker
## 4.1. Our Target App and Setup
1. In the demo project, we have 3 main building blocks
   1. A MongoDB database
   2. Backend - NodeJS Rest API
   3. Frontend - React SPA
2. The frontend SPA communicates to backend Node.js rest API which connects to the MongoDB. 
3. In this demo solution, we'd like to keep some attributes for each of the building blocks.
   1. MongoDB
      1. Data must persist
      2. Access should be limited
   2. Backend
      1. Data must persist (writing logs on the server)
      2. Live source code update
   3. Frontend
      1. Live source code update


## 4.2. Dockerizing the MongoDB Service
1. We can run `docker run --name mongodb --rm -d -p 27017:27017 mongo` to use official MongoDB image to create a MongoDB container named `mongodb`. 
2. MongoDB uses port `27017` by default. After initiating the container, we can use `docker ps` to check. 
3. Besides, we can run `docker logs mongodb` to check logs from `mongodb` container. 

## 4.3. Dockerizing the Node App
1. From the example, we can create a `Dockerfile` with the following configuration.
    ```dockerfile
    FROM node

    WORKDIR /app

    COPY package.json .

    RUN npm install

    COPY . .

    EXPOSE 80

    CMD ["node", "app.js"]
    ```
2. Run `docker image prune -a` to clear all the unassociated images. 
3. Run `docker build -t goals-node .` to build a new image.
4. Run `docker run --name goals-backend --rm goals-node` to run the container in attached mode. 
5. However, the above initiation of the Node.js backend doesn't work as it will break when it tries to connect to MongoDB which is running on a docker container. 
6. In this case, we can update the source code and replace `localhost` with `host.docker.internal`.
7. Note that before running the new backend container, we need to rebuild the image as we change the source code. 
8. However, by following the above instructions hasn't been enough as the Node.js backend doesn't expose a port for external connection.

## 4.4. Moving the React SPA into a Container
1. As for Node.js backend, we can create a `Dockerfile` for the frontend app. 
    ```dockerfile
    FROM node

    WORKDIR /app

    COPY package.json .

    RUN npm install

    COPY . .

    EXPOSE 3000

    CMD ["npm", "start"]
    ```
2. Run `docker build -t goals-react .` to create an image. 
3. Run `docker run --name goals-frontend --rm -d -p 3000:3000 goals-react` to run the image in a container.
4. Note that that current settings runs the react app in development mode. 
5. In this case, we can run it with `-it` flag `docker run --name goals-frontend --rm -d -p 3000:3000 -it goals-react`.
6. At the current stage, we have put all 3 services, frontend, backend, and database in Docker containers.
7. We can therefore, setup Docker network and allow the services connect to each other without access `localhost` network, network of the local machine. 

## 4.5. Adding Docker Networks for Efficient Cross-Container Communication
1. Frontend react app needs too call the backend endpoint as an external service. 
2. Therefore backend service needs to `EXPOSE PORT` as for calling from browser.
3. In this case, react app is calling `localhost` as it was. 

## 4.6. Adding Data Persistence to MongoDB with Volumes
1. To keep data consistent and not to be removed when the container stops running when initiating with `--rm` flag, we can create a volume and keep data in MongoDB.
2. When starting up MongoDB container, we can use `docker run --name mongodb -v data:/data/db --network goals-network mongo` to create a MongoDB container with a volume name `data`. 
3. According to [Docker](https://hub.docker.com/_/mongo), we can find MongoDB stores its data at `/data/db`. 
4. Besides, we can set up both `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD` for additional authentication and security.
5. We can assign environment variable with `-e` flag. 
  ```bash
  docker run --name mongodb -v data:/data/db --rm -d --network goals-net -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=username -e MONGO_INITDB_ROOT_PASSWORD=password mongo
  ```
6. Note that if the machine has created volume and initiate MongoDB, the volumes shall be recreated as the very first time when it's created, the root user can be something else.
7. In addition, we need to add `?authSource=admin` as query string when connecting to MongoDB. 
8. The updated connection link to MongoDB can be `mongodb://[username:password@]mongodb:27017/course-goals?authSource=admin`.

## 4.7. Volumes, Bind Mounts and Polishing for the NodeJS Container
1. Create a volume for `logs` which is printed in `/app/logs` as the `WORKDIR` is `/app`.
2. Bind mount local project directory to the container to allow real-time update in the container.
3. Create an anonymous mount for `node_modules` to let Docker knows that DO NOT copy and bind the `node_modules` from local machine but use the one installed from `Dockerfile`. 
    ```bash
    docker run --name goals-backend -v logs:/app/logs -v [local_absolute_path_to_directory]:/app -v /app/node_modules --rm -d --network goals-net -p 80:80 goals-node
    ```
4. However, the current `CWD` runs `["node", "app.js"]` which is a static starts and DOES NOT update though the source code is bond and changed.
5. We can use `nodemon` which to start the server. Note that if the server runs on Windows machine, it needs `-L` flag to reflect the source code changes in realtime. 
6. Update `package.json`
  ```json
  {
    "scripts": {
      "start": "nodemon app.js",
      // "start": "nodemon -L app.js" // for WINDOWs OS
    }
  }
  ```
7. Update `Dockerfile`
    ```dockerfile
    CMD ["npm", "start"]
    ```
8. In addition, we can keep files that we are not interested in `.dockerignore`
    ```dockerignore
    node_modules
    Dockerfile
    .git
    ```


## 4.8. Live Source Code Updates for the React Container (with Bind Mounts)
1. We can have similar configuration as for the backend project to build the container for the frontend React app. 
2. Note that on Windows machines which run Docker in WSL2, we need to put `WATCHPACK_POLLING=true` to run the React app in development mode. 
    ```json
    // package.json
    "scripts": {
      "start": "WATCHPACK_POLLING=true react-scripts start",
    }
    ```
3. Besides, we can have exact the same `.dockerignore` file
    ```dockerignore
    node_modules
    Dockerfile
    .git
    ```
4. The command to run docker container is `docker run -v [absolute_path/src]:/app/src --name goals-frontend --rm -p 3000:3000 -it goals-react`.



# 5. Docker Compose: Elegant Multi-Container Orchestration
## 5.1. Docker-Compose: What and Why?
1. Docker compose allows the dev to run multiple `docker build` and `docker run` as orchestration command in one configuration file. 
2. Docker compose file DOES NOT replace `Dockerfile` for custom docker image.
3. Docker compose IS NOT suited for managing multiple containers across different host machines. 
4. The main parts of a Docker compose file, `services` which is used to build containers from Docker images. 
5. Besides it can configure the followings for containers to work with. 
   1. Ports to publish
   2. Environment variables
   3. Volumes
   4. Networks

## 5.2. Creating a Compose File
1. We firstly specify the version of docker compose syntax. At the time of learning, we are using version `3`. 
2. We can refer to the syntax from [Docker official docs](https://docs.docker.com/compose/compose-file/compose-file-v3/)
3. YAML files take indentation similar to Python code.
4. For each container, we can specify their name
    ```yaml
    version: '3.8'

    services:
      mongodb:

      backend:

      frontend:
    ```

## 5.3. Diving into the Compose File Configuration
1. The yaml syntax takes indentation as for different levels (layers) and doesn't require `-` prefix for each pair of `key: value`. 
2. However, for one line statement as `KEY=VALUE`, it needs a dash `-` for listing. 
3. Besides, the syntax doesn't accept both 2 statements in the same level. 
4. To assign environment variables, `docker-compose` accepts 2 syntax with `environment`
   1. `ENV_KEY: ENV_VALUE`
   2. `- ENV_KEY=ENV_VALUE`
5. On the other hand, we can also keep environment variables only on the hosting machine in a specific file such as `.env`.
6. We can then use `env_files` to read ENVs from specific file(s). 
7. We don't need to specify `--rm` and `-d` to remove container when it's not running and running the container in detach mode. 
8. For inter-container networking, all the containers setup by the same `docker-compose` will be added into the same network out of the box. Therefore, we don't need to specify `networks` in the compose file. 
9. If we are using any named `volumes`, we should specify in the same level as `services`. 
10. In addition, all containers setup by the `docker-compose` can share and keep data in the same volumes. 
    ```yaml
    # docker-compose
    version: '3.8'

    services:
      mongodb:
        image: 'mongo'
        volumes:
          - data:/data/db
        # environment:
        # - MONGO_INITDB_ROOT_PASSWORD=secret
        # MONGO_INITDB_ROOT_USERNAME: root
        env_file:
          - ./.env
        # docker-compose add all containers in the services into the same network automatically
        # networks:
        #   - gaols-net
      backend:

      frontend:

    volumes:
      data:
    ```

## 5.4. Docker Compose Up and Down
1. To start with docker with `docker-compose`, we need to navigate to the path where the `docker-compose` file sits. 
2. We then use `docker-compose up` to run the actions in the `docker-compose.yaml`.
3. As running a single docker image in a container, we can use `-d` to run docker compose in detach mode. 
4. To stop and remove all containers, we can use `docker-compose down`, so all the running containers will be stopped and removed. 
5. Note that `docker-compose down` doesn't remove volumes by default.
    ```yaml
    # docker-compose
    version: '3.8'

    services:
      mongodb:
        image: 'mongo'
        volumes:
          - data:/data/db
        # environment:
        # - MONGO_INITDB_ROOT_PASSWORD=secret
        # MONGO_INITDB_ROOT_USERNAME: root
        env_file:
          - ./.env
        # docker-compose add all containers in the services into the same network automatically
        # networks:
        #   - gaols-net
      # backend:

      # frontend:

    volumes:
      data:
    ```

## 5.5. Working with Multiple Containers
1. We can use `docker-compose` to build image by referring a `Dockerfile` 
2. Under the container level, we can use `build` and specify the path where `docker-compose` should look for the `Dockerfile` as a shorter syntax.
3. On the other hand, we can use `context` to specify the directory which `Dockerfile` should refer to and `dockerfile` to specify the `Dockerfile` if there's more than one `Dockerfile` such as separated `Dockerfile` for staging and production. 
4. For ports, we can use `ports` on the same level as `build` and list it with `-` for `mappingPort:containerPort`, such as `80:80`. 
5. For ENVs, we can use `environment` or `env_files` as mentioned in the last section.
6. For `volumes`, we don't need to provide the absolute path as we do for running a Docker container from image.
7. We can refer to the path where the `docker-compose` file is at.  
8. For this `Node.js` backend, the server needs to connect to MongoDB, so we can use `depends_on` and give the name of the service, which is `mongodb` in this case. 
9. This notice `docker-compose` that `backend` service is depending on `mongodb` service and needs to wait when `mongodb` is up and running.
10. After configuration, we can use `docker-compose up` to start the containers. 
11. Note that container (service) name is not the same as specified in the `yaml` file. For example, it can be added with the project name as prefix and assign with version of builds. 
12. However, we can still use the same service name such as `mongodb` in the `Node.js` backend application. 
13. Docker will resolve the networking issue as all the containers started by the same `docker-compose` will be the same. 
    ```yaml
    # docker-compose.yaml
    version: '3.8'

    services:
      mongodb:
        image: 'mongo'
        volumes:
          - data:/data/db
        # environment:
        # - MONGO_INITDB_ROOT_PASSWORD=secret
        # MONGO_INITDB_ROOT_USERNAME: root
        env_file:
          - ./.env
        # docker-compose add all containers in the services into the same network automatically
        # networks:
        #   - gaols-net
      backend:
        build: ./backend
        # build:
        #   context: ./backend
        #   dockerfile: Dockerfile # for different Dockerfile, such as Dockerfile-dev
        #   args: # used for ARG in Dockerfile
        #     key: value
        ports:
          - '80:80'
        volumes:
          - logs:/app/logs
          # can use relative path from where docker-compose.yaml is at
          # Not required to be listed in volumes
          - ./backend:/app # bind mount to local machine file for real-time code reflection.
          - /app/node_modules
        env_file:
          - ./backend.env
        depends_on:
          - mongodb

      # frontend:

    volumes:
      data:
      logs:
    ```
    ```js
    // backend app.js
    mongoose.connect(
      `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/course-goals?authSource=admin`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.error('FAILED TO CONNECT TO MONGODB');
          console.error(err);
        } else {
          console.log('CONNECTED TO MONGODB!!');
          app.listen(80);
        }
      }
    );
    ```

## 5.6. Adding Another Container
1. To run frontend container with `-it` flag which is the combination of input and terminal attaching flag, we can set `stdin_open` for and `tty` to `true`. 
    ```yaml
    # docker-compose
    version: '3.8'

    services:
      mongodb:
        image: 'mongo'
        volumes:
          - data:/data/db
        # environment:
        # - MONGO_INITDB_ROOT_PASSWORD=secret
        # MONGO_INITDB_ROOT_USERNAME: root
        env_file:
          - ./.env
        # docker-compose add all containers in the services into the same network automatically
        # networks:
        #   - gaols-net
      backend:
        build: ./backend
        # build:
        #   context: ./backend
        #   dockerfile: Dockerfile # for different Dockerfiles, such as Dockerfile-dev
        #   args: # used for ARG in Dockerfile
        #     key: value
        ports:
          - '80:80'
        volumes:
          - logs:/app/logs
          # Not required to be listed in volumes
          - ./backend:/app # bind mount to local machine file for real-time code reflection.
          - /app/node_modules
        env_file:
          - ./backend.env
        depends_on:
          - mongodb

      frontend:
        build: ./frontend
        ports:
          - '3000:3000'
        volumes:
          - ./frontend/src:/app/src
          - /app/node_modules
        stdin_open: true
        tty: true
        depends_on:
          - backend

    volumes:
      data:
      logs:
    ```

## 5.7. Building Images and Understanding Container Names
1. Besides regular `docker-compose up` to start up and `docker-compose down` to stop and removes all containers/services, we can have other options.
2. For example, we can add `--build` and run `docker-compose up --build` to force docker-compose rebuild all images rather than using the built ones. 
3. To only build the images without running the services, we can use `docker-compose build`.
4. Note that `docker-compose up` has included `docker-compose build` by default. 
5. We can also specify container name in `docker-compose` file. Note that the default container name is `[folder/project-name]_[service-name]_[incremental-number]`. 
    ```yaml
    # docker-compose
    version: '3.8'

    services:
      mongodb:
        image: 'mongo'
        volumes:
          - data:/data/db
        container_name: mongodb
        env_file:
          - ./.env
      backend:
        build: ./backend
        ports:
          - '80:80'
        volumes:
          - logs:/app/logs
          - ./backend:/app
          - /app/node_modules
        env_file:
          - ./backend.env
        depends_on:
          - mongodb
      frontend:
        build: ./frontend
        ports:
          - '3000:3000'
        volumes:
          - ./frontend/src:/app/src
          - /app/node_modules
        stdin_open: true
        tty: true
        depends_on:
          - backend
    volumes:
      data:
      logs:
    ```


# 6. Working with "Utility Containers" and Executing Commands In Container
## 6.1. Introduction and What are "Utility Containers"?
## 6.2. Utility Containers: Why would you use them?
1. In some cases that we don't have certain runtime, extensions, and tools such as `PHP` or `Node.js` install on the local machine, we can use Docker to leverage the developing experience.
2. For example, to run `npm` scripts and start a `Node.js` app, we need to install `Node.js` runtime. 
3. Besides, some dependencies may vary on different devices and OS. 

## 6.3. Different Ways of Running Commands in Containers
1. `docker run -it -d node` to start a `Node.js` runtime in a container.
2. `docker exec` allows the user to execute certain commands besides the default commands when using a container. 
3. Note that `exec` command needs the container name as an argument. When docker initiates a container, it always assign it a name though it's not specified.
4. Though we initiate the container in detached mode, we can use `docker container attach [container-name]` tough the container is started. 
5. To execute commands in a container, we can use `docker exec [container_name] [command]`. 
6. For example, in a `Node.js` runtime container, we can run `docker exec [container_name] npm init` to start a new project. 
7. However, the command stops interact immediately as we aren't attached to the container. 
8. When execute the commands, we can add `-it` flag as starting over a container to interact with the container in the command line.   

## 6.4. Building a First Utility Container
1. For a dev flow using Docker container, we can use a `alpine` version of `Node.js` which is much smaller than regular `Node.js` runtime.
    ```dockerfile
    # Dockerfile
    FROM node:14-alpine

    WORKDIR /app
    ```
2. Note that bind mounts are bi-directional file sharing mechanism it means that not only the bond files will reflect in the container, the changes in the container will also affect to local bond local directory. 
3. In this case, we can initiate the docker container with `docker run -it -v [absolute_path_to_bind]:/app node-util [custom_commands]`.
4. We can give commands after running the container.
5. In this case, we run `npm init -y` to start a project with `npm` and create `package.json`. 
6. To run the container in interactive mode and run by `docker-compose`, we can have the following settings. 
    ```yaml
    # docker-compose
    version: '3'

    services:
      node-utils:
        build: .
        volumes:
          - ./:/app
        stdin_open: true
        tty: true
    ```

# 6.5. Utilizing ENTRYPOINT
1. The utility container created is only available for `Node.js` or `npm` related commands, while we shall also be aware that the container is bond to local machine can affect files on local machine. 
2. Therefore, we need constraints for the commands that the container can run and take action. 
3. Any custom command given when initiating the container with `docker run` will overwrite `CMD` in `Dockerfile`.
4.  On the other hand, we can use `ENTRYPOINT` in `Dockerfile` rather than `CMD`.
5.  All the commands given after `docker run` will run after `ENTRYPOINT`. 
    ```dockerfile
    # Dockerfile
    FROM node:14-alpine

    WORKDIR /app

    ENTRYPOINT [ "npm" ]
    ```
6.  For the command above that we initiate a project with `npm init`, we now can only pass `init` to achieve the same action. 
    ```bash
    # build docker image
    docker build -t node-utils .

    # run docker container
    docker run -it -v [absolute_path_to_directory]:/app node-utils init
    ```

## 6.6. Using Docker Compose
1. We can create and use `docker-compose` to work with the arguments and settings to run a docker container. 
2. However, we cannot pass command as we do for a single docker service.
3. In this case, we can use `docker-compose run` and specify the service we want to pass the command.
    ```yaml
    # docker-compose
    version: '3'

    services:
      npm:
        build: .
        stdin_open: true
        tty: true
        container_name: node-utils
        volumes:
          - ./:/app
    ```
4. For example, `docker-compose run npm init -y` can do the same. However, we need to be aware that the `npm` here is the service name rather than using the command as `npm` itself. 
5. Besides, as we have set up `ENTRYPOINT` in `Dockerfile`, if we don't pass any command, the container will firstly run `npm`. 
6. In addition, `docker-compose run`, unlike `docker-compose up`, doesn't remove the container when it stops. 
7. In this case, we can add `--rm` flag as we run the container with `docker run`. 



# 7. A More Complex Setup: A Laravel and PHP Dockerized Project
## 7.1. The Target Setup
1. When developing `Node.js` apps, the runtime has included most of the dependencies to start up a server itself along with its package manager `npm`. 
2. However, when developing with `php` in `Laravel` framework, it requires much more setup and installs dependencies.
3. For example, we cannot start a web server with only `php` itself. We will need the server to host and serve the apps code with `php`. 
4. In this case, we will need several other services, such as 
   1. `nginx` to serve with `php` interpreter.
   2. `mysql` as its database. 
   3. Utility serviecs
      1. `Composer` - package manager
      2. `Laravel Artisan` - command line tool for `laravel` framework
      3. `npm` - used for some frontend logic

## 7.2. Adding a Nginx (Web Server) Container
1. To setup `nginx` container, we can use the official image `nginx`. 
2. As this project requires multiple services, we can use `docker-composer` to keep all services.
3. We use `nginx:stable-alpine` image for a minimum requirements to the server.
4. Besides, we can refer to [official docs](https://hub.docker.com/_/nginx) of the image to setup volumes for `nginx` server 
configuration. 
5. In addition, we give additional `:ro` flag for the bind mount as we don't want any code or action inside the container manipulate `nginx.conf` file for whatever reason. 
    ```yaml
    # docker-compose
    version: '3'

    services:
      server:
        image: 'nginx:stable-alpine'
        ports:
          - '8000:80'
        volumes:
          - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      # php:
      # mysql:
      # composer:
      # artisan:
      # npm:
    ```
6. In `nginx.conf` we set up the server to
   1.  listen to `80` for regular http requests;
   2.  serve files from `/var/www/html/public` on `root`; and 
   3.  set up [`location`](https://docs.nginx.com/nginx/admin-guide/web-server/web-server/#locations) to redirect users to

```conf
# /etc/nginx/nginx.conf
server {
    listen 80;
    index index.php index.html;
    server_name localhost;
    root /var/www/html/public;
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass php:3000;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
    }
}
```

## 7.3. Adding a PHP Container
1. Though docker provides official `php` image, we need to install more dependencies to work with `laravel`.
2. Therefore, we create a `Dockerfile` for setting up a custom `php` container with official `php` image.
3. We set up `WORKDIR` at `/var/www/html` as by referring the server configuration of `nginx`, we set the server root directory at `/var/www/html/public`. 
4. To install additional `php` extensions, we can use `docker-php-ext-install` suggested from [official docker `php` image](https://hub.docker.com/_/php).
5. We therefore give `RUN docker-php-ext-install pdo pdo_mysql` to install the required `php` extensions. 
6. Note that we do specify `CMD` or `ENTRYPOINT` in this dockerfile. 
7. If `CMD` or `ENTRYPOINT` is not specified, the container will run the default image command by itself. 
8. In this case, the `php` container will initiate the `php` interpreter. 
    ```dockerfile
    # php.dockerfile
    FROM php:7.4-fpm-alpine

    WORKDIR /var/www/html

    RUN docker-php-ext-install pdo pdo_mysql
    ```
9. In `docker-compose` file, we can setup `php` service.
10. To build the image, we can refer to the `php.dockerfile` in the project.
11. Besides, we need a bind mount to reflect `php` source code changes. 
12. In this case, we add `delegated` flag which is to let docker engine having changes from the container to local machine in batch and hence improve the performance. 
13. For the work port which `php` listens to, we can refer to its official docker image docs and notice that the internal exposed port is `9000`. 
14. At the time of learning, there's no `7.4` version hosted in the Github repository. However, by checking `Dockerfile` in any version, [`8.2-rc`](https://github.com/docker-library/php/blob/master/8.2-rc/alpine3.17/fpm/Dockerfile) for example, the container is set to `EXPOSE 9000`.
15. However, keep in mind that we actually don't require to interact with `php` container directly for `php` interpreter. 
16. Therefore, setting up to map port `3000:9000` according to the configuration in `nginx` doesn't help. 
    ```yaml
    # docker-compose
    version: '3'

    services:
      server:
        image: 'nginx:stable-alpine'
        ports:
          - '8000:80'
        volumes:
          - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      php:
        build:
          context: ./dockerfiles
          dockerfile: php.dockerfile
        volumes:
          - ./src:/var/www/html:delegated
        ports: # this is not required
          - 3000:9000
      # mysql:
      # composer:
      # artisan:
      # npm:
    ```
17. In the previous setup for `nginx.conf`, we actually connect the containers through `fastcgi_pass` in the settings. 
18. Note that `php` here is actually the service name we set up in `docker-compose`. 
    ```conf
    # /etc/nginx/nginx.conf
    server {
        listen 80;
        index index.php index.html;
        server_name localhost;
        root /var/www/html/public;
        location / {
            try_files $uri $uri/ /index.php?$query_string;
        }
        location ~ \.php$ {
            try_files $uri =404;
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            # php is the service name in docker-compose
            # it can be changed to other uri such as localhost
            fastcgi_pass php:3000; # this shall be port 9000 according to php official image
            fastcgi_index index.php;
            include fastcgi_params;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            fastcgi_param PATH_INFO $fastcgi_path_info;
        }
    }
    ```

## 7.4. Adding a MySQL Container
1. We can use `mysql:5.7` to start a `mysql` database container. 
2. According to [docker `mysql` image docs](https://hub.docker.com/_/mysql), we need several environment variables to set up the services. 
3. In this case, we can create `/env/mysql.env` to keep ENVs in the directory. 
4. By default, we can set `MYSQL_DATABASE` and `MYSQL_USER` to `homestead` according to default `laravel` settings.
    ```env
    MYSQL_DATABASE=homestead
    MYSQL_USER=homestead
    MYSQL_PASSWORD=secret
    MYSQL_ROOT_PASSWORD=secret
    ```
5. For `docker-compose`, we can refer to `mysql.env` to start up the container.
    ```yaml
    # docker-compose
    version: '3'

    services:
      server:
        image: 'nginx:stable-alpine'
        ports:
          - '8000:80'
        volumes:
          - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      php:
        build:
          context: ./dockerfiles
          dockerfile: php.dockerfile
        volumes:
          - ./src:/var/www/html:delegated
      mysql:
        image: 'mysql:5.7'
        env_file:
          - ./env/mysql.env
      # composer:
      # artisan:
      # npm:
    ```

## 7.5. Adding a Composer Utility Container
1. In this case, we create the other service for `composer` and use `composer:latest` image. 
2. The setup is relatively simple and we only need to point the working directory to `/var/www/html` as we will bind mount and copy the packages/dependencies to local machine. 
3. Besides, for every command in `composer` container, we can give an `ENTRYPOINT` with `composer` (similar to `npm`) and `--ignore-platform-reqs` flag to ignore any error requested by the platform of missing dependencies.
    ```dockerfile
    FROM composer:latest

    WORKDIR /var/www/html

    ENTRYPOINT [ "composer", "--ignore-platform-reqs" ]
    ```
4. In `docker-compose`, we can only need to build the image and bind the `WORKDIR` to the local machine. 
  ```yaml
  # docker-compose
    version: '3'

    services:
      server:
        image: 'nginx:stable-alpine'
        ports:
          - '8000:80'
        volumes:
          - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      php:
        build:
          context: ./dockerfiles
          dockerfile: php.dockerfile
        volumes:
          - ./src:/var/www/html:delegated
      mysql:
        image: 'mysql:5.7'
        env_file:
          - ./env/mysql.env
      composer:
        build:
          context: ./dockerfiles
          dockerfile: composer.dockerfile
        volumes:
          - ./src:/var/www/html
      # artisan:
      # npm:
  ```

## 7.6. Creating a Laravel App via the Composer Utility Container
1. To create a `laravel` project, we can use `composer` with `composer create-project laravel/laravel example-app` according to [https://laravel.com/docs/master/installation#your-first-laravel-project](https://laravel.com/docs/master/installation#your-first-laravel-project).
2. As we only need to create a `laravel` project with `composer` container, we can only run `composer` service with `docker-compose`. 
3. As we have set up `ENTRYPOINT` in `composer.dockerfile` we can simply pass `create-project laravel/laravel` without `composer` at the front.
4. Besides, we has pointed the working directory with `WORKDIR` at `/var/www/html`.
5. We can then give only `.` to create the `laravel` project and the files will be created in the working directory which is bond to local `/src` folder. 
6. Note that we also give `--rm` flag with `docker-compose` as to remove the `composer` service directly right after it finishes creating the project. 
    ```bash
    docker compose run --rm composer create-project --prefer-dist laravel/laravel .
    ```

## 7.7. Launching Only Some Docker Compose Services
1. After creating the `laravel` project, we can find `.env` in the `src` folder.
    ```bash
    # default laravel DB config 
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=laravel
    DB_USERNAME=root
    DB_PASSWORD=
    ```
2. We then can update the ENVs according to our services in `docker-compose`
    ```bash
    # updated laravel .env
    DB_CONNECTION=mysql
    DB_HOST=mysql # service name in docker-compose through docker network
    DB_PORT=3306
    DB_DATABASE=homestead
    DB_USERNAME=homestead
    DB_PASSWORD=secret
    ```
3. However, in the current setup, though `php` interpreter is linked to the source code in `src`, the `nginx` server doesn't know anything about that. 
4. Besides, all the traffic visiting the services will hit the `nginx` server first as it exposes its port at `80` which is for regular `http` service.
5. We therefore need to add a volume to `nginx` service.
6. In addition, the bind mount is pointing to the wrong `nginx.conf` in the container. 
    ```yaml
    version: '3.8'

    services:
      server:
        image: 'nginx:stable-alpine'
        ports:
          - '8000:80'
        volumes:
          - ./src:/var/www/html # new added volume to reflect php source code changes
          # incorrect bind mount
          # - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
          - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf:ro
      php:
        build:
          context: ./dockerfiles
          dockerfile: php.dockerfile
        volumes:
          - ./src:/var/www/html:delegated
      mysql:
        image: 'mysql:5.7'
        env_file:
          - ./env/mysql.env
      composer:
        build:
          context: ./dockerfiles
          dockerfile: composer.dockerfile
        volumes:
          - ./src:/var/www/html
      # artisan:
      # npm:
    ```
7. After all setups are ready, we can run `docker-compose up` again to start all services. 
8. However, we only need some of the services. For example, we don't require `composer` any more as we only use it to create a `laravel` project. 
9. When running `docker-compose`, we can specify the services to run. In this case, we can run `docker-compose up -d server php mysql`. 
10. However, the command to have all the services is very verbose. 
11. We can add `depends_on` for `nginx` service as to ensure the other services it depends on are started. 
12. We then can simply run only `server` service with `docker-compose up -d server php mysql` and the others will be started by `docker-compose`.
13. However, by default, `docker-compose` only build images of each services once. 
14. Therefore, any changes is not reflected as the images will be built only once and cached.
15. We can pass `--build` flag to ensure every time `docker-compose` start over the services, it will check if images should be rebuilt. 

## 7.8. Adding More Utility Containers
1. To run commands from `artisan`, we can reuse `php` image as `laravel` is based on `php`.
2. However, we'd like to add an `entrypoint` without modifying `php.dockerfile` as it's used by `php` service.
3. In `docker-compose`, we can add `entrypoint` on the same level as `build` and `volumes` of a service. 
4. Besides `artisan`, we can set up the service of `npm`. 
5. Note that we can put all the commands in `Dockerfile` in the `docker-compose` directly. 
6. In this case, we put `working_directory` which works as `WORKDIR`. 
7. Besides, we need the other bind mount as we will install `node_modules` in the `src` directory by `npm` service. 
```yaml
# docker-compose
version: '3.8'

services:
  server:
    image: 'nginx:stable-alpine'
    ports:
      - '8000:80'
    volumes:
      - ./src:/var/www/html
      - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      - php
      - mysql
  php:
    build:
      context: ./dockerfiles
      dockerfile: php.dockerfile
    volumes:
      - ./src:/var/www/html:delegated
  mysql:
    image: 'mysql:5.7'
    env_file:
      - ./env/mysql.env
  composer:
    build:
      context: ./dockerfiles
      dockerfile: composer.dockerfile
    volumes:
      - ./src:/var/www/html
  artisan:
    build:
      context: ./dockerfiles
      dockerfile: php.dockerfile
    volumes:
      - ./src:/var/www/html
    entrypoint: ['php', '/var/www/html/artisan']
  npm:
    image: node:14
    working_dir: /var/www/html
    entrypoint: ['npm']
    volumes:
      - ./src:/var/www/html
```
8. We can run `artisan` service with `docker-compose run --rm artisan migrate` that the service will write some data into the database and check if the current database settings works. 
9. However, we may have connection error when trying to run this `artisan` service. Thus, we will need to ensure
   1. All services from `docker-compose up -d --build server` are up and running.
   2. Ensure both `/envs/mysql.env` and `/src/.env` have the same credentials and right connections.
   3. `volumes` can be cleared up for a fresh start. 
   4. Turn down all services with `docker-compose down -v` to remove all containers and volumes created by the `docker-compose` service.
```bash
# /env/mysql.env
MYSQL_DATABASE=homestead
MYSQL_USER=homestead
MYSQL_PASSWORD=secret
MYSQL_ROOT_PASSWORD=secret

# /src/.env
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```
```bash
# commands to clear project artisan caches
docker-compose run --rm artisan cache:clear
docker-compose run --rm artisan config:cache
docker-compose run --rm artisan view:clear
docker-compose run --rm artisan route:clear
docker-compose run --rm artisan config:clear
```

## 7.9. Docker Compose with and without Dockerfiles
1. Though we can only have all instructions to run simple commands of a service in `docker-compose`, it doesn't support commands such as `run` and `copy`. 
2. Such action is only available in a dedicated `Dockerfile`.
3. Bind mounts are mostly used for development purpose. 
4. In general, all the required data and files will be packed and built into an image to be deployed and used.

## 7.10. Bind Mounts and COPY: When to Use What
1. To deploy the service and run in production, we can create a dedicated `Dockerfile` to keep the configuration.
    ```dockerfile
    # nginx.dockerfile
    FROM nginx:stable-alpine

    # where to put config file
    WORKDIR /etc/nginx/conf.d

    # copy config file from local machine
    COPY nginx/nginx.conf .

    # change name from nginx.conf to default.conf
    RUN mv nginx.conf default.conf

    # move to /var/www/html directory
    WORKDIR /var/www/html

    # copy all source code to the working directory
    COPY src .
    ```
2. To start `nginx` service, we can use its default commands to start the server without giving specific instructions.
3. We now can update the layers in `docker-compose` that how docker can start `server` service. 
4. In previous cases, we always uses `context` to specify where the `Dockerfile` is. 
5. However, this won't do the work in the current case, as we are trying to copy `nginx.conf` from `/nginx` on local machine. 
6. If we specify `context` as `./dockerfiles` as the other services, docker cannot reach to both `nginx/nginx.conf` and `src` directory. 
7. Therefore, for `server` service, we can set the `context` at `.` which is the current working directory where the `docker-compose` runs.
8. Besides, we don't need bind mounts for `server` service in production mode.
9. For the `php` container, we also need to copy the source code for it to run as we don't use bind mount to refer source code from local file system. 
  ```dockerfile
  # php.dockerfile
  FROM php:7.4-fpm-alpine

  WORKDIR /var/www/html

  # copy source code from working directory when building image
  COPY src .

  RUN docker-php-ext-install pdo pdo_mysql
  ```
10. We then can update `docker-compose`. For the main services, such as `server` and `php`, we can remove volumes as all the source code are copied built in the docker image.
    ```yaml
    # docker-compose
    version: '3.8'

    services:
      server:
        # image: 'nginx:stable-alpine'
        build: 
          context: .
          dockerfile: dockerfiles/nginx.dockerfile
        ports:
          - '8000:80'
        # volumes:
        #   - ./src:/var/www/html
        #   - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf:ro
        depends_on:
          - php
          - mysql
      php:
        build:
          context: .
          dockerfile: dockerfiles/php.dockerfile
        # volumes:
        #   - ./src:/var/www/html:delegated
      mysql:
        image: 'mysql:5.7'
        env_file:
          - ./env/mysql.env    
      composer:
        build:
          context: ./dockerfiles
          dockerfile: composer.dockerfile
        volumes:
          - ./src:/var/www/html
      artisan:
        build:
          context: ./dockerfiles
          dockerfile: php.dockerfile
        volumes:
          - ./src:/var/www/html
        entrypoint: ['php', '/var/www/html/artisan']
      npm:
        image: node:14
        working_dir: /var/www/html
        entrypoint: ['npm']
        volumes:
          - ./src:/var/www/html
    ```
11. However, the current build doesn't success as we visit `http://localhost:8000` because the `php` container doesn't have write access to its own file system.
12. In this case, we can add `RUN chown -R www-data:www-data /var/www/html` in `php.dockerfile` to change owner and give write access to `www-data` which is a default user created when starting up `php:7.4-fpm-alpine` image.
    ```dockerfile
    # php.dockerfile
    FROM php:7.4-fpm-alpine

    WORKDIR /var/www/html

    COPY src .

    RUN docker-php-ext-install pdo pdo_mysql

    RUN chown -R www-data:www-data /var/www/html
    ```

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