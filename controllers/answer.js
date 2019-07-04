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
const answerApi = require('../models/answer.js')
const questionApi = require('../models/question.js')
/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */

const answerRouter = express.Router({ mergeParams: true })




/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 


answerRouter.get('/', (req, res) => {
  const questionId = req.params.questionId
  answerApi.getAnswersByQuestionId(questionId)
    .then((answers) => {
      res.render('answers/answers', {answers, questionId})
    })
 })

 answerRouter.get('/new', (req, res) => {
  questionApi.getQuestion(req.params.questionId)
    .then((question) => {
      res.render("answers/newAnswerForm", {question})
    })
})

answerRouter.post('/', (req, res) => {
  req.body.questionId = req.params.questionId
  answerApi.addNewAnswer(req.body)
    .then(() => {
      res.redirect(`/questions/${req.params.questionId}`)
    })
})


answerRouter.get('/:answerId', (req, res) => {

  answerApi.getAnswer(req.params.answerId)
    .then((answer) => {
      res.send(answer)
    })
})

answerRouter.delete('/:answerId', (req, res) => {
  console.log(req.headers);
  answerApi.deleteAnswer(req.params.answerId)
    .then(() => {
      res.redirect(`/questions/${req.params.questionId}`)
    })
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  answerRouter
}
