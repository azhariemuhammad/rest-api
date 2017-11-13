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
/api/users | GET | Get all the userss
/api/users/:id | GET | Get a single user
/api/users/ | POST | Create a user
/api/users/:id | DELETE | Delete a user
/api/users/:id | PUT | Update a user with new info
/api/users/:id | PATCH | Update a user with specific new info

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
