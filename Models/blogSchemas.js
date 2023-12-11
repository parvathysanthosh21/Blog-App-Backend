const mongoose = require('mongoose')

const blogSchemas = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
        
    },
    subheading:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    blogImage:{
        type:String,
         required:true
    },
    timeStamp:{
        type:String,
         required:true
    },
    username:{
        type:String,
        required:true
    },
    like:{
        type:Array
    },
    comment:{
        type:Array
    },
    userId:{
        type:String,
        required:true
    }
    
})


const blogs = mongoose.model("blogs",blogSchemas)


module.exports = blogs