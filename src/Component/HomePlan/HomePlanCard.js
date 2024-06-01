import React from 'react'
import "./HomePlan.css"

const HomePlanCard = ({ home }) => {

    var index = (home.id);

    return (
        <>
            <div className="homeplan-box" key={index}>
                {index % 2 !== 0 ? (
                    <>
                        <div className="homeplan-left">
                            <h2>{home.title}</h2>
                            <p>{home.desc}</p>
                        </div>
                        <div className="homeplan-right">
                            <div className="homeplan-image">
                                <img src={home.cover} alt={home.alttag} />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="homeplan-right">
                            <div className="homeplan-image">
                                <img src={home.cover} alt={home.alttag} />
                            </div>
                        </div>
                        <div className="homeplan-left">
                            <h2>{home.title}</h2>
                            <p>{home.desc}</p>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default HomePlanCard
