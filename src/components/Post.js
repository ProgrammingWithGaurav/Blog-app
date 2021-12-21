import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { selectBlog } from '../features/appSlice';

function Post({id, title, description, blogpost_img, body, cardImg, timestamp }) {
  const dispatch = useDispatch();
  const goToBlog = () => {
    dispatch(selectBlog({
      title: title,
      body: body,
      blogpost_img: blogpost_img,
      timestamp: timestamp,
      id: id,
    }))
  }
  return (
    <Grid item xs={12} sm={5} marginX={2}>
    <Link to='/view-post' style={{all: 'unset', cursor: 'pointer'}} onClick={goToBlog}>
      <Card sx={6}>
        <CardMedia
          style={{ objectFit: 'contain' }}
          component="img"
          alt="card img"
          height="140"
          image={cardImg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(timestamp).toUTCString()}
          </Typography>
        </CardContent>
      </Card>
    </Link>
    </Grid>
  );
}

export default Post;