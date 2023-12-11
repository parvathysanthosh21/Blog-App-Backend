const blogs = require('../Models/blogSchemas')
const users = require ('../Models/userSchema')

// addblog

exports.addBlogs = async (req,res)=>{
    console.log("Inside add project function");
    const userId = req.payload
    const blogImage = req.file.filename
    const user = await users.findOne({_id:userId})
    username = user.username
    const {title,category,content,subheading,timeStamp} = req.body
    // console.log(`${title},${category},${content} ,${blogImage}, ${userId}`);
    try {
        const newBlog = new blogs({
            title,category,content,subheading,blogImage,username,timeStamp,userId
        })
        await newBlog.save()
        res.status(200).json(newBlog)
    } catch (err) {
        res.status(401).json(`Request Failed Error : ${err}`)
  
    }
}

// getuserblogs

exports.allUserBlogs = async (req,res)=>{
    const userId = req.payload
    try {
        const userBlogs = await blogs.find({userId})
        res.status(200).json(userBlogs)
    } catch (err) {
        res.status(401).json(err)
    }
}

// getallBlogs

exports.getAllBlogs = async (req,res)=>{
    const searchKey=req.query.search
    const query ={
        category:{$regex:searchKey , $options :"i"}
    }
    try {
        const allBlogs = await blogs.find(query)
        res.status(200).json(allBlogs)
    } catch (err) {
        res.status(401).json(err)
    }
}

// gethomeprojects
exports.getHomeBlogs = async (req,res)=>{

    try {
        const homeBlogs = await blogs.find().limit(3)
        res.status(200).json(homeBlogs)
    } catch (err) {
        res.status(401).json(err)
    }
}

// get a blog

exports.getBlogDetails = async(req,res)=>{
    const {blogId} = req.params
    console.log(blogId);
    try {
        const ablogDetails = await blogs.findOne({_id:blogId})
        res.status(200).json(ablogDetails)
        console.log(ablogDetails);
    } catch (err) {
        res.status(401).json(err)
    }
}


// edit blog

exports.editBlogController = async(req,res)=>{
    // get blog id
    const {id} = req.params
    const userId = req.payload
    const {title,category,subheading,content,blogImage,timeStamp,username} = req.body
    console.log(`${timeStamp}`);
    const uploadBlogImage = req.file?req.file.filename:blogImage
    try {
      const updateBlog = await blogs.findByIdAndUpdate({_id:id},{title,category,subheading,content,blogImage:uploadBlogImage,timeStamp,username,userId},{new:true})  
      await updateBlog.save()
      res.status(200).json(updateBlog)
    } catch (err) {
        res.status(401).json(err)  
    }
}

// delete a blog

exports.deleteBlogController = async(req,res)=>{
    // get blog details
    const {id}=req.params
    try {
        const removeProject = await blogs.findByIdAndDelete({_id:id})
        res.status(200).json(removeProject)
    } catch (err) {
        res.status(401).json(err)
    }
}