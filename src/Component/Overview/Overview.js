import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'
import imag1 from "../../Assets/CAtegory/Warehouse-Gym_17f1c9ca3a7_large.jpg"
import imag2 from "../../Assets/CAtegory/Kids Play Area.jpeg"
import imag3 from "../../Assets/CAtegory/Senior Citizens’ Pavilion.jpg"
import imag4 from "../../Assets/CAtegory/Flower Garden.jpg"
import imag5 from "../../Assets/CAtegory/Jogging.jpeg"
import imag6 from "../../Assets/CAtegory/Salon.jpeg"
import imag7 from "../../Assets/CAtegory/CCTV Surveillance.jpeg"
import imag8 from "../../Assets/CAtegory/24X7 Security.jpg"
import imag9 from "../../Assets/CAtegory/Swimming Pool.jpg"
import imag10 from "../../Assets/CAtegory/banquet.jpg"
import imag11 from "../../Assets/CAtegory/badminton.jpeg"
import imag12 from "../../Assets/CAtegory/Pharmacy.jpg"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Overview = () => {
    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };
    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <Form />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>Our meticulously crafted commercial shops and office spaces redefine the standard of modern business environments, offering a seamless blend of functionality, luxury, and convenience. From the moment you enter through the grand vehicular entrance and exit, you are greeted by a meticulously planned road-to-ramp system that ensures smooth traffic flow. As you navigate through the shaded avenues and green boulevards, you'll encounter the central inner grove with a mound, providing a serene retreat amidst the bustling commercial district.</p>
                            <p>Our shopping boulevard and pedestrian shopping plaza offer a vibrant shopping experience, complemented by F&B kiosks and food terraces that cater to every culinary craving. The triple-height entrance lobby, adorned with project signage, sets the stage for a grand arrival, while pedestrian crossovers and skywalks connect you seamlessly to multifunctional spaces and amenities such as the kid's play area and sand pit.</p>
                            <p>Immerse yourself in cultural performances at the amphitheater or relax on the performance deck overlooking the landscape terraces and tree bosque seating areas. With features like vehicular and pedestrian boulevards, sculptural staircases for basement connections, FAIRFOX EON ensures that every aspect of your commercial experience is thoughtfully curated for success and enjoyment. Welcome to a new era of commercial sophistication at FAIRFOX EON, where every detail is designed to elevate your business and lifestyle.</p>
                        </div>
                        <div className="overview-category">
                            <ReactOwlCarousel
                                items={6}
                                nav={true}
                                dots={false}
                                responsive={responsiveOptions}
                            >
                                <div className="category-card">
                                    <img src={imag1} alt="eon noida" />
                                    <p>Fully Equipped Gym</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag2} alt="eye of noida" />
                                    <p>Kids Play Area</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag3} alt="eon eye of noida" />
                                    <p>Senior Citizens’ Pavilion</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag4} alt="fairfox eon commercial park noida" />
                                    <p>Flower Garden</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag5} alt="eon project noida" />
                                    <p>Jogging/Walking Track</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag6} alt="eon project noida" />
                                    <p>Salon/Spa</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag7} alt="eon project noida" />
                                    <p>CCTV Surveillance</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag8} alt="eon project noida" />
                                    <p>24X7 Security</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag9} alt="eon project noida" />
                                    <p>Swimming Pool</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag10} alt="eon project noida" />
                                    <p>Multipurpose Hall</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag11} alt="eon project noida" />
                                    <p>Badminton Court</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag12} alt="eon project noida" />
                                    <p>Pharmacy</p>
                                </div>
                            </ReactOwlCarousel>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
