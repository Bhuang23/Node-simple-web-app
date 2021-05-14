# About this backend service
The backend service has two main functions:

* Defines schema models for the mongodb database.
* Defines Restful APIs in router/controller/service structure that respond to http requests from front-end and communicate with Mongodb server.

# Getting Started with node server

### Install Node
##### Install Node.js and npm from https://nodejs.org
### Install Mongodb Community Server
##### Download and Install Mongodb Community Server from https://www.mongodb.com/try/download/community
##### Set up Mongodb Community Server at localhost:27017 and create a database called database with two collection called users and items.

### Clone node project
git clone https://github.com/Bhuang23/ecommerce-node-web-app.git
go to where the directory where ecommerce-node-web-app is at 

### Install dependencies
##### npm install mongoose express cors body-parser
##### npm install nodemon --save-dev

## How to run project
### `nodemon server.js`

starts the Nodemon server at port 4000
