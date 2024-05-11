const { cartModel } = require("../Models/Cart.model");



const addCartFunction = async (req,res)=>{
    
    try {
        
        const { description, food, image, location, price, quantity, rating, restaurant, type , _id } = req.body;
        const { userID} = req.body;

        const existingCartItem = await cartModel.findOne({ foodID: _id, userID });

        if (existingCartItem) {
            existingCartItem.quantity += quantity;
            await existingCartItem.save();
            return res.json({ msg: "Item added", cartItem: existingCartItem });
        }
            const newCart = new cartModel({
               
                 description, food, image, location, price, quantity, rating, restaurant, type , userID , foodID : _id 
            });
            await newCart.save();
        res.json({ msg: "Item added",newCart });
    } catch(err){
        console.log(err);
        res.status(500).json({ msg: "Internal server error" });
    }
}


const getCartFunction = async (req,res)=>{
    const {userID} = req.body
    try {
        const item = await cartModel.find({userID});
    res.json(item)
    } catch (error) {
        res.json(error)
    }
}

const cartDeleteFunction = async (req,res)=>{
    const {_id} = req.query;
   try {

    await cartModel.findOneAndDelete({_id});
    res.json({msg:"item get deleted"})
    
   } catch (error) {
    res.json({msg:error})
   }
}

const cartClearFunction  = async (req, res) => {
    const { userID } = req.body;
    try {
        await cartModel.deleteMany({ userID });
        res.json({ msg: "Cart cleared successfully" });
    } catch (error) {
        console.error("Error clearing cart:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
} 

const cartQuantityFunction = async (req, res) => {
    try {
     const {_id,value} = req.body;
     const { userID } = req.body;
       console.log(_id,value);
     const existingCartItem = await cartModel.findOne({ _id, userID });
    
     if (existingCartItem) {
         console.log(existingCartItem)
         existingCartItem.quantity += value;
         await existingCartItem.save();
         return res.json({ msg: 'update', cartItem: existingCartItem });
     }else{
         res.json({msg : "error"})
     }
    } catch (error) {
         res.json(error)
    }
 }

module.exports = {addCartFunction,getCartFunction,cartDeleteFunction,cartClearFunction,cartQuantityFunction}