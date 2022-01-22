import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { faFacebookF, faReact } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faPenNib, faMobileAlt, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const HomeCards = () => {
    return (
        <>
              <Row className=''>
                    <Col md={12}>
                        <CardGroup className='p-4'>
                            <Card className='p-3 m-2 homeCard'>
                                <FontAwesomeIcon className='fs-1 mx-auto mt-5' icon={faPenNib} />
                                <Card.Body className='mb-5'>
                                    <Card.Title className='text-center mt-5 fs-2'>UI/UX Design</Card.Title>
                                    <Card.Text className='text-center mt-3 fs-6'>
                                        Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card className='p-3 m-2 homeCard'>
                                <FontAwesomeIcon className='fs-1 mx-auto mt-5' icon={faReact} />
                                <Card.Body className='mb-5'>
                                    <Card.Title className='text-center mt-5 fs-2'>React Website</Card.Title>
                                    <Card.Text className='text-center mt-3 fs-6'>
                                        Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                            <Card className='p-3 m-2 homeCard'>
                                <FontAwesomeIcon className='fs-1 mx-auto mt-5' icon={faMobileAlt} />
                                <Card.Body className='mb-5'>
                                    <Card.Title className='text-center mt-5 fs-2'>Mobile Application</Card.Title>
                                    <Card.Text className='text-center mt-3 fs-6'>
                                        Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
        </>
    )

};

export default HomeCards;
