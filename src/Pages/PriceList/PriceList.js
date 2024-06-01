import React, { useEffect } from 'react'
import "./PriceList.css"
import Table from '../../Component/Table/Table'
import PriceListData from './PriceListData'
import { useLocation } from 'react-router-dom'

const PriceList = (props) => {

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

    const plcData = [
        { id: '1', description: 'Basic Selling Price [BSP]', rate: '25,000/ - PSF' },
        { id: '2', description: 'Other Charges', rate: '500/ - PSF' },
        { id: '3', description: 'PLC [Tower Retail]', rate: '1,000/ - PSF' },
        { id: '4', description: 'PLC [High Street]', rate: '750/ - PSF' },
        { id: '5', description: 'Corner PLC', rate: '700/ - PSF' }
    ];

    return (
        <div className='PriceList'>
            <div className='PriceList-main'>
                <div className="pricelist-box">
                    <h1>Price List & Payment Plan</h1>
                    <h4>Retail Spaces </h4>
                    <span>w.e.f.: 15.04.2024</span>
                </div>
                <div className="pricelist-table">
                    <div className="list-table">
                        <h5>Preferred Location Charges</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Payment Price</th>
                                    <th>PLC Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plcData.map(plc => (
                                    <tr key={plc.id}>
                                        <td>{plc.description}</td>
                                        <td>{plc.rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pricelist-table">
                    {PriceListData.map((item, index) => (
                        <Table item={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PriceList
