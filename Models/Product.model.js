const mongoose = require("mongoose");


const ProSchema = mongoose.Schema({
    location : "String",
    restaurant: "String",
    food: "String",
    price: "Number",
    rating: "Number",
    description: "String",
    quantity: "Number",
    image: "String",
    type: "String",
})

const ProductModel = mongoose.model("Product",ProSchema);


module.exports = {ProductModel};