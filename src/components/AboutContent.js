import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../componentStyle/aboutContent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faReact } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faPenNib, faMobileAlt, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const AboutContent = () => {
    return (<>
        <Row>
            <Col md={6} className='p-5 mt-3 mb-5 homeBorder' >
                <h2 className='fs-2'>Designing With Passion While Exploring The World.</h2>
                <p className='py-2 '>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                </p>
                <p className=''>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua.</p>
            </Col>
            <Col md={6} className='p-5 mt-5 mb-5 '>
                <h1 className='py-2 fs-2'>Any Type Of Query
                    & Discussion.</h1>
                <p className='py-4 fs-5'>Late talk with me</p>
                <p className='fs-5' style={{ display: "inline-block" }}>daniald3200@gmail.com</p>
                <Link to="/"> <FontAwesomeIcon className='mx-3 text-dark fs-5' icon={faArrowRight} /> </Link>
            </Col>
        </Row>
    </>
    )
};

export default AboutContent;
