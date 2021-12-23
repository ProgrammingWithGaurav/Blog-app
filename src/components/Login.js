import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth } from 'firebase';
import { provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/appSlice';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://iblogger.web.app/">
                iBlogger
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const googleLogin = () => {
        auth().signInWithPopup(provider)
            .then(result => {
                dispatch(login({
                    username: result.user.displayName,
                    profilePic: result.user.photoURL,
                    id: result.user.uid
                }))
                navigate('/');
            }).catch(err => alert(err.message))
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" style={{marginTop: '40vh'}}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} textAlign="center">
                                <Button onClick={googleLogin} color="primary" variant="contained">Login with Google <strong style={{ marginLeft: '10px' }}>g</strong></Button>
                            </Grid>
                        </Grid>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}

