

const express = require("express");
const { ProductModel } = require("../Models/Product.model");
const { getProducts } = require("../Controllers/Product.js");

const productRoutes  =  express.Router();

productRoutes.get("/", getProducts)
productRoutes.post("/add", async(req,res)=>{
    try {
       const products = await ProductModel.create(req.body)
       await products.save();
       res.json({msg:"Product Added"})
    } catch (error) {
     res.json({error})
    }
 })

module.exports = {productRoutes}

