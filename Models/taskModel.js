const moongoose = require('mongoose');

const taskSchema = moongoose.Schema({
    title:{type:String,required:true},
    status:{type:String,required:true},
    priority:{type:String,required:true},
    deadline:{type:Date}
});

const tasks = moongoose.model('tasks',taskSchema);

module.exports=tasks;