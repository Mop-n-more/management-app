import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../styles/button';
import { Title } from '../styles/title';
import { CenteredContainer } from '../styles/centeredContainer';

export default function Success() {
  return (
    <CenteredContainer>
      <div className='App'>
        <Title>Success!</Title>
          {/** Link to List.js */} 
            <Link to={'./home'}>
              <Button variant='raised'>
                Click to go to home page
              </Button>
            </Link>
      </div>

    </CenteredContainer>
  );
}
