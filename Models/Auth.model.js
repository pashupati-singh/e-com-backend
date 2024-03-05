const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
    name : "String",
    email : "String",
    password : "String"
},{
    keyVersion : false,
})

const AuthModel = mongoose.model("ecomUser",AuthSchema);

module.exports = {AuthModel}