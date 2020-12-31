import React, { useEffect, useState }from 'react';
import { CenteredContainer } from '../styles/centeredContainer';
import { NextLine } from '../styles/nextLine';
import { Title } from '../styles/title';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUp() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    fetch(process.env.API_SIGNUP_URL, {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email, 
        password: password
      })
    })
    .then((res) => res.json())
    .catch((err) => console.error(err))
  }

  return (
    <CenteredContainer>
      <Title>
        Sign up here!
      </Title>
           
        <Form 
          onSubmit={handleSubmit}
        >
          <NextLine>

            <Form.Group controlId='firstName'>
              <Form.Label>
                First Name
              </Form.Label>
              <Form.Control
                type='firstName'
                placeholder='Enter First Name'
                onChange={e => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='lastName'>
              <Form.Label>
                Last Name
              </Form.Label>
              <Form.Control
                type='lastName'
                placeholder='Enter Last Name'
                onChange={e => setLastName(e.target.value)}
              />
            </Form.Group>

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


            <NextLine>
              <Button  variant='primary' type='submit'>
                Sign Up
              </Button>
            </NextLine>
          </NextLine>

        </Form>
    </CenteredContainer>
  );
}

export default SignUp;