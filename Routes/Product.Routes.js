

const express = require("express");
const { AuthMiddleware } = require("../middleware/Auth.middleware");
const { ProductModel } = require("../Models/Product.model");

const productRoutes  =  express.Router();

productRoutes.get("/", async(req,res)=>{
  const { _id } = req.query;
   try {
     
    const products = await ProductModel.findOne({ _id });
    if (!products) {
      const products = await ProductModel.find()
      return res.json(products);
    }
    
    res.json(products);
   } catch (error) {
    res.json({error})
   }
})
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

