
const express = require("express");
const { use } = require("express/lib/application");
const res = require("express/lib/response");
const app = express.Router();
const { requireAuth } = require("../models/auth")
const taskModel = require(`../models/task`)

const CREATED_STATUS = 201;

app
    .get('/', requireAuth, (req, res, next) => {
        taskModel.getList()
        .then(tasks => {
            res.send({ success: true, errors: [], data: tasks });
        }).catch(next);
        //res.send(userModel.list);
    })
    .get('/currentUserTasks', requireAuth, (req, res, next) => {
        taskModel.getCurrentUserTasks(req.user._id)
        .then(tasks => {
            res.send({ success: true, errors: [], data: tasks });
        }).catch(next);
        //res.send(userModel.list);
    })
    .get('/handle/:handle', requireAuth, (req, res, next) => {
        taskModel.getBytitle(req.params.title)
        .then(task => {
            res.send({ success: true, errors: [], data: task });
        }).catch(next);

    })
    .get('/task/:id', requireAuth, (req, res, next) => {
        taskModel.get(req.params.id)
        .then(user => {
            res.send({ success: true, errors: [], data: user });
        }).catch(next);
    })
    .get('/assignedtasks', requireAuth, (req, res, next) => {
        taskModel.getAssignedTasks(req.user._id)
        .then(tasks => {
            res.send({ success: true, errors: [], data: tasks });
        }).catch(next);
    })
    .get('/createdtasks', requireAuth, (req, res, next) => {
        taskModel.getCreatedTasks(req.user._id)
        .then(tasks => {
            res.send({ success: true, errors: [], data: tasks });
        }).catch(next);
    })
    .post('/', requireAuth, (req, res,next) => {
        taskModel.create(req.body, req.user._id)
        .then(task => {
            res.status(CREATED_STATUS).send({ success: true, errors: [], data: task });
        }).catch(next);
    })
    .delete('/:id', requireAuth, (req, res, next) => {
        taskModel.remove(req.params.id)
        .then(user => {
            res.send({ success: true, errors: [], data: task });
        }).catch(next);
    })
    .patch('/:id', requireAuth, (req, res)=>{
        const task = taskModel.update(req.params.id, req.body);
        res.send({sucess: true, errors: [], data: task});
    })
    .post('/seed', requireAuth, (req, res, next) => {
        taskModel.seed()
        .then(x => {
            res.send({ success: true, errors: [], data: x.insertedIds });
        }).catch(next);
    })

module.exports = app;