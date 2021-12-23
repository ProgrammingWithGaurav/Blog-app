import React from "react";
import { Divider, Avatar, Grid, Paper } from "@mui/material";
import ReactTimeAgo from 'react-timeago';

function Comment({displayName, userImg, message, timestamp}) {
  return (
    <div style={{ padding: 14 }} className="App">
      <Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item >
            <Avatar alt="User Img" src={userImg} style={{width: '40px', height: '40px', objectFit: 'contain'}}/>
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{displayName}</h4>
            <p style={{ textAlign: "left" }}>{message}</p>
            <p style={{ textAlign: "left", color: "gray" }}>
            posted <ReactTimeAgo date={new Date(timestamp?.toDate()).toUTCString()} /> 
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
        </Paper>
    </div>
  );
}

export default Comment