const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db, isConnected, ObjectId } = require('./mongo');

const collection = db.db("toDoAppDB").collection("tasks");

let hieghstId = 3;

const tasks = [
    { id:0, isCompleted: false, title: 'Make Bulma great again', dueDate: new Date("07-05-2021"), isOwned: 2, assignedTo: 1},
    { id:1, isCompleted: true, title: 'Add some more features' , dueDate: new Date("07-26-2021"), isOwned: 2, assignedTo: 2},
    { id:2, isCompleted: false, title: 'Make a github account' , dueDate: new Date("08-23-2021"), isOwned: 3, assignedTo: 3},
    { id:3, isCompleted: true, title: 'Learn how to use github' , dueDate: new Date("09-10-2021"), isOwned: 3, assignedTo: 2},
    { id:4, isCompleted: false, title: 'add a .gitignore file' , dueDate: new Date("07-10-2022"), isOwned: 1, assignedTo: 3},
    { id:5, isCompleted: false, title: 'Complete Midterm exam' , dueDate: new Date("03-11-2022"), isOwned: 1, assignedTo: 1},
];

async function get(id){
    const task = await collection.findOne({ _id: new ObjectId(id) });
    if(!task) throw {status: 404, message: "Task not found"};
    return { ...task };
}

async function getBytitle(title){
    const task = await collection.findOne({ title });
    if(!task) throw {status: 404, message: "Task not found"};
    return { ...task };
}

async function getAssignedTasks(assignedTo){
    const tasks = (await collection.find({ assignedTo: assignedTo }).toArray());
    console.log(tasks);
    return { ...tasks };
}

async function getCreatedTasks(createdBy){
    const tasks = (await collection.find({ isOwned: createdBy }).toArray());
    return { ...tasks };
}

async function remove(id){
    const task = await collection.findOneAndDelete({ _id: new ObjectId(id) });
    return { ...task.value};
}

async function update(id, updatedTask){

    updatedTask = await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: updatedTask },
        {returnDocumet: 'after'}
    );
    
    return {...updatedTask};
}

function seed(){
    const newList = [...tasks];
    return collection.insertMany(newList);
}

module.exports = {
    collection,
    seed,
    async create(task, userId) {
        if(!task.title){
            throw {status: 400, message: "Task title is required"};
        }
        task.isOwned = userId;
        if(!task.assignedTo) task.assignedTo = userId;
        const result = await collection.insertOne(task);
        return await get(result.insertedId);
    },
    remove,
    update,
    getBytitle,
    getAssignedTasks,
    getCreatedTasks,
    async getList(){
        return (await collection.find().toArray()).map(x=> ({...x }) );
    }
}

module.exports.get = get;