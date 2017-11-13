const Models = require('../models')




const findAll =   (req, res) => {
  Models.User.findAll().then(dataUsers => {
    res.send(dataUsers)
  })
  .catch(err => {
    console.log(err);
  })
}

const create = (req, res) => {
  Models.User.create({
    username: req.body.username,
    password : req.body.password,
    isAdmin : req.body.isAdmin
  })
  .then((dataUser) => {
    res.send(dataUser)
  }).catch(err => {
    console.log(err);
  })
}

const findById = (req, res) => {
  Models.User.findById(req.params.id)
  .then(dataUser => {
    res.send(dataUser)
  }).catch(err => {
    res.status(404).send('unknown user')
    console.log(err);
  })
}

const update = (req, res) => {
  Models.User.update({
    username : req.body.username,
    password : req.body.password,
    isAdmin : req.body.isAdmin
  },{
    where:{id:req.params.id}
  }).then(dataUser => {
    res.send(dataUser)
  }).catch(err => {
    console.log(err);
  })
}

const destroy = (req, res) => {
  Models.User.destroy({
    where:{id:req.params.id}
  }).then(() => {
    res.send('succes delete')
  }).catch(err => {
    console.log(err);
  })
}



module.exports = {
  findAll,
  create,
  findById,
  update,
  destroy
}
