# Installation guide

After cloning the app into your folder, add a .env file and paste the content. (The content will be sent over mail)

## Installation

Use the package manager npm to install server and client packages.

Inside root directory - 
```bash
npm install
```
After this

```bash
cd client
npm install
```

## Starting the app

After installing both sides packages you can either run 

1.both servers differently

Inside the root directory - 
```bash
nodemon server.js
```

Open new terminal tab - 
Inside root directory
```bash
cd client
npm start
```

OR 

2. both servers at same time

Inside root directory - 
```bash
npm run dev
```


## Usage

2 Rest Apis are created on express server


a. POST /email/add - Adds the passed on email to cloud mongodb atlas server

b. GET  /email - Sends back all registered emails as json response. To test this locally, you can generate get request to this url - http://localhost:5000/email



## Deployment
The project is deployed on heroku [here](https://emailsubanon.herokuapp.com/)
