import React, { useEffect } from 'react'
import bannerimg from "../../Assets/Banner/bannero.png"
import "./Banner.css"

import { FaBriefcase, FaCartShopping, FaMugSaucer, FaBed } from "react-icons/fa6";

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-heading">
                </div>
                <div className="banner-image">
                    <img src={bannerimg} alt="One FNG" />
                </div>
                <div className="banner-bottom">
                    <div className="banner-items">
                        <div className="banner-card">
                            <FaBriefcase />
                            <div className="banner-card-detail">
                                <h4>Office Space</h4>
                                <p>Lockable Office Space </p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaCartShopping />
                            <div className="banner-card-detail">
                                <h4>Retail Shop</h4>
                                <p>Lockable Retail Space</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
