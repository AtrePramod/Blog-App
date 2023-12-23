const blogModel = require('../models/blogModel')

//get all blogs
exports.getAllBlogsController = async (req, res) => {
    try {
        const blogs = await blogModel.find({});
        if (!blogs) {
            return res.status(200).send({
                success: false,
                message: 'No blogs found'
            })
        }
        return res.status(200).send({
            success: true,
            BolgCount: blogs.length,
            message: 'All Blogs list',
            blogs
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send(
            {
                succcess: false,
                message: 'Error while getting blogs',
                error
            }
        )
    }
}

//create blog
exports.createBlogController = async (req, res) => {
    try {
        const { title, description, image } = req.body
        //validatiion
        if (!title || !description || !image) {
            return res.status(400).send({
                success: false,
                message: 'Please provide all fields'
            })
        }
        const newBlog = new blogModel({ title, description, image });
        await newBlog.save();
        return res.status(201).send({
            succcess: true,
            message: 'Blog created!',
            newBlog
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success: false,
            message: 'Error while creating blog',
            error
        })
    }
}

//update Blog
exports.updateBlogController = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description, image } = req.body
        const blog = await blogModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
        return res.status(200).send({
            succes: true,
            message: 'Blog Updated!',
            blog
        })

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success: false,
            message: "Error while updating blog",
            error
        })
    }
}

//single Blog
exports.getBlogByIdController = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await blogModel.findById(id)
        if (!blog) {
            return res.status(404).send({
                success: false,
                message: "blog not found with thhis is"
            })
        }
        return res.status(200).send({
            success: true,
            message: "Fetch single blog",
            blog
        })

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success: true,
            message: "Error while getting single blog",
            error
        })
    }
}

//delete blog
exports.deleteBlogController = async (req, res) => {
    try {
        await blogModel.findOneAndDelete(req.params.id)
        return res.status(200).send({
            success: true,
            message: "A Blog delete successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Error while deleting blog',
            error
        })
    }
}