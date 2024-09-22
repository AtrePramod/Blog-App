import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard'
const Blogs = () => {
    const [blogs, setBlogs] = useState([0])

    //get blogs
    const getAllblogs = async () => {
        try {
            const { data } = await axios.get('/api/v1/blog/all-blog')

            if (data.success) {
                setBlogs(data.blogs)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllblogs()

    },[])
    return (
        <div>
            {blogs.length > 0 ? (
                blogs.map(blog => (
                    <BlogCard
                        key={blog._id}
                        id={blog._id}
                        isUser={localStorage.getItem('userId') === blog.user?._id}
                        title={blog.title}
                        description={blog.description}
                        image={blog.image}
                        username={blog.user?.username}
                        time={new Date(blog.createdAt).toLocaleString()} // Format date if needed
                    />
                ))
            ) : (
                <p>No blogs available.</p> // Provide feedback if no blogs
            )}

        </div>
    )
}

export default Blogs