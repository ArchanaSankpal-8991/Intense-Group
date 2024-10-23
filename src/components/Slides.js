import React from 'react';
import { Carousel } from 'react-bootstrap';
import IntenseIMG1 from '../image/IntenseIMG1.png';
import AccessControl from '../image/AccessControl.png';
import Biometric from '../image/Biometric.png';


export default function () {
    return (
        <>
            <div className='container-fluid slide-bg new-Comp-top-margin'>
                <div className='container'>
                <Carousel>
                    <Carousel.Item interval={500}>
                        <img src={AccessControl} className="slide-size" alt="FireSafety" />
                        <Carousel.Caption>
                            <h3>AccessControl</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                        <img src={IntenseIMG1} className="slide-size" alt="FireSafety" />
                        <Carousel.Caption>
                            <h3>Biometric</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Biometric} className="slide-size" alt="FireSafety" />
                        <Carousel.Caption>
                            <h3>FireSafety</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>

            </div>


        </>
    )
}