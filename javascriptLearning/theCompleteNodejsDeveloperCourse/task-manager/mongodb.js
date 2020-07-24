// CRUD create read update delete
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, }, function (error, client) {
    if (error) { return console.log('Unable to connect to database', error); }

    const db = client.db(databaseName);

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5f1a82bf40b4cb0275a57a72')
    // }, {
    //     $inc: {
    //         age: 30,
    //     },
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error)
    // });

    db.collection('tasks').updateMany({
        completed: false,
    }, {
        $set: {
            completed: true,
        },
    }).then((result) => {
        console.log('Sucess', result.modifiedCount);
    }).catch((error) => {
        console.log('Error', error)
    });
});