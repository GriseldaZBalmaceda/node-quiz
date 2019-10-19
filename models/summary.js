const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let summarySchema = new Schema({
  employeeId:{type:String},
  quizId:{type:String},
  quizName:{type:String},
  date:{type:String},
  score:{type:String},

},
{collection: 'Summary'}
);
module.exports=mongoose.model('Summary',summarySchema)
