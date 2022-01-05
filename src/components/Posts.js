import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import db from '../firebase';
import Post from './Post';
import Typography from '@mui/material/Typography';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('blog_posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            ))))
    }, [])

    return (
        <>
            <Typography variant='h4'>{posts?.length} Posts Found</Typography>
            <Grid container spacing={4} marginY={1}>
                {
                    posts.map(({ id, data: { blogpost_img, title, description, cardImg, timestamp, body, claps } }) => {
                        return (
                            <Post id={id} key={id} blogpost_img={blogpost_img} claps={claps} title={title} description={description} cardImg={cardImg} timestamp={timestamp} body={body} />
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default Posts
