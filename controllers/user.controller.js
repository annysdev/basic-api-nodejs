const { response } = require('express');

const getUser = (req, res = response) => {

  res.json({
    msg: 'get API - Controller',
  })
}

const putUser = (req, res) => {

  const id = req.params.id; //prams.id es el id que se le pasa en la ruta

  res.json({
    msg: 'put API - Controller'
  })
}

const postUser = (req, res) => {

  const { name, email } = req.body;

  res.json({
    msg: 'post API - Controller',
    name,
    email,
  })
}

const deleteUser = (req, res) => {
  res.json({
    msg: 'delete API - Controller'
  })
}

module.exports = {
  getUser,
  putUser,
  postUser,
  deleteUser
}