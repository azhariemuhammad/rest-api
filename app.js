const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
//require('dotenv').config()


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'))
// app.use(session({
//   secret: 'jossgandosgraotos'
// }))

//
// app.get('/', function(req, res){
//   res.send('hello world');
// });



const api = require('./routes/api-users')
app.use('/api', api )

app.listen(3000);
