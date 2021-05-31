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

## Usage

2 Rest Apis are created on express server


a. POST /email/add - Adds the passed on email to cloud mongodb atlas server

b. GET  /email - Sends back all registered emails as json response



## Deployment
The project is deployed on heroku [here](https://emailsubanon.herokuapp.com/)
