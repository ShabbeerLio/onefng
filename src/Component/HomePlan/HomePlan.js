import React from 'react'
import "./HomePlan.css"
import HomePlanData from './HomePlanData'
import HomePlanCard from './HomePlanCard'

const HomePlan = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }
    return (
        <div className='HomePlan'>
            <div className='HomePlan-main'>
                {HomePlanData.map((item ,index) => (
                    <HomePlanCard home={item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default HomePlan
