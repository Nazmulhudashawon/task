import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (

        <Carousel className="carousel">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://www.arabianbusiness.com/cloud/2021/09/14/UzXoyUu7-dubaitourism-1.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://2.bp.blogspot.com/-aBLSsKGDlyU/WCgJkXTglfI/AAAAAAAAJWs/1ZyQ0dSk-dIKwkfmFy5HJwMLrjjWfHPrgCLcB/s640/italy%2Btours.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    );
};

export default Banner;