import React from 'react'
import "./Highlights.css"
import high from "../../Assets/Highlights/hilights.jpg"
import HighlightsData from './HighlightsData';
import { IoCheckmarkCircle } from "react-icons/io5";

const Highlights = () => {

    const details = [
        { key: 'Location', value: 'Amazing location just located in NH-24, Ghaziabad.' },
        { key: 'Apartments On Each Floor', value: 'Spacious living with only two flats on each floor.' },
        { key: 'Plot Area', value: 'Project spanning 25 acres*' },
        { key: 'Open Space', value: '70% of open green space.' },
        { key: 'Size', value: 'Area for each flat is around 1720 sqft, with each flat being 3bhk along with an equally amazing study & servant room' },
        { key: 'Configuration', value: '3 BHK + Study Room + 4T' }
    ];

    return (
        <div className='Highlights'>
            <div className='Highlights-main'>
                <div className="highlights-item">
                    <div className="highlights-right">
                        <img src={high} alt="One FNG Group 108" />
                    </div>
                    <div className="highlights-left">
                        <h2>Project Highlights</h2>
                        <ul>
                            {HighlightsData.map((item) => (
                                <li key={item.id}>
                                    <p><IoCheckmarkCircle /></p>
                                    {item.detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights
