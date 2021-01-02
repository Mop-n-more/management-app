import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../styles/button';
import { Title } from '../styles/title';
import { CenteredContainer } from '../styles/centeredContainer';

function Failure() {
  return (
    <CenteredContainer>
    <div className='App'>
      <Title>Failure..</Title>
        {/** Link to List.js */} 
            <Link to={'./login'}>
              <Button variant='raised'>
                Back to login
              </Button>
            </Link>
    </div>

    </CenteredContainer>
  );
}

export default Failure;