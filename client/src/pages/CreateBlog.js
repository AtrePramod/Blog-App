import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const id = localStorage.getItem('userId')
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        image: ''
    })
    //form
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/v1/blog/create-blog', {
                title: inputs.title,
                description: inputs.description,
                image: inputs.image,
                user: id
            })
            if (data?.success) {
                alert("Blog created")
                navigate('/my-blogs')
            }
        } catch (error) {
            console.log(error)
        }
    }

    //handle chance
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
                    <Typography varient="h2" textAlign={"center"} fontWeight={'bold'} padding={3} color={'gray'}>
                        Create A post
                    </Typography>

                    <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: "bold" }}>Title</InputLabel>
                    <TextField name='title' value={inputs.title} onChange={handleChance} margin='normal' varient='outlined' required></TextField>
                    <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: "bold" }}>Description</InputLabel>
                    <TextField name='description' value={inputs.description} onChange={handleChance} margin='normal' varient='outlined' required></TextField>
                    <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24px', fontWeight: "bold" }}>Image</InputLabel>
                    <TextField name='image' value={inputs.image} onChange={handleChance} margin='normal' varient='outlined' required></TextField>
                    <Button type='submit' variant='contained' color='primary'> Submit</Button>
                </Box>
            </form >
        </>
    )
}

export default CreateBlog
