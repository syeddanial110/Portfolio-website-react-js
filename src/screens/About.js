import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AboutContact from '../components/AboutContact'
import AboutContent from '../components/AboutContent'
import '../screensStyle/about.css'
import CardsHoizontalSlider from "../components/CardsHorizontalSlider"
import BrandHorizontalSlider from "../components/BrandHorizontalSlider"
import PagesStartup from '../components/PagesStartup'

const About = () => {
    return (
        <>
            <Row>
                <Col>
                <PagesStartup text="About Me" />
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <AboutContent />
                </Col>
            </Row>

          <Row>
              <Col md={12}>
            <CardsHoizontalSlider />
                  
              </Col>
          </Row>
          <Row className='mt-4 mb-5'>
              <Col md={12}>
              <BrandHorizontalSlider />

              </Col>
          </Row>


        </>
    )
}

export default About
