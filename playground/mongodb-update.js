//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://127.0.0.1:27017/Todos", (er,db)=>{
  if (er) {
    return console.log("Unable to connect to the DB.");
  }
console.log("Succesfully connected to MongoDb server");


db.collection("Users").findOneAndUpdate({
  name: "Michal"
}, {
  $set: {
    name: "Hrabo",
    age: 15
  }
}, {
  returnOriginal: false
}).then((result)=> {
  console.log(result);
})


});
