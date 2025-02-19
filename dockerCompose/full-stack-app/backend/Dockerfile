# Use the official Node.js image
FROM node:20.11.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5000 (or whatever port your backend uses)
EXPOSE 5000


# Start the application
CMD ["node", "server.js"]