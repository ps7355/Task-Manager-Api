const moongoose = require('mongoose');

const taskSchema = moongoose.Schema({
    title:{type:String,required:true},
    status:{type:Number,required:true},
    priority:{type:Number,required:true},
    deadline:{type:Date}
});

const tasks = moongoose.model('tasks',taskSchema);

module.exports=tasks;