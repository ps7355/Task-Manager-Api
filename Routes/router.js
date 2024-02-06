const express = require('express');
const routes= express.Router();
const handler = require('./../Controller/taskController')

routes.route('/').post(handler.addTasks).get(handler.getAllTask);
routes.route('/:id').delete(handler.deleteTaskById).put(handler.editTaskById);

module.exports = routes;
