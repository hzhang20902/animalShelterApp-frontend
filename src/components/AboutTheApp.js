import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ReactComponent as DogHouse } from '../assets/dog-house.svg';

const AboutTheApp = () => {
  return (
    <Container align='center' flexGrow='1' sx={{align: 'center'}}>
      <Box
        component={DogHouse}
        sx={{ 
          flexGrow: 1,
          align: 'center',
          height: '30vh' }}
      />
      <Typography fontSize={17} align='center' fontWeight={'bold'}>
      <p>This App was a collaborative effort between four developers in training as part of LaunchCode's LiftOff program, January-March 2022</p>
      <b/>
       <p>Bunny and Kitty, being best friends,</p>
       <p>Together forever, the fun never ends,</p>
       <p>Solving mysteries, one hug at a time,</p>
       <p>Bunny and Kitty- two of a kind!</p>
      </Typography>
    </Container>
  );
};

export default AboutTheApp;