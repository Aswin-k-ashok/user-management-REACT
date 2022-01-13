const mongoose = require ('mongoose')
const bcrypt = require("bcrypt")

const userSchma = mongoose.Schema(
    {
        name:{type:String,require:true},
        email:{type:String,require:true,unique:true},
        password:{type:String,require:true}
    }
)

userSchma.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})
userSchma.methods.matchPassword = async function(enterdPassword){
    return await bcrypt.compare(enterdPassword,this.password)
}

const User = mongoose.model("User",userSchma)

module.exports = User