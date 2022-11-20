//Dependecies
const express = require('express')

//?import router
const userRouter = require('./users/users.router')

//initial config
const port = 9000
const app = express()

//json request available
app.use(express.json())

app.get('/', (req , res) => {
    res.status(200).json({message:'OK'})
})

//? API v1 Routes
app.use('/api/v1', userRouter)


// start server
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})