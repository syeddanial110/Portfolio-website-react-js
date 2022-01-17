import { Col, Row } from 'antd'
import React from 'react'
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
const HomebgImageAntDesignContent = () => {
    return (
        <>
            <Row justify="space-around" align="middle">
                <Col span={4}>
                    <p value={100}>GETS EVERY SINGLE SOLUTION</p>
                </Col>
                <Col span={4}>
                    <DemoBox value={50} style={{backgroundColor:"blue"}}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={120}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={80}>col-4</DemoBox>
                </Col>
            </Row>
        </>
    )
}

export default HomebgImageAntDesignContent
