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
                            <p>The One FNG project, crafted by Group 108, stands out for its exceptional infrastructure and prime location. Its modern architecture and innovative design cater to the diverse needs of businesses, creating an ideal environment for corporate offices and retail outlets. The project also emphasizes sustainability with energy-efficient systems and lush green landscapes. Its proximity to metro stations and major roadways ensures seamless connectivity, making it a preferred choice for entrepreneurs and established enterprises looking to establish a presence in Noida.</p>
                            <p>One FNG's strategic location in Noida Sector 142 ensures unmatched accessibility, with direct connectivity to the Noida-Greater Noida Expressway. This prime location provides businesses with proximity to key commercial and residential areas, making it an attractive destination for both employees and clients. The development’s thoughtful design, which includes ample natural light, ventilation, and open spaces, enhances the working environment, promoting well-being and productivity.</p>
                        </div>
                        <div className="overview-category">
                            <ReactOwlCarousel
                                items={6}
                                nav={true}
                                dots={false}
                                responsive={responsiveOptions}
                            >
                                <div className="category-card">
                                    <img src={imag1} alt="One FNG" />
                                    <p>Fully Equipped Gym</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag2} alt="One FNG Expressway" />
                                    <p>Kids Play Area</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag3} alt="One FNG Group 108" />
                                    <p>Senior Citizens’ Pavilion</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag4} alt="One FNG Project" />
                                    <p>Flower Garden</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag5} alt="One FNG Sector 142 Noida" />
                                    <p>Jogging/Walking Track</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag6} alt="Group 108 One FNG" />
                                    <p>Salon/Spa</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag7} alt="One FNG Noida" />
                                    <p>CCTV Surveillance</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag8} alt="One FNG" />
                                    <p>24X7 Security</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag9} alt="One FNG Expressway" />
                                    <p>Swimming Pool</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag10} alt="One FNG Project" />
                                    <p>Multipurpose Hall</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag11} alt="One FNG Sector 142 Noida" />
                                    <p>Badminton Court</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag12} alt="Group 108 One FNG" />
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
