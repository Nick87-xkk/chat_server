var mongoose = require('mongoose');

const MONGO_URL = "mongodb://nick87:12138@49.232.185.124:27017/?authSource=admin"

mongoose.connect(MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true },(err,data)=>{
    if(err) console.log(err);
    console.log(data)
})