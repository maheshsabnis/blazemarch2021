# Using Docker with Node.js for Creating Microservices

1. Install Docker Desktop on the machine by downloading it from
    - docker.io
2. Please register Docker Hub for pushing your images so that they can be available to your customers or can be used by Kubernetes cluster to use the image as Microservice
    - https://hub.docker.com
    Note: Organizations can use the Private Repository for distributing their images to their  customers in private using Docker Images Repositories from following providers
        - GitLab
        - Azure Container Registry (ACR), by Microsoft Azure
        - Elecstic Contariner Registry (ECR), by AWS

3. To create a docker image for the application we need 'Dockerfile' in the project
    - This file contains all configurations for defining virtualization for your application as follows
        - Application Server aka Application Runtime Image (Mandatory)
            - e.g. Node.js, ASP.NET Core, JAVA, etc. NOTE: Most of the images are linux images
        - Configure ENV configuration that must be present on the image 
            - This is very important if the image is connecting cloud resources as follows to authenticate the application running inside the image to access follwoing resource 
                - Azure SQL
                - MySQL on Azure
                - MySQL on RDS of AWS
                - DynamoDB on AWS    
        - Create a WORKDIR on image where the application files will be copied (Mandatory)
        - Copy important confguration files of your application om image
            - package.json
        - Perform the Command execution inside the Image to configure the Runtime to execute your application inside the image (Mandatory)
            - e.g. RUN npm install inside the image     
        - Copy all source files or build files inside the image thse will be copied in the work directory   (Mandatory)
        - Since the Image is accessible over HTTP expose a port from image (Mandatory)
        - Inside the image run the command to execute the application
            - e.g. node service.js OR npm start         
    - If you want to configure and create multiple images for multiple applications at a time and relate them together then the 'docker-compose.yaml' file is needed
        - On Premises Microservices            

4. Understand Docker Commnds (Run these commands form Command Prompt / Terminal window) (for Node.js + Express Apps for our training), please read other commands from https://docs.docker.com/engine/reference/commandline/docker/

    - To build the docker image
        - docker build . -t <IMAGE-NAME>:<TAG>
            - run this command from the path where dockerfile exist
            - . mean the current path on which the dockerfile is available
                - check the file and vaklidate it        
            - -t is the switch for tagging the image (aka version)
                - the IMAGE-NAME, must be lowercase
            - TAG, is the version number or string that represent the identification or version of the image
            - If the image is to be published on the repository (hub, ACR, ECR, etc), then the 'IMAGE-NAME' must be as follows, other wise it won't by pushed to repository
                - <REPOSITORY-NAME>/<IMAGE-NAME>:<TAG>   

    - docker images
        - To list  all images
    - docker ps
        - To list all containers
    - docker ps -a
        - To list all containers those are currently in use and running
    - docker tag <IMAGE-NAME>:<OLD-TAG> <IMAGE-NAME>:<NEW-TAG>
        - To tag the image with new tag
    - docker stop <CONTAINER-ID | CONTAINER-NAME>
        - to stop the container and hence stop the image
    - docker start  <CONTAINER-ID | CONTAINER-NAME>
        - to start the container    
    - docker rm <CONTAINER-ID | CONTAINER-NAME>
        - to remove or delete the container
            - Container MUST be empty means no image should present in it
            - Container MUST ne stopped before deleting
    - docker rmi <IMAGE-ID | IMAGE-NAME:TAG>
        - remove or delete the image
        - the container for the image must be removed      
    - To push docker image to docker hub repository, following commands are used
        - login on the repository
            - docker login 
                - enter user name
                - enter pssword
        - tag the image to be pushed with repository user name (Mandatory if not followed the access denied error will occur)
            - docker tag <LOCAL-IMAGE-TO-BE-PUSHED>:<TAG> <REPOSITORY-USER-NAME>/<IMAGE-NAME>:<TAG>
        - Push the image
            - docker push  <REPOSITORY-USER-NAME>/<IMAGE-NAME>:<TAG>    
    - to pull the image from the respository
        - Login on repository
        - docker pull <REPOSITORY-USER-NAME>/<IMAGE-NAME>:<TAG>                
    - Running a Single image
        - docker run -it -v <WORK-DIR-FOR-APP> -v <APPLICATION-DEPENDENCIES-PATH> <LOCAL-MACHINE-PORT>:<PORT-EXPOSED-FROM-DOCKER-CONTAINER> -rm <IMAGE-NAME>:<TAG>  
            - PORT-EXPOSED-FROM-DOCKER-CONTAINER
                - mentioned in dockerfile
            - WORK-DIR-FOR-APP
                - mentioned in dockerfile     
            - APPLICATION-DEPENDENCIES-PATH
                - Generally, this is required on Node Applciations 
        - e.g.
            docker run -it -v :/usr/src/app -v /usr/src/app/node_modules -p 6001:6001 --rm myimage:0.0.1   
5. If used the docker-compose.yaml file
    - use the following commad to run all images mentioned in compose file
        - docker-compose start
    - To stop all containers and hence images run the following command
        - docker-compose stop                 
    - Some samples
        https://docs.docker.com/compose/gettingstarted/             


