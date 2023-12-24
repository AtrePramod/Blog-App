import React, { useState } from 'react'
import { Box, Button, Typography, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { authActions } from '../redux/store'
import { useDispatch } from 'react-redux'
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //state
    const [inputs, setInputs] = useState({
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
            const { data } = await axios.post('/api/v1/user/login', { email: inputs.email, password: inputs.password })
            if (data.success) {
                localStorage.setItem("userId", data.user._id)
                dispatch(authActions.login());
                alert("User Login successfully");
                navigate('/')

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
                    <Typography variant='h4' sx={{ textTransform: 'uppercase' }} padding={3} textAlign={"center"}>Login</Typography>
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
                        color='primary' onClick={() => navigate('/register')}>Not a user ? Please Register</Button>
                </Box>
            </form>
        </>
    )
}

export default Login
