import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="margin-bot">
            <Carousel>
                <Carousel.Item className="abc">
                    <img
                        className="d-block w-100 ba"
                        src="./bg1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="mx-auto">
                        <h3>Photo Learning</h3>
                        <p>Learn through detailed lessons and improve your images with our special tools.</p>
                    </Carousel.Caption>
                </Carousel.Item>



                <Carousel.Item className="abc">
                    <img
                        className="d-block w-100 img-blur"
                        src="./bg3.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-black">Photo Learning</h3>
                        <p className="text-light bg-dark">Learn through detailed lessons and improve your images with our special tools.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;