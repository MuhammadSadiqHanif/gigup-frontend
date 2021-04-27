import React from 'react'
import './popularGigs.scss'
function PopularGigs() {
    return (
        <div className="PopularGigsMainDiv mt-2 mb-4">
            <h4 className="mb-4">Popular Gigs</h4>
            {[0, 1, 2].map((value, index) => (
                <div className="col-12 p-0 d-flex popularGigCard">
                    <div className="div1 blackBG"></div>
                    <div className="div2">
                        <div className="p-2">
                            <p className="trackTitle">Take us Back</p>
                            <p className="trackSlug">Katanak</p>
                            <p className="trackdes">Tiger Eye Bar, Terrace, Petrie</p>
                        </div>
                    </div>
                    <div className="div3 yellowBG">
                        <p className="gigDate">9</p>
                        <p className="gigMonth">march</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PopularGigs
