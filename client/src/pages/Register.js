import React, { useState } from 'react'
import { Box, Button, Typography, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const navigate = useNavigate()
    //state
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    })

    //handle input change
    const handlechange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    //handle submit 
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/v1/user/register', { username: inputs.name, email: inputs.email, password: inputs.password })
            if (data.success) {
                alert("User register successfully")
                navigate('/login')

            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box maxWidth={450} display={'flex'} flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    margin={'auto'}
                    marginTop={5}
                    // boxShadow={"10px 10px 20px #ccc"}
                    boxShadow={"10px 10px 20px  "}
                    padding={3}
                    borderRadius={5}
                >
                    <Typography variant='h4' sx={{ textTransform: 'uppercase' }} padding={3} textAlign={"center"}>Register</Typography>
                    <TextField
                        placeholder='Name'
                        name='name'
                        margin='normal'
                        type='text'
                        value={inputs.name}
                        onChange={handlechange}
                        required
                    />
                    <TextField
                        placeholder='Email'
                        name='email'
                        margin='normal'
                        value={inputs.email}
                        type='email'
                        onChange={handlechange}
                        required
                    />
                    <TextField
                        placeholder='Password'
                        name='password'
                        margin='normal'
                        onChange={handlechange}
                        type='password'
                        value={inputs.password}
                        required
                    />

                    <Button
                        type='submit'
                        sx={{ borderRadius: 3, marginTop: 3 }}
                        variant='contained'
                        color='primary'>
                        Submit
                    </Button>
                    <Button sx={{ borderRadius: 3, marginTop: 3 }}
                        color='primary' onClick={() => navigate('/login')}>Already Registerd? Please Login</Button>
                </Box>
            </form>
        </>
    )
}

export default Register