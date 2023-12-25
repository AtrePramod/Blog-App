import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';


export default function BlogCard({ title, description, image, username, time, id, isUser }) {
    const navigate = useNavigate()
    const handleEdit = () => {
        navigate(`/blog-details/${id}`)
    }
    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`)
            if (data.success) {
                toast.success("Deleted blog success")
                navigate('/blogs')
            }
        } catch (error) {
            toast.error("Someting wrong")
        }
    }


    return (
        <Card sx={{
            width: '40%', margin: 'auto', mt: 2, padding: 2, boxShadow: '5px 5px 10px #ccc', ":hover": {
                boxShadow: '10px 10px 20px #ccc'
            }
        }}>

            {isUser && (
                <Box display={'flex'}>
                    <IconButton onClick={handleEdit} sx={{ marginLeft: 'auto' }}>
                        <ModeEditOutlineIcon />
                    </IconButton>
                    <IconButton onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            )
            }

            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {username}
                    </Avatar>
                }

                title={username}
                subheader={time}
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt=""
            />
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    Title: {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description: {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>
        </Card >
    );
}