# Docker images

## Base image: Start with a FROM instruction
FROM <image_name>[:<tag>]  # e.g., FROM node:18, FROM python:3.9-slim

## Maintainer (optional)
MAINTAINER <your_name> <your_email>

## Working directory inside the container
WORKDIR /app  # All subsequent commands will be executed in this directory

## Copy files from host to container
COPY <source> <destination>  # e.g., COPY package*.json ./, COPY . .

## Run commands inside the container (during image build)
RUN <command>  # e.g., RUN npm install, RUN apt-get update && apt-get install -y <package>

## Expose ports (so they can be mapped when running the container)
EXPOSE <port>  # e.g., EXPOSE 3000

## Set environment variables
ENV <VARIABLE> <value>  # e.g., ENV NODE_ENV production

## Define the command to run when the container starts
CMD ["executable", "param1", "param2"]  # Preferred (JSON array format)
## OR
CMD <command>  # Shell format (less preferred)  e.g., CMD node index.js

## User (optional)
USER <username> or <uid>:<gid> # Switch to a non-root user

## Arguments (can be set at build time)
ARG <variable>
# Example usage with ARG
ARG VERSION=latest
FROM ubuntu:${VERSION}

## Labels (metadata for your image)
LABEL version="1.0" description="My awesome app"

## Volumes (for data persistence)
VOLUME ["/data"] # Create a mount point for persistent storage

## Healthcheck (for container health monitoring)
HEALTHCHECK --interval=30s --timeout=10s --retries=5 CMD curl -fs http://localhost:3000/health || exit 1

## ONBUILD (instructions that will be executed when the image is used as a base image)
ONBUILD RUN echo "This will run when someone builds an image FROM this image"

## SHELL (overrides the default shell used for RUN, CMD, etc.)
SHELL ["/bin/bash", "-c"] # Useful for more complex commands