# Note Blogger

This is a Note Blogger web app. This is a simple Node.js project that demonstrates the structure and practices used to deliver an efficient node.js program. It includes basic setup, dependencies, and configuration to get you started with your project.

## Features

- **Mongoose**: Database connection to MongoDB.
- **Express**: Basic HTTP server setup.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v22)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use MongoDB Atlas for cloud)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OltVr/Note-Blogging-Node-WebApp.git
   cd Note-Blogging-Node-WebApp
   ```
2. Then execute:
   ```bash
   npm install
   ```
3. And then run
   
   ```bash
   node app.js
   ```
The app will start on port 3000 by default unless otherwise specified in the environment variable `PORT`.

Also you need to have the mongodb running in the background.


## Starting the app with Docker

To start the app with docker run:

```bash
docker run oltvr/node-app
```

