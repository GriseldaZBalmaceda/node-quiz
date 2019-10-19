/**
 * Author: Griselda
 * Date: 9/24/2019
 * Description: Quiz Schema
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let quizSchema = new Schema({
  quizId:{type:String, require:true},
  quizName:{type:String},
  questions:{type:Array},

});

module.exports=mongoose.model('Quiz',quizSchema,'Quizes')
