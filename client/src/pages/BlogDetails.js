import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import toast from 'react-hot-toast';

const BlogDetails = () => {
    const [blog, setBlogs] = useState({})
    const id = useParams().id
    const [inputs, setInputs] = useState({})
    const navigate = useNavigate()

    //get Blog details
    const getBlogDetail = async () => {
        try {
            const { data } = await axios.get(`/api/v1/blog/get-blog/${id}`)
            if (data?.success) {
                setBlogs(data.blog)
                setInputs(
                    {
                        title: data.blog.title,
                        description: data.blog.description,
                        image: data.blog.image
                    }
                )
            }
        } catch (error) {
            toast.error("Someting wrong")
        }
    }

    useEffect(() => {
        getBlogDetail()

    }, [id])

    //submit handler
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, {
                title: inputs.title,
                description: inputs.description,
                image: inputs.image,
            })
            if (data?.succes) {
                toast.success("Blog updated")
                navigate('/my-blogs')
            }
        } catch (error) {
            toast.error("Someting wrong")
        }
    }

    //input chance
    const handleChance = (e) => {
        setInputs(prevState => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box width={'50%'} border={3} borderRadius={10} padding={3} margin={'auto'} boxShadow={'10px 10px 10px #ccc'} display={'flex'} flexDirection={'column'} marginTop={"30px"} >
                    <Typography variant="h3" textAlign={"center"} fontWeight={'bold'} padding={3} color={'gray'}>
                        Blog Details
                    </Typography>

                    <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: "bold" }}>Title</InputLabel>
                    <TextField name='title' value={inputs.title} onChange={handleChance} margin='normal' varient='outlined' required></TextField>
                    <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: "bold" }}>Description</InputLabel>
                    <TextField name='description' value={inputs.description} onChange={handleChance} margin='normal' varient='outlined' required></TextField>
                    <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: "bold" }}>Image</InputLabel>
                    <TextField name='image' value={inputs.image} onChange={handleChance} margin='normal' varient='outlined' required></TextField>
                    <Button type='submit' variant='contained' color='warning'> Update</Button>
                </Box>
            </form >
        </>
    )
}

export default BlogDetails
