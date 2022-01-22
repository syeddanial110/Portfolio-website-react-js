import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../screensStyle/about.css'
const PagesStartup = (props) => {
    const {text} = props
    return (
        <>
        <Row >
                <Col md={12} className='aboutBg'>
                    <Row className='aboutContent'>
                        <Col md={{ span: 4, offset: 1 }} className=''>
                            <h1>{text}</h1>
                            <p><Link to="/">Home</Link>- {text} </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
};

export default PagesStartup;
