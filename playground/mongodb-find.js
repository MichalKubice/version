//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://127.0.0.1:27017/Todos", (er,db)=>{
  if (er) {
    return console.log("Unable to connect to the DB.");
  }
console.log("Succesfully connected to MongoDb server");


db.collection("Todos").find({_id: new ObjectID("5bf2f919a920583d2018b99c")}).toArray().then((docs) => {
console.log(JSON.stringify(docs,undefined, 2));
}, (err) => {
  console.log("error",err);
});


});
