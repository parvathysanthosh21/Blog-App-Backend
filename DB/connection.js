const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Atlas Connected With pfServer");
}).catch((err)=>{
    console.log(`MongoDB Connection Failed ERROR: ${err}`);
})