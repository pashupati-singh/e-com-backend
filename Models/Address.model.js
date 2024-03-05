const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    userID:"String",
    name: "String",
    house:"String",
    street : "String",
    state:"String",
    code : "String",
})

const AddressModel = mongoose.model('address',AddressSchema);


module.exports = {AddressModel}