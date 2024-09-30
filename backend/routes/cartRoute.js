import express from "express"
import { addToCart, removeFromCart, fetchCart } from "../controllers/cartController.js"
import { authentication } from "../middleware/middleware.js"

const cartRouter = express.Router() 

cartRouter.post('/add',authentication, addToCart)
cartRouter.post('/remove', removeFromCart)
cartRouter.get('/fetch', fetchCart)


export default cartRouter