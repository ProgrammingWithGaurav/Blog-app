import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { selectSelectedBlog } from '../features/appSlice';
import { useSelector } from 'react-redux';

function View() {
    const [comments, setComments] = useState([]);
    const selectedBlog = useSelector(selectSelectedBlog);
    return (
        <Container className='view'>
            <img src={selectedBlog.blogpost_img} />
            <Title>{selectedBlog.title}</Title>
            <Body>{selectedBlog.body}</Body>
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
