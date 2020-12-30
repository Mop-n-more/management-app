import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../styles/button';
import { Title } from '../styles/title';
import { CenteredContainer } from '../styles/centeredContainer';

function Home() {
  return (
    <CenteredContainer>
    <div className='App'>
      <Title>Project Home</Title>
        {/** Link to List.js */} 
            <Link to={'./list'}>
              <Button variant='raised'>
                My List
              </Button>
            </Link>
    </div>

    </CenteredContainer>
  );
}

export default Home;
