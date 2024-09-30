import userModel from "../models/userModel.js";

// add items to user cart
const addToCart =  async(req, res) => {
    try {
        let userData = await userModel.findOne({_id:req.user._id})
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }else{
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate({_id:req.user.userId},{cartData});
        res.json({success:true,message:"Added to cart successfully"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Failed to add to cart"})
    }    
}

// remove items from user cart
const removeFromCart = async(req, res) => {
    const { id } = req.params;
    const { cart } = req.body;

    const user = await userModel.findById(id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.cart = user.cart.filter(item => item !== cart);
    await user.save();

    res.status(200).json({ message: "Item removed from cart successfully" });
}

// fetch user cart
const fetchCart = async(req, res) => {
    const { id } = req.params;

    const user = await userModel.findById(id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ cart: user.cart });
}

export {addToCart, removeFromCart, fetchCart}