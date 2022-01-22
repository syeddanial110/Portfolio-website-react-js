import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import "../componentStyle/aboutContact.css"

const AboutContact = () => {
    return (
        <>
                <Row className='homeContactbg'>
                    <Col md={12} >
                        <Row className='homeContact'>
                            <Col md={6} className=''>
                                <h1 className='p-5 contactHeading'>Dont worry for contact i`m available</h1>
                            </Col>
                            <Col md={{ span: 3, offset: 2 }}>
                                <Button variant='danger'>Contact Me Now</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
        </>
    )
};

export default AboutContact;
