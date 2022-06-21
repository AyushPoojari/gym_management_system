import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
    return (  
        <div style={{position:"relative", bottom:0, width:"100%", paddingTop:"1em"}} >
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="d-flex justify-content-md-center"
                         style={{color:"#FCFCFC"}}>
                        <p>&copy;{new Date().getFullYear()} Gold's Gym | All Rights Reserved | Terms and Conditions | Privacy Policy</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer