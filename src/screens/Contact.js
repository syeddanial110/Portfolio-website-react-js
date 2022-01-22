import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Iframe from 'react-iframe'
import HomeContactForm from '../components/HomeContactForm'
import PagesStartup from '../components/PagesStartup'

const Contact = () => {
    return (
        <>
            <Row>
                <Col md={12}>
                    <PagesStartup text="Contact" />
                </Col>
            </Row>
            <Row>
                    <Col md={12} className='mt-5 mb-5'>
                        <HomeContactForm />
                    </Col>
                </Row>
            <Row>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.9975292467315!2d67.075198617663!3d24.864187130554438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ea3ec15fa43%3A0x5b98d272ade72efc!2sParsa%20Tower!5e0!3m2!1sen!2s!4v1642863441287!5m2!1sen!2s" width="600" height="450"style="border:0" allowfullscreen="" loading="lazy" />
            </Row>
        </>
    )
}

export default Contact
