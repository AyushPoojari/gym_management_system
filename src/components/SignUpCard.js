import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SignUpCard() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>SignUp</Card.Title>
        <Card.Text>
          Access the membership!By quick signup.
        </Card.Text>
        <Button variant="primary">Sign Up</Button>
    </Card.Body>
    </Card>
    </>
  )
}

export default SignUpCard;