# REACT FRONT AND BACKEND STARTER

- React, Node, Express, MongoDB, Mongoose, Postman

#### Setup API backend

- `npm init` in the root directory
- Personal preference replace index.js with server.js
- `npm i express` and create server.js in backend folder and data/product.js

#### Create server.js and ENV variables

- install `npm i dotenv` and import and configure it in server.js
- Create .env file which stores sensitive info (password, access, ports, keys, secrets) that you don't want to make public. Also make sure this file is in .gitignore
- Restart after you make updates to ENV file
- Test simple server request with a console.log request
- Everything you make a change on the server, you did to restart BOTH the server and browser. Workaround is to use nodemon to listen for changes and you just need to refres the browser `npm i -D nodemon" as a devDependency
- Another npm package devDependency concurrently can be use to run both the front and backend app in one script `npm i -D concurrently`
- More info on concurrently can be found in Section 3 Traversy Media

#### Create products and singleProduct routes

- Make two get requests for get the products list and single product

- Add Error Handling, Add MongoDB and Mongoose?
