import React, { useState } from 'react';
import { Col, Image, ListGroup, Row } from 'react-bootstrap';
import "../screensStyle/home.css"

const FilteredCards = () => {
    const filteredServices = (category) => {
        setServiceList(services.filter((service) => service.category === category))
    }


    const services = [
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "branding"
        },
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices2.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "logo"
        },
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices3.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "branding"
        },
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices4.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "uiux"
        },
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices5.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "branding"
        },
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices6.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "logo"
        },
        {
            image: "https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices3.png.pagespeed.ic.CUSBfud6Mi.webp",
            category: "uiux"
        }
    ]
    const [serviceList, setServiceList] = useState(services)
  return (
      
      <>
          <Row className=' '>
                    <Col md={6} className='p-5  homeServices2'>
                        <h1 className='fs-1'>What Services you will Get from me!</h1>
                    </Col>
                    <Col md={6} className='p-5 '>
                        <ListGroup horizontal className='serviceProductUl mx-5'>

                            <ListGroup.Item variant='danger' action className='serviceProductLi' onClick={() => setServiceList(services)}>All</ListGroup.Item>
                            <ListGroup.Item variant='danger' action className='serviceProductLi' onClick={() => filteredServices("branding")} >Branding</ListGroup.Item>
                            <ListGroup.Item variant='danger' action className='serviceProductLi' onClick={() => filteredServices("logo")}>Logo</ListGroup.Item>
                            <ListGroup.Item variant='danger' action className='serviceProductLi' onClick={() => filteredServices("uiux")} >UI/UX</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>

                    {
                        serviceList.map((items) => {
                            console.log(items);
                            return (<>

                                <Col md={4} className='my-4'>
                                    <Image fluid src={items.image} />

                                </Col>
                                {/* <img src={items.image} /> */}
                            </>
                            )
                        })
                    }
                </Row>
      </>
  )
};

export default FilteredCards;
