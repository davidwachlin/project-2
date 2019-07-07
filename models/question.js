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

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  checkedTypo: {
    type: Boolean,
    default: false
  }
})




/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const QuestionCollection = mongoose.model('Question', QuestionSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllQuestions() {
  return QuestionCollection.find();
}

function getQuestionByUserId(userId) {
  return QuestionCollection.find({userId: userId})
}

function getQuestion(questionId) {
  return QuestionCollection.findById(questionId)
}

function addNewQuestion(questionObject) {
  questionObject.checkedTypo = questionObject.checkedTypo === 'true' ? true : false
  return QuestionCollection.create(questionObject);
}

function updateQuestion(questionId, questionObject) {
  questionObject.checkedTypo = questionObject.checkedTypo === 'true' ? true : false
  return QuestionCollection.findByIdAndUpdate(questionId, questionObject)
}

function deleteQuestion(questionId) {
  return QuestionCollection.findByIdAndDelete(questionId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getQuestionByUserId,
  getAllQuestions,
  getQuestion,
  addNewQuestion,
  updateQuestion,
  deleteQuestion
}
