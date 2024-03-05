const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    userID : String,
    userName:String,
    location:String,
    restaurant:String,
    food:String,
    price:Number,
    rating:Number,
    description:String,
    quantity:Number,
    image:String,
    type:String,
    foodID:String,
})

const cartModel = mongoose.model("foodCard",cartSchema)

module.exports = {cartModel}

