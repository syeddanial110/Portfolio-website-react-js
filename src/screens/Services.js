import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import HomeCards from '../components/HomeCards'
import PagesStartup from "../components/PagesStartup"
import BrandHorizontalSlider from "../components/BrandHorizontalSlider"
import HomeContactForm from "../components/HomeContactForm"

const Services = () => {
    return (
        <>
            <Row>
                <Col md={12}>
                    <PagesStartup text="Services" />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <HomeCards />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <HomeCards />
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
                    <Col md={12} className='mt-5 mb-5'>
                        <BrandHorizontalSlider />
                    </Col>
                </Row>
               

        </>
    )
}

export default Services
