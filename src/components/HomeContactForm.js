import React from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import "../componentStyle/homeContactForm.css"

const HomeContactForm = () => {
  return <>
   <Row className='homeContactForm '>
                    <Col md={12}>
                        <Row className='contactContent'>
                            <Col md={4} className='mx-5'>
                                <h1 >If Not Now, When? Let’s Work Together!</h1>
                                <p >Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra.</p>
                                <Image className='mt-3' src="https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xsin.png.pagespeed.ic.4L7r6tiIs5.webp" />
                            </Col>
                            <Col md={4} className='mx-5 '>
                                <Form>
                                    <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                       
                                        <Form.Control className='m-3 homeForm' type="text" placeholder="Full Name" />
                                        <Form.Control className='m-3 homeForm' type="email" placeholder="Email Address" />
                                        <Form.Control className='m-3 homeForm' as="textarea" rows={3} placeholder='Your Message' />
                                    </Form.Group>
                                </Form>
                                <Row>
                                    <Col md={12} className='contactBtn'>
                                   <Button className='contactBtn px-5 btn-danger'>Send Message</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
  </>;
};

export default HomeContactForm;
