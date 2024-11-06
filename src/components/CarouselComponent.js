// src/components/CarouselComponent.js

import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CarouselComponent.css'; // Import the CSS file for styling

const CarouselComponent = () => {
    return (
        <BootstrapCarousel style={{ height: '80vh' }}>
            <BootstrapCarousel.Item>
                <div className="carousel-container">
                    <div className="carousel-text">
                        <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>
                            <span>Shub</span> <br />
                            Mangalyam
                        </h1>
                        <p>Bring some elegance to your festive celebration through our subh mangalya jewellery collection.</p>
                        <div className="shop-now">
                            <span>Shop Now</span>
                            <span>&rarr;</span> {/* Right arrow */}
                        </div>
                    </div>
                    <img
                        className="d-block w-60"
                        src="https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-01-20240927193303523568.webp"
                        alt="First slide"
                    />
                </div>
            </BootstrapCarousel.Item>
            <BootstrapCarousel.Item>
                <div className="carousel-container">
                    <div className="carousel-text">
                    <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>
                            <span>Let them</span> <br />
                            <span>Radiate With</span> <br />
                            Sparkle
                        </h1>
                        <p>Bring some elegance to your festive celebration through our subh mangalya jewellery collection.</p>
                        <div className="shop-now">
                            <span>Shop Now</span>
                            <span>&rarr;</span> {/* Right arrow */}
                        </div>
                    </div>
                    <img
                        className="d-block w-60"
                        src="https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-banner-01-20240906182836988582.webp"
                        alt="Second slide"
                    />
                </div>
            </BootstrapCarousel.Item>
            <BootstrapCarousel.Item>
                <div className="carousel-container">
                    <div className="carousel-text">
                    <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>
                            <span>Unleash</span> <br />
                            <span>Your</span>
                            Unique Style
                        </h1>
                        <p>Bring some elegance to your festive celebration through our subh mangalya jewellery collection.</p>
                        <div className="shop-now">
                            <span>Shop Now</span>
                            <span>&rarr;</span> {/* Right arrow */}
                        </div>
                    </div>
                    <img
                        className="d-block w-60"
                        src="https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-banner-02-20240906182857160842.webp"
                        alt="Third slide"
                    />
                </div>
            </BootstrapCarousel.Item>
            <BootstrapCarousel.Item>
                <div className="carousel-container">
                    <div className="carousel-text">
                    <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>
                            <span>Smart</span> <br />
                            <span>Gold</span> <br />
                            Investment
                        </h1>
                        <p>Bring some elegance to your festive celebration through our smart gold investment.</p>
                        <div className="shop-now">
                            <span>Shop Now</span>
                            <span>&rarr;</span> {/* Right arrow */}
                        </div>
                    </div>
                    <img
                        className="d-block w-60"
                        src="https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-banner-4-20240524124910005317.webp"
                        alt="Fourth slide"
                    />
                </div>
            </BootstrapCarousel.Item>
            <BootstrapCarousel.Item>
                <div className="carousel-container">
                    <div className="carousel-text">
                    <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>
                            <span>Men of </span> <br />
                            Platinum
                        </h1>
                        <p>The Ms Dhoni signature edition</p>
                        <div className="shop-now">
                            <span>Shop Now</span>
                            <span>&rarr;</span> {/* Right arrow */}
                        </div>
                    </div>
                    <img
                        className="d-block w-60"
                        src="https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-Home-Main-Banner--20241024115452525710.webp"
                        alt="Fifth slide"
                    />
                </div>
            </BootstrapCarousel.Item>
        </BootstrapCarousel>
    );
};

export default CarouselComponent;
