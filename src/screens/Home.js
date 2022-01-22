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


const Home = () => {


    const filteredServices = (category) => {
        setServiceList(services.filter((service) => service.category === category))
    }


    const services = [
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "branding"
        },
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices2.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "logo"
        },
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices3.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "branding"
        },
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices4.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "uiux"
        },
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices5.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "branding"
        },
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices6.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "logo"
        },
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices3.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "uiux"
        }
    ]
    const [serviceList, setServiceList] = useState(services)

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={12} className='homebg'>
                        {/* <HomebgImageAntDesignContent />     */}
                        <Row className='bgImageContent mx-5 ' >
                            <Col md={5} sm={5} xs={9} className='content'>
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

                <Row className=' '>
                    <Col md={6} className='p-5  homeServices2'>
                        <h1 className='fs-1'>What Services you will Get from me!</h1>
                    </Col>
                    <Col md={6} className='p-5 '>
                        <ListGroup horizontal className='serviceProductUl mx-5'>

                            <ListGroup.Item variant='danger' action className='serviceProductLi' onClick={() => setServiceList(services)}>All</ListGroup.Item>
                            <ListGroup.Item variant='danger' action className='serviceProductLi' onClick={() => filteredServices("branding")} >Branding</ListGroup.Item>
                            <ListGroup.Item variant='danger' action className='serviceProductLi' onClick={() => filteredServices("logo")}>Logo</ListGroup.Item>
                            <ListGroup.Item variant='danger' action className='serviceProductLi' onClick={() => filteredServices("uiux")} >UI/UX</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>

                    {
                        serviceList.map((items) => {
                            console.log(items);
                            return (<>

                                <Col md={4} className='my-4'>
                                    <Image fluid src={items.image} />

                                </Col>
                                {/* <img src={items.image} /> */}
                            </>
                            )
                        })
                    }
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
