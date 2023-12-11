const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const blogController = require('../Controller/blogController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/MulterMiddleware')


// register api
router.post('/user/register',userController.register)

// login api
router.post('/user/login',userController.login)

// add-blogs
router.post('/blog/add',jwtMiddleware,multerConfig.single('blogImage'),blogController.addBlogs)


// getuserblogs
router.get('/user/all-blogs',jwtMiddleware,blogController.allUserBlogs)

// getallblogs
router.get('/blog/all',jwtMiddleware,blogController.getAllBlogs)

// gethomeblogs
router.get('/blog/home-blogs',blogController.getHomeBlogs)

// get a blog
router.get('/blog/view/:blogId',blogController.getBlogDetails)

// edit a blog

router.put('/blog/edit/:id',jwtMiddleware,multerConfig.single('blogImage'),blogController.editBlogController)

// delete a blog
router.delete('/blog/remove/:id',jwtMiddleware,blogController.deleteBlogController)





// export router
module.exports = router