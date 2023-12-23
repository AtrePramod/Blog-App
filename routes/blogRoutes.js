const express = require('express')
const { getAllBlogsController, createBlogController, updateBlogController, deleteBlogController, getBlogByIdController, userBlogController } = require('../controllers/blogController')


//router object 
const router = express.Router()

//routes
//get all blog || GET
router.get('/all-blog', getAllBlogsController)

//post|| create blog
router.post('/create-blog', createBlogController)

//put ||update blog
router.put('/update-blog/:id', updateBlogController)

//GET || single blog details
router.get('/get-blog/:id', getBlogByIdController)

//delete blog||DELETE
router.delete('/delete-blog/:id', deleteBlogController)

//GET|| user blog
router.get('/user-blog/:id', userBlogController)

module.exports = router