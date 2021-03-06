// used ⬇️ for understanding form handling with react hooks
// https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
import React, { useState }from 'react';
import { CenteredContainer } from '../styles/centeredContainer';
import { NextLine } from '../styles/nextLine';
import { Title } from '../styles/title';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');

  const history = useHistory();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    await fetch(process.env.API_SENDLOGIN_URL, options)
    .then((response) => {
      if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server")
      }
    })
    .then(() => {
      history.push('/success')
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

