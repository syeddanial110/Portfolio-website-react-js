import React, { Component } from "react";
import { Card, CardGroup, Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick";


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
          "https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xbrand1.png.pagespeed.ic.rFiXzXgh9r.webp",
          "https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xbrand2.png.pagespeed.ic.rFiXzXgh9r.webp",
          "https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xbrand3.png.pagespeed.ic.rFiXzXgh9r.webp",
          "https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xbrand4.png.pagespeed.ic.rFiXzXgh9r.webp",
          "https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xbrand1.png.pagespeed.ic.rFiXzXgh9r.webp",
          "https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xbrand2.png.pagespeed.ic.rFiXzXgh9r.webp"
        ]
        return (
            <div>
              
                <Slider {...settings}>
                    {
                        feebackCards.map((card) => {
                            return (<>
                     
                                <Row className="p-5 ">
                                    <Col md={4} >
                                        <Image src={card} />
                                    </Col>
                                    
                              
                                </Row>
                                
                            </>
                            )
                        })
                    }
                </Slider>
            </div>
        );
    }
}