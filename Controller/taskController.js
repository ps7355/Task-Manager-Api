const tasks = require('./../Models/taskModel');


exports.addTasks = async (req,res)=>{
    try{
        await tasks.create(req.body);
        res.status(201).json({
            status:'Data added Sucessfully',
        })
    }catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
    
};

exports.editTaskById=async (req,res)=>{
    try{
        await tasks.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            status:'sucess',
            message:"updated sucessfully",
        })
    }catch(err){
        res.json(400).json({
            status:'failed',
            message:err.message
        });
    }
}

exports.deleteTaskById =async (req,res)=>{
    try{
        await tasks.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:"sucess"
        });
    }
    catch(err){
        res.status().json({
            message:err.message
        });
    }
}

exports.getAllTask = async (req,res)=>{
    try{
        const allTask = await tasks.find({});
        res.status(200).json({
            status:"sucess",
            data:{
                allTask
            }
        })
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:err.message
        })
    }
}