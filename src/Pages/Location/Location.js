import React, { useEffect } from 'react'
import "./Location.css"
import { useLocation } from 'react-router-dom';

const Location = (props) => {

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
              script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2JH3F7DMB0';
              document.head.appendChild(script);
  
              script.onload = () => {
                  gtag('js', new Date());
                  gtag('config', 'G-2JH3F7DMB0');
              };
          }
      }, [props.title, props.descriptions, location.pathname]);

    return (
        <div className='location'>
            <div className="Page-title">
                <h1>LOCATION</h1>
            </div>
            <div className="location-box">
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112065.65784146429!2d77.31775793374176!3d28.628209341456373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefb0610afe8f%3A0x2291398a7376ce83!2sOne%20FNG%20Project!5e0!3m2!1sen!2sin!4v1719666027246!5m2!1sen!2sin"></iframe>
            </div>
        </div>
    )
}

export default Location
