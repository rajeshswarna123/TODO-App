
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://sunny:OGrxRdsp9jwrdsoa@cluster0.2g0w2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const isConnected = client.connect();

module.exports = {
    isConnected, db: client, ObjectId
}