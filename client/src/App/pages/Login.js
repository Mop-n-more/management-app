// used ⬇️ for understanding form handling with react hooks
// https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
import React, { useEffect, useState }from 'react';
import { CenteredContainer } from '../styles/centeredContainer';
import { NextLine } from '../styles/nextLine';
import { Title } from '../styles/title';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <CenteredContainer>
      <Title>
        Welcome
      </Title>
           
        <Form onSubmit={handleSubmit}>
          <NextLine>
            
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>
                Email address
              </Form.Label>
              <Form.Control 
                type='email' 
                placeholder='Enter email'
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>
                Password
              </Form.Label>
              <Form.Control 
                type='password' 
                placeholder='Password' 
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
    
              <Button href='#' variant='link'>
                Forgot password?
              </Button>

            <NextLine>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </NextLine>
            
          </NextLine>
        </Form>
    </CenteredContainer>
  );
}

export default Login;
