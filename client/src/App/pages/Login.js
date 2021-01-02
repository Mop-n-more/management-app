// used ⬇️ for understanding form handling with react hooks
// https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
import React, { useEffect, useState }from 'react';
import { CenteredContainer } from '../styles/centeredContainer';
import { NextLine } from '../styles/nextLine';
import { Title } from '../styles/title';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');

  const options = {
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email, 
      password: password
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    fetch(process.env.API_SENDLOGIN_URL, options)
    .then((res) => {
      res.json();
    })
    .catch((err) => console.error(err))
  }

  return (
    <CenteredContainer>
      <Title>
        Welcome!
      </Title>
           
        <Form 
          onSubmit={handleSubmit}
        >
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

            <Button variant='link'>
              Forgot password?
            </Button>
            
            <Link to={'./signup'}>
              <Button variant='link'>
                No login? Sign up here!
              </Button>
            </Link>

            <NextLine>
              <Button  variant='primary' type='submit'>
                Log in
              </Button>
            </NextLine>
          </NextLine>

        </Form>
    </CenteredContainer>
  );
}

export default Login;
