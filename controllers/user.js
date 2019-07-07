
const express = require('express')


const userApi = require('../models/user.js')



const userRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

//shouldn't need view all user routre
userRouter.get('/', (req, res) => {
  userApi.getAllUsers()
    .then((users) => {
      res.render('users/users', {users})

    })
    .catch((err) => {
      res.send(err)
    })
})

userRouter.post('/', (req, res) => {
  userApi.addNewUser(req.body)
    .then(() => {
      res.redirect("/users")
    })
    .catch((err) => {
      res.send(err)
    })
})

userRouter.get('/new', (req, res) => {
  res.render("users/newUserForm")
})



userRouter.get('/:userId/edit', (req, res) => {
  userApi.getUser(req.params.userId)
    .then((user) => {
      res.render('users/editUserForm', {user})
    })
})

userRouter.get('/:userId', (req, res) => {
  userApi.getUser(req.params.userId)
    .then((user) => {
      res.render('users/user', {user})
    })
    .catch((err) => {
      res.send(err)
    }) 
})

userRouter.delete('/:userId', (req, res) => {
  userApi.deleteUser(req.params.userId)
    .then(() => {
      res.redirect('/users')
    })
})


// userRouter.get('/', (req, res) => {
//   userApi.get
// })
/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  userRouter
}
