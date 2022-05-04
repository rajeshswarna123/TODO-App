
const express = require("express");
const { use } = require("express/lib/application");
const res = require("express/lib/response");
const app = express.Router();
const { requireAuth } = require("../models/auth")
const commentModel = require(`../models/comment`)

const CREATED_STATUS = 201;

app
    .get('/', requireAuth, (req, res, next) => {
        commentModel.getAll()
        .then(comments => {
            res.send({ success: true, errors: [], data: comments });
        }).catch(next);
        //res.send(userModel.list);
    })
    .get('/task/:taskid', requireAuth, (req, res, next) => {
        commentModel.getComments(req.params.taskid)
        .then(comments => {
            res.send({ success: true, errors: [], data: comments });
        }).catch(next);
        //res.send(userModel.list);
    })
    .get('/comment/:id', requireAuth, (req, res, next) => {
        commentModel.get(req.params.id)
        .then(user => {
            res.send({ success: true, errors: [], data: user });
        }).catch(next);
    })
    .post('/', requireAuth, (req, res,next) => {
        commentModel.create(req.user._id, req.body)
        .then(comment => {
            res.status(CREATED_STATUS).send({ success: true, errors: [], data: comment });
        }).catch(next);
    })
    .delete('/:id', requireAuth, (req, res, next) => {
        commentModel.remove(req.params.id)
        .then(user => {
            res.send({ success: true, errors: [], data: comment });
        }).catch(next);
    })
    .patch('/:id', requireAuth, (req, res)=>{
        const comment = commentModel.update(req.params.id, req.body);
        res.send({sucess: true, errors: [], data: comment});
    })

module.exports = app;