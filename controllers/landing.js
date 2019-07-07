
const express = require('express')




const landingRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

//shouldn't need view all user routre
landingRouter.get('/', (req, res) => {
      res.render('landing/landing')

    })
    .catch((err) => {
      res.send(err)
    })
})