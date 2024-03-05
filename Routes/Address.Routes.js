
const express = require('express');
const { AuthMiddleware } = require('../middleware/Auth.middleware');
const { AddressModel } = require('../Models/Address.model');

const AddressRoute = express.Router();

AddressRoute.get('/',AuthMiddleware,async (req,res)=>{
       const {userID} = req.body;
    try {

        const address = await AddressModel.find({userID});
        res.json({address})
    } catch (error) {
        res.json({error})
        
    }
})

AddressRoute.post('/add',AuthMiddleware,async(req,res)=>{
            
    try {
        const address = new AddressModel(req.body);
        await address.save();
        res.json({msg:"saved"})
    } catch (error) {
        res.json({error})
    }
})

module.exports = {AddressRoute}