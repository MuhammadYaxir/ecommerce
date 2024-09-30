import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRouter from './routes/productRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'

dotenv.config()

// app config
const app = express()
const port = process.env.PORT

//
// middlewares
app.use(express.json())
app.use(cors())

// db connection

connectDB();


// api routes
app.use('/api/product', productRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)

app.get('/', (req, res) => {
    res.status(200).send('Api working')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

