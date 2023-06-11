import React from 'react';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Welcome() {
  return (
    <div style={{ height: '100vh', padding: '0 10%', display: "flex", flexDirection: "column", justifyContent: "center", scrollSnapAlign: "start" }}>
      <h1>Alexander Schoenenwald</h1>
      <h4 style={{ color: "#FDF420" }}>Software Engineer at Palantir</h4>
      <div style={{ color: 'white', marginTop: 60 }}>
        <IconButton href='https://github.com/ASchwad' target="_blank" style={{ paddingLeft: 0 }}>
          <GitHubIcon fontSize="large" style={{ marginRight: 10, color: "#fff" }} />
        </IconButton>
        <IconButton href='https://www.linkedin.com/in/alexander-schoenenwald/' target="_blank">
          <LinkedInIcon fontSize="large" style={{ marginRight: 10, color: "#fff" }} />
        </IconButton>
        <IconButton href='https://twitter.com/AlexSchwad' target="_blank">
          <TwitterIcon fontSize="large" style={{ marginRight: 10, color: "#fff" }} />
        </IconButton>
      </div>
    </div>
  );
}