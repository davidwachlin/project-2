/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')


/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
//const SampleModelSchema = new mongoose.Schema({
//  name: String
//})
const AnswerSchema = new mongoose.Schema({
  answer: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  questionId: mongoose.Types.ObjectId
})


/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const AnswerCollection = mongoose.model('Answer', AnswerSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAnswersByQuestionId(questionId) {
  return AnswerCollection.find({questionId: questionId});
}

function getAnswer(answerId) {
  return AnswerCollection.findById(answerId)
}

function addNewAnswer(answerObject) {
  return AnswerCollection.create(answerObject);
}

function updateAnswer(answerId, answerObject) {
  return AnswerCollection.findByIdAndUpdate(answerId, answerObject)
}

function deleteAnswer(answerId) {
  return AnswerCollection.findByIdAndDelete(answerId)
}
/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAnswersByQuestionId,
  getAnswer,
  addNewAnswer,
  updateAnswer,
  deleteAnswer

}
