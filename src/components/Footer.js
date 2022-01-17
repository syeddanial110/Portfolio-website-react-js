import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../componentStyle/footer.css"
import { Divider } from 'antd';
const Footer = () => {
    return (
        <>
            <Row className='footer text-light align-items-center'>
                <Col md={12}>
                    <h2 className='text-center text-light'>PORTFOLIO</h2>
                    <p className='text-center fs-1'>daniald3200@gmail.com</p>
                    <address className='text-center'>Tum Hara Ghr</address>

                </Col>
                <Row>
                    <Col>
                        
                        <Divider className='text-light divider' >CopyWrite &copy 2022 | All Right Reserved</Divider>
                    </Col>
                </Row>
            </Row>

        </>
    )
}

export default Footer
