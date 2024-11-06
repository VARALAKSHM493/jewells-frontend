import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className="footer-sec">
                    <div className="footer-section-shopping">
                        <h6>SHOPPING</h6>
                        <ul>
                            <li>Gold Jewellery</li>
                            <li>Diamond Jewellery</li>
                            <li>Platinum Jewellery</li>
                            <li>Gold Coin</li>
                            <li>Trendy Collection</li>
                            <li>Digi Gold</li>
                            <li>Blog</li>
                            <li>CSR</li>
                        </ul>
                    </div>

                    <div className="footer-section-customer">
                        <h6>CUSTOMER SERVICES</h6>
                        <ul>
                            <li>Terms of use</li>
                            <li>Scheme Payment</li>
                            <li>Shipping Policy</li>
                            <li>Cancellation Policy</li>
                            <li>Privacy Policy</li>
                            <li>Return / Exchange policy</li>
                            <li>Gift Card Policy</li>
                        </ul>
                    </div>

                    <div className="footer-section-let">
                        <h6>LET US HELP YOU</h6>
                        <ul>
                            <li>FAQ</li>
                            <li>Contact Us</li>
                            <li>Payment FAQ</li>
                            <li>Ring Size Guide</li>
                            <li>Bangle Size Guide</li>
                            <li>Education</li>
                            <li>Offer Zone</li>
                            <li>Sitemap</li>
                            <li>HUID FAQ</li>
                        </ul>
                    </div>

                    <div className="footer-section-ourcompany">
                        <h6>OUR COMPANY</h6>
                        <ul>
                            <li>About us</li>
                            <li>History</li>
                            <li>Career</li>
                            <li>Store Locator</li>
                            <li>Feedback</li>
                            <li>Media</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-promo">
                    <p>Shop from Jos Alukkas online. Anytime. Anywhere.</p>
                    <p>Find the best Gold & Diamond Jewellery with just a click. The Jos Alukkas online store brings you the latest jewellery designs & gives the safest online jewellery shopping platform. Trendy jewellery, antique gold, rose gold, diamond jewellery, platinum jewellery… you get it all in just a click.</p>
                </div>
                
                <div className="footer-image">
                    <img src="https://www.josalukkasmedia.com/Media/CMS/jos-alukkas-mobile-app-20240530175920128473.webp" alt="Jos Alukkas App" />
                </div>
            </div>

            {/* <div className="footer-qr-code">
                <img src="https://www.josalukkasonline.com/assets/images/footer/app_qrcode.webp" alt="Jos Alukkas QR Code" />
            </div> */}

            <div className="footer-bottom">
                <p>2024 Jos Aalukkas Group. All rights reserved. The product/service names listed in this document are marks and/or registered marks of Jos Alukkas Group.</p>
            </div>
        </footer>
    );
};

export default Footer;
