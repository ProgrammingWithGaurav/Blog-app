import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container>
            <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="home img" />
            <div className="about">
                <h1>iBlogger is a place to write, read, and connect</h1>
                <p>It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
                <Link to='/create' style={{ all: 'unset' }}><Button variant='outlined' color='inherit'>Start Writing</Button></Link>
            </div>
        </Container>
    )
}

export default Home

const Container = styled.div`
    position: relative;
    img {
        width: 100vw;
        height: 400px;
        min-height: 50vh:
        object-fit: cover;
    }
    div {
        min-width: 400px;
        max-width: 50vw;
        position: absolute;
        top: 0;
        left: 20px;
    }
    div > h1 {
        font-weight: 500;
        font-size: 3rem;
    }
    div > p {
        font-size: 20px;
    }
`