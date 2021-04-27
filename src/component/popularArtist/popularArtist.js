import React from 'react'
import './popularArtist.scss'
function PopularArtist() {
    return (
        <div className="PopularArtistMainDiv mt-2 mb-4">
            <h4 className="mb-4">Popular Artist</h4>
            {[0, 1, 2].map((value, index) => (
                <div className="col-12 p-0 d-flex popularArtistCard">
                    <div className="div1">
                        <div className="blackBG"></div>
                    </div>
                    <div className="div2">
                        <div className="p-2">
                            <p className="trackTitle">Take us Back</p>
                            <p className="trackSlug">Katanak</p>
                        </div>
                    </div>
                    <div className="div3 yellowBG">
                        <p className="menuIcon">...</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PopularArtist
