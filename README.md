# Key concepts

Docker helps package your full-stack application (frontend + backend + database) into containers so it runs consistently across different environments.

Key Concepts

- Containers – Lightweight, portable environments for running applications.
- Images – Blueprints for containers (e.g., a Node.js or Java Spring Boot app).
- Dockerfile – A script that defines how to build a Docker image.
- Docker Compose – A tool for managing multi-container applications (e.g., backend + database).
- Volumes – Persistent storage for databases and logs.
- Networking – Communication between containers (e.g., linking frontend and backend).


# Docker Image V.S. V.S. Docker registery V.S. Docker Container

- A **Docker image** is a **read-only** blueprint for creating containers. It contains all the libraries and source code that all make up your application.

- A **Docker registry** is a **storage and distribution system** for Docker images. It allows images to be pushed (uploaded) and pulled (downloaded). Popular registries include: Docker Hub (public), Amazon ECR (AWS), Google Container Registry (GCR) and Private Docker registries (self-hosted)

- A **Docker Container** is an instance of that image running as a process. You can have many running same docker image

- Docker's default image "registry" is called Docker Hub

# network concepts

A **virtual network** is a network where all devices, servers, virtual machines, and data centers that are connected are done so through software and wireless technology.

# Docker container command

    # general syntax for docker container run
    
    docker container run [OPTIONS] IMAGE [COMMAND] [ARG...]
    
    Common docker run Options
    Option	                            Description

    --name my-container	                Assigns a custom name to the container.
    -d	                                  Runs the container in detached mode (in the background).
    -p 8080:80	                         Maps port 80 in the container to port 8080 on the host.
    -v /host/path:/container/path	       Mounts a volume from the host to the container.
    -e ENV_VAR=value	                   Sets an environment variable inside the container.
    --rm	                               Removes the container automatically when it stops.
    --network my-network	                Connects the container to a specific Docker network.

    # create and basic command

    - docker container run --publish 80:80 nginx : 
    1) Downloading image 'nginx' from Docker Hub 
    2) started a new container from that image
    3) opened port 80 on the host IP(left: host on port)
    4) Routes that traffic to the container IP, port 80(right: listening on port)
    5) and it is running in foreground(ข้างหน้า) inside command line

    - docker container run --name my-nginx -p 80:80 -d nginx:
    basiclly same as above but running in the background instead of foreground
    quick note: nginx - Specifies the Nginx Docker image (defaults to the latest version from Docker Hub).

    - stop docker contatiner : docker container stop <container id/name>. ex: docker container stop 3df9.

    - list all docker container we have: docker container ls -a.
    - list all running docker container we have: docker container ls.
    
    - get log(activities) from docker container: docker container logs <container name>. ex: docker container logs abc.

    - remove docker container(you can't delete docker container that are currently running): docker container rm <container name>. ex: docker container rm 3df9 61e9.

    # Process and Monitoring
    
    - docker container top <container name>: process list in one container.

    - docker container inspect <container name>: details of one container config.

    - docker container stats: performance stats for all containers.

    # get in container

    - docker container run -it --name ubuntu1 ubuntu : create container and making command access by ubuntu

    - docker container start -ai <container name> : access that container. only work if the container's default command is interactive (e.g., bash, sh)

    - docker container exec -it <container name> <program you want to run such as ubuntu, bash> : run a command inside an already running container

    # network

    - docker container run -d --name new_nginx --network <my network> nginx : create container with specific network
    
    - docker network ls

    - docker network inspect <Network Name>
    
    - docker network connect <Network ID you want to connect> <container Id you want to connect>: (e.x.)docker network connect 1f52b343ee2e 8c13cb73512b
    
    - docker network disconnect <Network ID you want to disconnect> <container Id you want to disconnect>: (e.x.)docker network disconnect 1f52b343ee2e 8c13cb73512b

# what happens in the backgroud when we run 'docker container run'

![alt text](<Screenshot (157).png>)

# Docker images

    - docker pull <image_name>[:<tag>]: Downloads an image from a registry (like Docker Hub). Essential for getting base images (e.g., node, python, postgres) or pre-built services. Always specify a tag (e.g., node:18, postgres:15) for reproducibility.   
    
    - docker images: Lists all locally stored images. Useful for seeing what you have and managing disk space.   
    
    - docker rmi <image_id_or_name>[:<tag>]: Removes a local image. Use docker images to find the ID or name. Be careful, this is permanent! Use -f (force) if necessary, but understand the implications.   
    
    - docker build -t <image_name>[:<tag>] <path_to_Dockerfile>: Builds a Docker image from a Dockerfile. The core command for creating your application's image. The -t option tags the image. The path is usually ., meaning the current directory.
    
    - docker tag <image_id_or_name>[:<tag>] <new_image_name>[:<new_tag>]: Adds a new tag to an existing image. Useful for versioning or pushing to different registries.   
    
    - docker push <image_name>[:<tag>]: Uploads an image to a registry (like Docker Hub, your private registry, or cloud provider registry). Essential for deploying your images.

