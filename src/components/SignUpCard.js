import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import signup from'./images/signup.jpg'


function SignUpCard() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={signup} />
    <Card.Body>
        <Card.Title>SignUp</Card.Title>
        <Card.Text>
          Access the membership!.

        </Card.Text>
        <Button variant="primary" href='/signup'>Sign Up</Button>
    </Card.Body>
    </Card>
    </>
  )
}

export default SignUpCard;