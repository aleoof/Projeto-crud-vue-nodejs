const express = require("express")

const router = express.Router()

const user = require('../model/Users').prototype

router.get('/users', (req, res) => user.getUsers(res))

router.post('/user', (req, res) => {
    user.postUser(req, res)
})

router.put('/user/:id', (req, res) => user.updateUser(req, res))

router.put('/user/:id/password', (req, res) => user.updateUserPassword(req, res))

router.delete('/user/:id', (req, res) => user.deleteUser(req, res))

router.post('/login', (req, res) => {
    user.login(req, res) 
})

module.exports = router