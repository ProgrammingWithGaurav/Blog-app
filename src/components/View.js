import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { selectSelectedBlog, selectUser } from '../features/appSlice';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import db from '../firebase';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import firebase from 'firebase';

function View() {
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState('');
    const selectedBlog = useSelector(selectSelectedBlog);
    const user = useSelector(selectUser);

    useEffect(() => {
        if (selectedBlog.id) {
            db.collection('blog_posts')
                .doc(selectedBlog.id)
                .collection('comments')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => setComments(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }))))
        }
    }, [selectedBlog.id])

    const sendComment = () => {
        if (selectedBlog.id) {
            db.collection('blog_posts')
            .doc(selectedBlog.id)
            .collection('comments')
            .add({
                message: input,
                timestamp: firebase.firestore.Timestamp.now(),
                displayName: user.username,
                userImg: user.profilePic
            })
        }
        setInput('');
    }
    return (
        <Container className='view'>
            <img src={selectedBlog.blogpost_img} />
            <Title>{selectedBlog.title}</Title>
            <Body>{selectedBlog.body}
                <h1>{comments?.length} Comments found</h1>
                <Comments>
                    {comments.map(({ id, data: { displayName, userPic, timestamp, message } }) => {
                        return (
                            <Comment key={id} displayName={displayName} userPic={userPic} timestamp={timestamp} message={message} />
                        )
                    })}
                </Comments>
                <CommentNew>
                    <TextField multiline rows={1} label='Add a new Comment' fullWidth value={input} onChange={e => setInput(e.target.value)} />
                    <Button onClick={sendComment}>
                        <SendIcon color='primary'
                            style={{
                                cursor: 'pointer'
                            }}
                        />
                    </Button>
                </CommentNew>
            </Body>
        </Container>
    )
}

export default View

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    img {
        width: 100%;
        height: 30vh;
        min-height: 300px;
        position: absolute;
    }
`

const Title = styled.div`
    position: absolute;
    top: 20vh;
    left: 10%;
    font-size: 70px;
    text-transform: Uppercase;
    font-weight: bold;
`

const Body = styled.div`
    position: absolute;
    top: 60vh;
    width: 92%;
    margin-left: 20px;
    line-height: 24px;
    ::first-letter {
        font-size: 24px;
        font-weight: bold;
    }
`

const Comments = styled.div`
    margin-top: 40px;
    width: 90%;
    height: 100vh;
    overflow-y: scroll;
`

const CommentNew = styled.div`
    z-index: 2;
    display: flex;
    align-items: center;
`