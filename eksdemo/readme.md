# Working with EKS
1. Downlaod and install Docker with Kunernetes
    - docker env. for creating images
    - kubectl, the Kubernetes CLI
        - used to deploy the App on EKS based on
            - Deployment Configuration
                - Image Configuration
                - CPU Config
                - Memory Config
            - Service Configuration (dependanat on the Deployment Configuration)
                - The Load Balancer    
2. The AWS CLI for Authenticaing the your machine w.r.t. the AWS with
    - ACCESS_KEY_ID
    - ACCESS_SECRET_KEY
    - REGION
    - FROMAT
3. Download the 'eksctl' tool
    - used top create the EKS Cluster
    - https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html    
4. Must have AWS IAM user Role
    - This will authenticate the Kubernetes Cluster (EKS) against the Elastic Container Registry (ECR)  
5. Create the ECR
    - create the docker image
        - docker build . -t eksdemo:v1
    - create a ECR using the following command
        aws ecr create-repository \
            --repository-name <REPOSITORY-NAME> \
            --image-scanning-configuration scanOnPush=true \
            --region <REGION>    
    - e.g.
         aws ecr create-repository --repository-name eksdemoecr --region us-east-2
        - repository will be created as follows
            - <AWS-USER-ID>.dkr.ecr.us-east-2.amazonaws.com/eksdemoecr           
    - Login on the ECR so that the docker image can be pushed on it
         aws ecr get-login-password --region <REGIONNAME> | docker login --username AWS --password-stdin <AWS-LOGIN-ID>.dkr.ecr.<REGION-NAME>.amazonaws.com/<REPOSITORY-NAME>
        - e.g.
         aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin <AWS-USER-ID>.dkr.ecr.us-east-2.amazonaws.com/eksdemoecr
            - if everything is fine the followinf message will occur
                - Login Succeeded
            - if no login then make sure that you have fiollowing
                - run aws cli command for configuration
                     aws  configure
                        - enter access key , secret, ect.
    - Tag the local docker image with the ECR name
        docker tag <LOCAL-IMAGE>:<TAG> <AWS-USER-ID>.dkr.ecr.us-east-2.amazonaws.com/<REPOSITORY-NAME:<TAG>

        - push the new tagged image to ECR
            docker push <AWS-USER-ID>.dkr.ecr.us-east-2.amazonaws.com/<REPOSITORY-NAME:<TAG>
6. Create a  EKS Cluster
    - The cluster will contain multiple nodes
    - Specify the Subnet for the cluster to use for communicaiton
        - Subnet, is the range os IPs used by cluster for private and public communication
            - Private for internal communication
            - Public for external communication
        - The EKS needs at leas two Availability Zones 
            - Availability Zones
                - These is a fallback arrangement so that is one region / data center is down then the requests will be processed by the fal;back one
            - Across the Availability Sets we need Public and Provate subnet
                - E.g. Web app will be accessibly externally ober public subnit and this will access database over private subnet internally
        - To create a cluster using AWS Portal we nned the IAM Role with permission for EKS CLuster
        - Alternatively use the CloudFormation Dashboard to create a Stack and  create a EKS Cluster using Template
            - https://amazon-eks.s3.us-west-2.amazonaws.com/cloudformation/2020-06-10/amazon-eks-vpc-private-subnets.yaml
            - Go to the CloudFormation and create a new stack, in this window in 'Amazon S3 URL' enter the above yaml path
            - This yaml already contains configurations for the Public and Private Subnets
            - The stack will provide the confioguration for Public Subnets as 192.168.0.0/18  and 192.168.64.0/18
            - private subnets will be 192.168.128.0/18 and 192.168.192.0/18
        - Once this stack is ready we will receive the 3 ouputs
            - SecurityGroups
                - Security Connections for VPC
            - SubnetIds
                - Subnets Ids used by Cluster
            - VPCId
                - Id of VPS created for the cluster
    - create a yaml/json file for cluster definition that uses the Subnets adn VPC created in stack                  
    - The sample cluster.json file, which will be used for cluster creation
``` javascript
apiVersion: eksctl.io/v1alpha5 // version
kind: ClusterConfig // kind: the reason for which the file created, ClusterConfig, means created for EKS cluster creation
metadata:
  name: EKS-node-Cluster // cluster name
  region: us-east-2 // region where the cluster is available

vpc:
  id: vpc-0b2aa80685388363b  // VPM id received from stack of CloudFormation
  cidr: "192.168.0.0/16" // CIDR address ranges
  subnets: // public and private subntes for the internal and external communications
    public:
      us-east-2a: // 
        id: subnet-054764f2c7f985576
      us-east-2b:
        id: subnet-057d18e87cad6e817
    private:
      us-east-2a:
        id: subnet-03a4dc3aa70e14cc2
      us-east-2b:
        id: subnet-05f4fb012f4838996

nodeGroups: // confoguration for the nodes (VMs) where yhe app will be deployed
  - name: EKS-public-workers  // node name
    instanceType: t2.medium // the category of VM
    desiredCapacity: 2 // take 2 VMs
  - name: EKS-private-workers
    instanceType: t2.medium
    desiredCapacity: 1 // take 1
    privateNetworking: true
```

    - create the cluster using eksctl tool by using the cluster.json file and configuring this file on your machine 
        - if windows then c:\users\{user}\.kube\config
        - for mac ~/.kube/config
        - The command is
            eksctl create cluster -f cluster.json --kubeconfig=<PATH-FOR-CONFOGURATION-FOR-THE-OS>

        -e.g
             eksctl create cluster -f cluster.json --kubeconfig=c:\users\{user}\.kube\config

            eksctl create cluster -f cluster.json --kubeconfig=~/.kube/config

    - the cluster will be creayed with nodes this takes time in minutes    

    - Once the commd complete run the fllowinfg command to check if the cluster is created
         kubectl get svc
    - generally this command is executed successfully
    - sometimes its generates error for configuration, because the 
        configuration write failed in cluster
        - the error may be as follows
         - Unable to connect to the server: dial tcp: lookup 8189B04A666FE2962EDCE79097AC75C4.gr7.us-east-2.eks.amazonaws.com on 192.168.1.254:53: no such host

        - run the following command to resolve the configuration issues
            aws eks --region <NAME> update-kubeconfig --name <CLUSTER-NAME -FROM-JSON-FILE>   

7. Create a Deployment Manifest for the Service
    - define the service configuration with image and port
    - provide the name of the file is 'deployment.yaml'
    - apply the file in deployment as
         kubectl apply -f deployment.yaml
    - get deployments
        kubectl get deployments
8. Create a Service COnfoguration file in Cluster in POD
    - name this file as  service.yaml
        - define the service type, e.g. NodeApp / NodeType
        - ports
            - Public Communication Port
                - used to access the service
                - nodePort
            - container port
                - targetPort                
            - Private port
                - port    
``` javascript
apiVersion: apps/v1
kind: Deployment
metadata:
  name: eks-demo // name of teh deployment
  namespace: default
spec:
  replicas: 2 // 2 pods
  selector:
    matchLabels:
      app: web // name of the applciation
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: eks-node // container name
          image: 472804039072.dkr.ecr.us-east-2.amazonaws.com/eksdemoecr:latest // image will be pulled from ECR
          ports:
            - containerPort: 6002 // the container port exposed
``` 
    - aove command will create 2 PODS which we can see using the folliewing command
        kubectl get deployments
    - apply this file for configiuration
        kubectl apply -f service.yaml

    - get services deployed
        kubectl get services
``` javascript
apiVersion: v1
kind: Service
metadata:
  name: backend-service  // name of the service
spec:
  type: NodePort service type
  selector:
    app: web
  ports:
    - nodePort: 31479 // public communication port
      port: 8080 // private 
      targetPort: 6002 // container port
```

    - to access the applciation deployed on PODs first check pods  whcih will provde internal and external IP addresses and Ports for the communication
        kubectl get pods -o wide
    - to get services on thse pods run the following command
        kucectl get services     
    - to get the external IP address of the service with port run the following command
        kubectl get nodes -o wide
    - to access the service from nodePort, add this port in the security group for input connection    

- The screen shot in the project shows 2 nodes with exzternal IP, these are the public accessible External IPs. The one which does not show the Externa IP is private node
    - in the subnet for the node add the value for nodePort from the service.yaml so that it can be accessed  
- Possible errod for the 'kubectl get pods' command will be
    - ErrorPullImage
    - CrahsLoopback
    - Rollback
    - then make sure that the image is created properly  