const express = require("express")
const cors = require("cors")
const mongoos = require("mongoose")
const dotenv = require('dotenv')
const userRoutes = require("./routes/userRoute")
const adminRoutes = require("./routes/adminRoute")
const app = express()







dotenv.config()
mongoos.connect('mongodb://localhost:27017/userDB',{
    useNewUrlParser:true,
    useUnifiedTopology :true
},()=>{
    console.log("DB connected");
})

app.use(express.json())
app.use('/api/users',userRoutes)
app.use('/api/admin',adminRoutes)
app.use(cors())


const PORT = process.env.PORT || 8080
app.listen(PORT,console.log(`server line on ${PORT}`))