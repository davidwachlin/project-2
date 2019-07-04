/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const questionApi = require('../models/question.js')
const answerApi = require('../models/answer.js')
/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const questionRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
questionRouter.get('/', (req, res) => {
  questionApi.getAllQuestions()
    .then((questions) => {
      res.render('questions/questions', { questions })
    })
    .catch((err) => {
      res.send(err)
    })
})

questionRouter.post('/', (req, res) => {
  console.log(req, res);
  questionApi.addNewQuestion(req.body)
    .then(() => {
      res.redirect("/questions")
    })
    .catch((err) => {
      res.send(err)
    })
})

questionRouter.get('/new', (req, res) => {
  res.render("questions/newQuestionForm")
})

questionRouter.get('/:questionId/edit', (req, res) => {
  questionApi.getQuestion(req.params.questionId)
    .then((question) => {
      res.render('questions/editQuestionForm', { question })
    })
})

questionRouter.get('/:questionId', (req, res) => {
  questionApi.getQuestion(req.params.questionId)
    .then((question) => {
      answerApi.getAnswersByQuestionId(question._id)
        .then((answers) => {
          res.render('questions/question', { question, answers })
        })
    })
    .catch((err) => {
      res.send(err)
    })
})

questionRouter.put('/:questionId', (req, res) => {
  questionApi.updateQuestion(req.params.questionId, req.body)
    .then(() => {
      res.redirect(`/questions/${req.params.questionId}`)
    })
})





//       questionApi.getQuestion(req.params.questionId)
//         .then((question) => {
//           answerApi.getAnswersByQuestionId(question._id)
//             .then((answers) => {
//               res.render('questions/question', { question, answers })
//             })
//         })
//     })
// })

questionRouter.delete('/:questionId', (req, res) => {
  questionApi.deleteQuestion(req.params.questionId)
    .then(() => {
      res.redirect('/questions')
    })
})
/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  questionRouter
}
