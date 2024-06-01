import React, { useEffect } from 'react'
import "./SiteVisit.css"
import Form from '../../Component/Form/Form'
import { useLocation } from 'react-router-dom';

const SiteVisit = (props) => {

    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = props.title;

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const description = props.descriptions;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }

        // Ensure dataLayer is initialized before the GA script loads
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }

        // Load the Google Analytics script only once
        const gaScriptId = 'ga-gtag';
        if (!document.getElementById(gaScriptId)) {
            const script = document.createElement('script');
            script.id = gaScriptId;
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-NMNPYY3GZ2';
            document.head.appendChild(script);

            script.onload = () => {
                gtag('js', new Date());
                gtag('config', 'G-NMNPYY3GZ2');
            };
        }
    }, [props.title, props.descriptions, location.pathname]);

    return (
        <div className='SiteVisit'>
            <div className='SiteVisit-main'>
                <div className="Page-title">
                    <h1>Book Your Site Visit</h1>
                </div>
                <div className="sitevisit-box">
                    <div className="sitevisit-item">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteVisit
