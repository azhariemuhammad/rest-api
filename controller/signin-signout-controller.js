const Models = require('../models')
//const User = Models
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.SECRET_KEY



const signin = (req, res) => {
  Models.User.findOne({where:{username:req.body.username}})
  .then(user => {
    if(user){
      bcrypt.compare(req.body.password, user.password).then(result => {
        if(result){
          jwt.sign(
          {
            id : user.id,
            username : user.username,
            isAdmin : user.isAdmin
          }, secret, (err, token) => {
            if(err){
              console.log(err);
            }else{
              res.send(token)
            }
          })
        }else{
          res.send('check again your password or username')
        }
      })
    }else{
      console.log('error');
    }
  })
}

const signup = (req, res) => {
  Models.User.create({
    username : req.body.username,
    password : req.body.password
  })
  .then(dataUser => {
    res.send(dataUser)
  })
  .catch(err => {
    console.log(err);
  })
}


module.exports = {
  signin,
  signup
};
