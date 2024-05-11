const { AddressModel } = require("../Models/Address.model.js");


const userAddressFunction  = async (req,res)=>{
    const {userID} = req.body;
 try {

     const address = await AddressModel.find({userID});
     res.json({address})
 } catch (error) {
     res.json({error})
     
 }
}

const userAddAddressfunction = async(req,res)=>{
            
    try {
        const address = new AddressModel(req.body);
        await address.save();
        res.json({msg:"saved"})
    } catch (error) {
        res.json({error})
    }
}


module.exports = {userAddressFunction,userAddAddressfunction}