# rest-api
Demo app with basic REST API

## What is it
RESTful API.RESTful API / REST API merupakan implementasi dari API (Application Programming Interface). REST (Representional State Transfer) adalah suatu arsitektur metode komunikasi yang menggunakan protokol HTTP untuk pertukaran data dan metode ini sering diterapkan dalam pengembangan aplikasi. Dimana tujuannya adalah untuk menjadikan sistem yang memiliki performa yang baik, cepat dan mudah untuk di kembangkan (scale) terutama dalam pertukaran dan komunikasi data.


#### Route |   HTTP  |     Desc
--------------------|------------------|------------------|
/api/hello?name={name} | GET | Print Hello, {name}

### list of routes

### Route |   HTTP  |     Desc
--------------------|------------------|------------------|
/api/signup    | POST   | Sign up with new user info
/api/signin    | POST   | Sign in while get an access token based on credential
/api/users     | GET    | Get all the users info (admin only)
/api/users/:id | GET    | Get a single user info (admin and authenticated user)
/api/users     | POST   | Create a user (admin only)
/api/users/:id | DELETE | Delete a user (admin only)
/api/users/:id | PUT    | Update a user with new info (admin adn authenticated user)


### list of filter routes:

### Route |   HTTP  |     Desc
--------------------|------------------|------------------|
/api/users?name="{name}" | GET | Get {name} match in users
/api/users/?name="{na}" | GET | Get {na} like in users

## USAGE
### With only npm:
    npm install
    npm start
    npm run dev
Acces the website via http://localhost:3000 or API via
http://localhost:3000/api
