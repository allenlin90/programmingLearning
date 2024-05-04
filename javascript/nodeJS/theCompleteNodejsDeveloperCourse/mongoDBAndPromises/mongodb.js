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

    // db.collection('users').deleteMany({
    //     age: 30,
    // }).then(result => {
    //     console.log(result.deletedCount);
    // }).catch(error => {
    //     console.log('Error', error)
    // });

    db.collection('tasks').deleteOne({
        description: 'Do house works',
    }).then(result => {
        console.log('Success', result.deletedCount);
    }).catch(error => {
        console.log('Error', error)
    })
});