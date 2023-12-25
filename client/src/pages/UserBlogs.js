import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard'
import toast from 'react-hot-toast'

const UserBlogs = () => {
    const [blogs, setBlogs] = useState([])

    //user user blog
    const getUserBlogs = async () => {
        try {
            const id = localStorage.getItem('userId')
            const { data } = await axios.get(`/api/v1/blog/user-blog/${id}`)
            if (data?.success) {
                setBlogs(data?.userBlog.blogs)
            }
        } catch (error) {
            toast.error("Someting wrong")
        }
    }
    useEffect(() => {
        getUserBlogs()
    }, [])
    return (
        <div>
            {blogs && blogs.map(blog => (
                <BlogCard
                    key={blog._id}
                    id={blog._id}
                    isUser={true}
                    title={blog.title}
                    description={blog.description}
                    image={blog.image}
                    username={blog.username}
                    time={blog.createdAt}

                />))}
        </div>
    )
}

export default UserBlogs