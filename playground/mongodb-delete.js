//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return  console.log('Unable to connect to mongoDB server ');
    }
    console.log('Connected to mongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    // findOneAndDelete
    //  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Mikey'}).then((result) => {
    //   console.log(result);
    // });
     db.collection('Users').findOneAndDelete({_id: new ObjectID('5918e33ee0c33f0ca581396f')}).then((result) => {
      console.log(result);
    });

    //db.close();
});