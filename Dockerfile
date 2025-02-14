# Use Node.js official image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the application port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
