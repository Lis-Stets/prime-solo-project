import './AboutPage.css';
import { ListItem, Typography } from '@mui/material';
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function AboutPage() {
  return (
    <div className="container">
      <div>
        <div className='roparoli'>
          <Typography variant='h1' className="app-title" align='center'>Roparoli</Typography>
        </div>
        <br />
        <br />
        <div className='description' style={{marginLeft: 45, marginRight: 45, paddingLeft: 45, paddingRight: 45 }} align="center" >
          <Typography variant='h6' className="app-description" align='center' >Your all in one kids closet and wardrobe management friend.
             Keep track of who is wearing what clothes in which sizes, mamage hand me downs, 
             and know exactly what you have in storage for next season, all in one place!</Typography>
        </div>
        <br />
        <br />
        <div className='technologies' style={{marginLeft: 100, marginRight: 100, paddingLeft: 45, paddingRight: 45, paddingBottom: 25}} align="center">
          <Typography variant='h6'>
            Technologies Used: 
          </Typography>
          <Typography variant='p'style={{}}>
            HTML , React , CSS , Material UI, Redux, Redux-Saga, Axios, Node, Postgresql
          </Typography>
        </div>
        <br />
        <div className='next' style={{marginLeft: 100, marginRight: 100, paddingLeft: 45, paddingRight: 45, paddingBottom: 25}} align="center">
          <Typography variant='h6'>
            Future Goals:
          </Typography>
          <Typography variant='p'style={{}}>
            • Image Upload 
          </Typography>
          <br />
          <Typography variant='p'style={{}}>
            • Join Accounts
          </Typography>
          <br />
          <Typography variant='p'style={{}}>
            • User Conscious Features
          </Typography>
        </div>
        <br />
        <div className='thanks' style={{marginLeft: 100, marginRight: 100, paddingLeft: 45, paddingRight: 45, paddingBottom: 25}} align="center">
          <Typography variant='h4'>
            Thank You
          </Typography>
          <Typography variant='p'style={{}}>
            THNAK YOU SO STINKIN MUCH
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
