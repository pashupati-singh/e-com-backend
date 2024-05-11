

const express = require("express");
const { AuthMiddleware } = require("../middleware/Auth.middleware");
const { cartModel } = require("../Models/Cart.model");
const { addCartFunction, getCartFunction, cartDeleteFunction, cartClearFunction, cartQuantityFunction } = require("../Controllers/Cart");

const cartRoute = express.Router();

// cartRoute.use(AuthMiddleware);

cartRoute.post("/addCart",AuthMiddleware, addCartFunction)

cartRoute.get('/', AuthMiddleware,getCartFunction)

cartRoute.delete("/delete",AuthMiddleware, cartDeleteFunction)

cartRoute.post("/clearCart", AuthMiddleware, cartClearFunction);

cartRoute.post('/quantity', AuthMiddleware, cartQuantityFunction)


module.exports = {cartRoute}