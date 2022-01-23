import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import HomeCards from '../components/HomeCards'
import PagesStartup from "../components/PagesStartup"
import BrandHorizontalSlider from "../components/BrandHorizontalSlider"
import HomeContactForm from "../components/HomeContactForm"
import "../screensStyle/services.css"

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

            <Row className='serviceContactbg'>
                <Col md={12} sm={12} >
                    <Row className='serviceContact'>
                        <Col md={6} sm={6} xs={8} >
                            <h1 className='p-5 serviceHeading'>Dont worry for contact i`m available</h1>
                        </Col>
                        <Col md={{ span: 3, offset: 2 }} sm={6} xs={4}>
                            <Button variant='danger' className='contactBtn' >Contact Me Now</Button>
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
