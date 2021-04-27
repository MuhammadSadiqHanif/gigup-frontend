import React from 'react'
import './discoverGigs.scss'
function DiscoverGigs() {
    return (
        <div className="discoverGigsMainDiv mt-3">
            <h4 className="mb-4">Discover Gigs</h4>
            <div className="bG-grey d-flex carousalContianer">
                <div className="carousalContentContainer">
                    <div className="contentMainDiv">
                        <h5>Queenslands largest <br/> interactive gig & event guide</h5>
                        <p className="slug">make music live again</p>
                        <button className="browseButton">browse gig guide</button>
                    </div>
                    <div className="skewDIv"></div>
                </div>
                <div className="carousalImageContainer"></div>
            </div>
        </div>
    )
}

export default DiscoverGigs

