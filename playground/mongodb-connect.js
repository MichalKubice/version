//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://127.0.0.1:27017/Todos", (er,db)=>{
  if (er) {
    return console.log("Unable to connect to the DB.");
  }




    console.log("Succesfully connected to MongoDb server");
/*  db.collection("Todos").insertOne({
    text: "Smth to do",
    completed: false

  }  ,(err,result) =>{
    if (err) {
      return console.log("Some fail happend when adding new.")
    }
    console.log(JSON.stringify(result.ops,undefined,2) + "NICE");
  });
  */
  db.close();
});
