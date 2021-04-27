import React from 'react'
import './popularGigs.scss'
function PopularGigs() {
    return (
        <div className="PopularGigsMainDiv mt-2">
            <h4>Popular Gigs</h4>
            {[0, 1, 2, 3].map((value, index) => (
                <div>
                    
                </div>
            ))}
        </div>
    )
}

export default PopularGigs
