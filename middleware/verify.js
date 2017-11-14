const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.SECRET_KEY

const isLogin = (req, res, next) => {
  jwt.verify(req.headers.token, secret, function(err, decoded){
    if(err){
      res.status(403).send('Please Login')
    }else{
      req.headers.decoded = decoded
      next()
    }
  })
}


const isAdmin = (req, res, next) => {
  if(req.headers.decoded.isAdmin){
    next()
  } else {
    res.status(401).send(`you can't access this page`)
  }
}

const isOwner = (req, res, next) => {
  let admin = req.headers.decoded.isAdmin
  if(req.headers.decoded.id === req.params.id || admin === true){
    next()
  }else{
    res.status(401).send(`you're not allowed`)
  }
}



module.exports = {
  isLogin,
  isAdmin,
  isOwner
};
