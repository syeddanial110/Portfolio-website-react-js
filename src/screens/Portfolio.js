import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FilteredCards from '../components/FilteredCards'
import PagesStartup from '../components/PagesStartup'

const Portfolio = () => {
    return (
        <>
        <Row>
            <Col>
            <PagesStartup text="Portfolio" />
            </Col>
        </Row>
        <Row>
            <Col className='m-3'>
                <FilteredCards />
            </Col>
        </Row>
           
        </>
    )
}

export default Portfolio
