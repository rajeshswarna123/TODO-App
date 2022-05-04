const { db, ObjectId } = require('./mongo');

const collection = db.db("toDoAppDB").collection("comments");

const comments = [
    {
        _id: 'test',
        text: 'Just a sample comment',
        taskId: 'taskId',
        isReply: false,
        createdDate: new Date(),
        modifiedDate: new Date(),
    }
];

async function getAll(){
    return await collection.find().toArray();
}
async function get(id){
    const comment = await collection.findOne({ _id: new ObjectId(id) });
    if(!comment) throw {status: 404, message: "Comment not found"};
    return comment;
}

async function create(userId, comment) {
    comment.userId = userId;
    if(!comment.text){
        throw {status: 400, message: "Test is required"};
    }
    comment.createdDate = new Date();
    comment.modifiedDate = new Date();
    const result = await collection.insertOne(comment);
    comment = await get(result.insertedId);
    return comment;
}

async function remove(id){
    const comment = await collection.findOneAndDelete({ _id: new ObjectId(id) });
    return comment.value;
}

async function getOnlyComments(){
    return await collection.find({isReply: false}).toArray();
}

async function getComments(taskId){
    return await collection.find({taskId: taskId}).toArray();
}

async function update(id, updatedComment){
    updatedComment.modifiedDate = new Date();
    updatedComment = await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: updatedComment },
        {returnDocumet: 'after'}
    );
    
    return updatedComment;
}

module.exports = {
    get,
    getAll,
    create,
    getComments,
    getOnlyComments,
    remove,
    update        
}

module.exports.get = get;