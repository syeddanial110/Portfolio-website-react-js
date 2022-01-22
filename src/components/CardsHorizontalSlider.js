import React, { Component } from "react";
import { Card, CardGroup, Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import "../componentStyle/cardHorizontalSlider.css"

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        const feebackCards = [
            {
                empName: "Bradely Erikson",
                image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xblog1.png.pagespeed.ic.z4d2Tq3oGA.webp",
                position: "UI/UX",
                aboutHim: "Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus."
            },
            {
                empName: "Bradely Erikson",
                image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xblog1.png.pagespeed.ic.z4d2Tq3oGA.webp",
                position: "UI/UX",
                aboutHim: "Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus."
            },
            {
                empName: "Bradely Erikson",
                image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xblog1.png.pagespeed.ic.z4d2Tq3oGA.webp",
                position: "UI/UX",
                aboutHim: "Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus."
            },
            {
                empName: "Bradely Erikson",
                image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xblog1.png.pagespeed.ic.z4d2Tq3oGA.webp",
                position: "UI/UX",
                aboutHim: "Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus."
            },
            {
                empName: "Bradely Erikson",
                image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xblog1.png.pagespeed.ic.z4d2Tq3oGA.webp",
                position: "UI/UX",
                aboutHim: "Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus."
            },
            {
                empName: "Bradely Erikson",
                image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xblog1.png.pagespeed.ic.z4d2Tq3oGA.webp",
                position: "UI/UX",
                aboutHim: "Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus."
            }
        ]
        return (
            <div className="sliderMainDiv">
                <Row className='homeFeedback'>
                    <Col md={6}  >
                        <h1 className='p-5 mt-5'>Some Possitive Feedback That Encourage Us</h1>
                    </Col>
                </Row>
                <Slider {...settings}>
                    {
                        feebackCards.map((card) => {
                            return (<>
                                <CardGroup>
                                    <Card className="m-3">
                                        <Row className="p-5 ">
                                            <Col md={3} >
                                                <Image src={card.image} />
                                            </Col>
                                            <Col md={4} >
                                                <Row>
                                                    <Col md={12}>
                                                        <h4 className="sliderHeading">{card.empName}</h4>
                                                        <p className="sliderPara">{card.position}</p>
                                                    </Col>

                                                </Row>
                                            </Col>
                                            <Row>
                                                <Col md={12} className="text-center">
                                                    <p>{card.aboutHim}</p>
                                                </Col>
                                            </Row>
                                        </Row>
                                    </Card>
                                </CardGroup>
                            </>
                            )
                        })
                    }
                </Slider>
            </div>
        );
    }
}