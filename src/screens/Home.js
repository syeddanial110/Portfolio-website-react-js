import React, { useState } from 'react'
import { Button, Card, CardGroup, Col, Container, Image, ListGroup, Row, Stack, Tab, Tabs, Form } from 'react-bootstrap'
import HomebgImageAntDesignContent from '../components/HomebgImageAntDesignContent'
// import { Row, Col } from 'antd';
import "../screensStyle/home.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faReact } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faPenNib, faMobileAlt, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
// import serviceImg1 from "../assets/images/services1.jpg"
// import serviceImg2 from "../assets/images/services2.png"
// import serviceImg3 from "../assets/images/services3.png"
// import serviceImg4 from "../assets/images/services4.png"
// import serviceImg5 from "../assets/images/services5.jpg"
// import serviceImg6 from "../assets/images/service6.webp"
import CardsHorizontalSlider from "../components/CardsHorizontalSlider"
import BrandHorizontalSlider from "../components/BrandHorizontalSlider"
import Footer from "../components/Footer"
import AboutContent from '../components/AboutContent'
import HomeContactForm from '../components/HomeContactForm'
import HomeCards from '../components/HomeCards'
import FilteredCards from '../components/FilteredCards'


const Home = () => {


  

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={12} sm={12} xs={12} className='homebg'>
                        {/* <HomebgImageAntDesignContent />     */}
                        <Row className='bgImageContent mx-5 ' >
                            <Col md={5} sm={5} xs={6} className='content'>
                                <p className=' text-danger contentParaBold'>Get Every Single Solutions</p>
                                <h1 className='contentHeading '>I'm Web Developer</h1>
                                <h1 className='contentHeading '>Syed Danial</h1>
                                <p className='contentPara'>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. </p>
                            </Col>
                        </Row>

                    </Col>
                </Row>

                <AboutContent />

                {/* Home Services Cards */}
                <Row className='homeServices1 w-75'>
                    <Col md={6} className='p-5 mx-5 '>
                        <h1 className='fs-1'>What Services you will Get from me!</h1>
                    </Col>
                </Row>
              
              <Row>
                  <Col md={12}>
                      <HomeCards />
                  </Col>
              </Row>

              <Row>
                  <Col md={12}>
                      <FilteredCards />
                  </Col>
              </Row>

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


                <Row>
                    <Col md={12} sm={12} xs={12}>
                        <CardsHorizontalSlider />
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md={12} className='p-3'>
                        <BrandHorizontalSlider />
                    </Col>
                </Row>

                {/* Contact Form */}

                <Row className='mt-5'>
                    <Col md={12}>
                        <HomeContactForm />
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                    <Footer />
                    </Col>
                </Row> */}
            </Container>

        </>
    )
}

export default Home
