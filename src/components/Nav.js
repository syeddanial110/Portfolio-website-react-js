import React from 'react'
import {  Container, Form, FormCheck, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'antd';

const Main = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand className='fs-2' href="#"><b>Portfolio</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="justify-content-center m-auto my-2 my-lg-0 p-2"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                         <Link className='m-2 text-dark' to="/"><b>Home</b></Link>
                         <Link className='m-2 text-dark' to="/about"><b>About</b></Link>
                         <Link className='m-2 text-dark' to="/services"><b>Services</b></Link>
                         <Link className='m-2 text-dark' to="/portfolio"><b>Portfolio</b></Link>
                         <Link className='m-2 text-dark' to="/contact"><b>Contact</b></Link>
                        </Nav>
                        <Form className="d-flex">
                           
                        <Button type="primary">Get Free Consultant</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Main
