const {ProductModel} = require("../Models/Product.model.js")

 const getProducts = async(req,res)=>{
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
}

module.exports = {getProducts}