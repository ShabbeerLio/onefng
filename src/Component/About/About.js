import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/About/abouto.png"
import { Link } from 'react-router-dom'

const About = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    return (
        <div className="aboutUs">
            <div className="about-title">
                <h1>ONE FNG</h1>
                <p>Rera No : UPRERAPRJ279516</p>
                <span>Office Space and Retail Shop Noida Sector 142</span>
                <h4>Office Space: ₹10,000/sqft | Retail Shop: ₹31,000/sqft</h4>
            </div>
            <div className="about-main">
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-detail">
                            <p>The "One FNG" real estate project offers premium office and retail spaces strategically located in Noida Sector 142 along the Expressway. This development, spread over 15 acres, features modern design and state-of-the-art amenities, including high-speed elevators, multilevel parking, and a business center equipped with cutting-edge technology. </p>
                            <p>The office spaces boast large floor plates and efficient layouts, while the Hi-Street retail area provides a dynamic shopping and dining experience. With easy access to major corporate hubs and residential areas, One FNG ensures convenience and connectivity for businesses and visitors alike.</p>
                        </div>
                        <div className="about-button">
                            <Link to="/site-visit" onClick={toTop}>
                                <p>Interested in Site Visit ?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="One FNG Noida" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
