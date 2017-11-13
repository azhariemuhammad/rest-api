const Models = require('../models')




const findAll =   (req, res) => {
  Models.User.findAll().then(dataUsers => {
    res.send(dataUsers)
  })
  .catch(err => {
    console.log(err);
  })
}


module.exports = {
  findAll
}
