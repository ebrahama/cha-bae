const mongoose = require("mongoose");
let MONGO_URI = "mongodb+srv://ibra:moomoo@cluster0.uzmgtsk.mongodb.net/?retryWrites=true&w=majority"
const condb = async()=>{

    try{
      const con = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log( `mogo consed ${con.connection.host}`);
    } catch(error){
    console.log(`erorr ${error.message}`);
    process.exit();
    }

}

module.exports = condb 