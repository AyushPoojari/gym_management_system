import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function LoginCard() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Login</Card.Title>
        <Card.Text>
          Already a member just login!
        </Card.Text>
        <Button variant="primary">Click to Login</Button>
    </Card.Body>
    </Card>
    </>
  )
}

export default LoginCard;