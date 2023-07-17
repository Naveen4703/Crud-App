const mongoose = require("mongoose");

const connectDb = async () => {
    try{
        const connect = await mongoose.connect("mongodb+srv://naveen:nav123@crud.dthucxg.mongodb.net/student?retryWrites=true&w=majority");
        console.log("Database is connected to:",connect.connection.name);
    } catch (err) {
        console.log("Unable to connect database due to Error :",err);
    }
}

module.exports = connectDb ;