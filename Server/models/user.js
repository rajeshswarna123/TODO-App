const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db, isConnected, ObjectId } = require('./mongo');

const collection = db.db("toDoAppDB").collection("users");

let hieghstId = 3;

const list = [
    {
        firstName: 'Rajesh',
        lastName: 'Swarna',
        handle: 'sunny  ',
        password: 'password',
        email: 'swarnar1@newpaltz.edu',
        pic: 'https://randomuser.me/api/portraits/men/1.jpg',
        id: 1,
    },
    {
        firstName: 'Jeevan',
        lastName: 'Swarna',
        handle: 'Nani',
        password: 'brother',
        email: 'swarnar2@n.edu',
        pic: 'https://randomuser.me/api/portraits/men/2.jpg',
        id: 2,
    },
    {
        firstName: 'Shiva',
        lastName: 'Kondru',
        handle: 'pandhi',
        password: 'bava',
        email: 'kondrus1@n.edu',
        pic: 'https://randomuser.me/api/portraits/women/3.jpg',
        id: 3,
    },
];

async function get(id){
    const user = await collection.findOne({ _id: new ObjectId(id) });
    if(!user) throw {status: 404, message: "User not found"};
    return { ...user, password: undefined };
}

async function getByHandle(handle){
    const user = await collection.findOne({ handle });
    if(!user) throw {status: 404, message: "User not found"};
    return { ...user, password: undefined };
}

async function remove(id){
    const user = await collection.findOneAndDelete({ _id: new ObjectId(id) });
    return { ...user.value , password: undefined};
}

async function getHandles(){
    return (await collection.find().toArray()).map(x=> ({_id:x._id, handle: x.handle}) );
}

async function update(id, updatedUser){
    
    if(updatedUser.password){
        updatedUser.password = await bcrypt.hash(updatedUser.password, process.env.SALT_ROUNDS);
    }
    
    updatedUser = await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: updatedUser },
        {returnDocumet: 'after'}
    );
    
    return {...updatedUser, password: undefined};
}

async function login(email, password){
    const user = await collection.findOne({ email });
    console.log(user);
    if(!user) 
        throw {status: 404, message: "User not found"};

    if(!await bcrypt.compare(password, user.password))
        throw {status: 401, message: "Invalid password"};

    const data = {...user, password: undefined};
    console.log(data);
    console.log("------------------------------------");
    console.log(process.env.JWT_SECRET);
    const token = jwt.sign(data, process.env.JWT_SECRET);

    return {...data, token};
}

function fromToken(token){
    return new Promise((resolve, reject)=>{
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
            if(err) 
                reject(err);
            else
                resolve(decoded);
        });
    });
}

function seed(){
    const newList = [...list];
    newList.forEach(item=>item.password = bcrypt.hashSync(item.password, +Number(process.env.SALT_ROUNDS)));
    return collection.insertMany(newList);
}

module.exports = {
    collection,
    seed,
    async create(user) {
        user.id = ++hieghstId;

        if(!user.handle){
            throw {status: 400, message: "Handle is required"};
        }
        user.password = await bcrypt.hash(user.password, Number(process.env.SALT_ROUNDS));  
        console.log(user);

        const result = await collection.insertOne(user);
        user = await get(result.insertedId);
        return user;
    },
    remove,
    update,
    login,
    fromToken,
    getByHandle,
    getHandles,
    async getList(){
        return (await collection.find().toArray()).map(x=> ({...x, password: undefined }) );
    }
}

module.exports.get = get;