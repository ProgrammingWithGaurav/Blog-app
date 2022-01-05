import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import db from '../firebase';
import firebase from 'firebase';
import { useNavigate } from 'react-router-dom';


function Create() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [cardImg, setCardImg] = useState('');
    const [blogpost_img, setBlogpost_img] = useState('');
    const [body, setBody] = useState('');

    const sendPost = () => {
        if (title !== '' && description !== '' && cardImg !== '' && blogpost_img !== '' && body !== '') {
            db.collection('blog_posts').add({
                title: title,
                description: description,
                body: body,
                cardImg: cardImg,
                blogpost_img: blogpost_img,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                claps: 0
            })
            navigate('/posts')
        }
    }
    return (
        <div
            style={{
                padding: '20px'
            }}
        >
            <Typography variant="h6" gutterBottom>
                Create A New Post
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Blog Title"
                        fullWidth
                        variant="standard"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Blog Description"
                        fullWidth
                        variant="standard"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Card Img URL"
                        fullWidth
                        type='url'
                        variant="standard"
                        value={cardImg}
                        onChange={e => setCardImg(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Blog Post Background Img URL"
                        fullWidth
                        type='url'
                        variant="standard"
                        value={blogpost_img}
                        onChange={e => setBlogpost_img(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Blog Body"
                        multiline
                        fullWidth
                        rows={10}
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    />
                </Grid>
                <Button
                    variant='contained'
                    style={{
                        margin: '20px'
                    }}
                    onClick={sendPost}
                >Post</Button>
            </Grid>
        </div>
    )
}

export default Create
