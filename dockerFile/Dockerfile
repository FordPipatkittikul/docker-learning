# Use the official Node.js image
FROM node:20.11.0

# Set the working directory
WORKDIR /server

# Copy the app's package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the app
CMD ["node", "app.js"]