import React from 'react'
import './LatestPhotos.scss'
import image1 from './../assests/latestPhoto1.png'
import image2 from './../assests/latestPhoto2.png'
import image3 from './../assests/latestPhoto3.png'
import image4 from './../assests/latestPhoto4.png'
function LatestPhotos() {
    return (
        <div className="latestPhotoContainer mt-3">
            <h4 className="mb-4">Latest Photos</h4>
            <div className="photosDiv">
                <div className="photo1Div col-lg-3" style={{backgroundImage:`url(${image1})`}}>
                 
                </div>
                <div className="photo2Div col-lg-3">
                    <div style={{backgroundImage:`url(${image2})`}} />
                    <div style={{backgroundImage:`url(${image3})`}} />
                </div>
                <div className="photo4div col-lg-6" style={{backgroundImage:`url(${image4})`}} >
                    
                </div>
            </div>
        </div>
    )
}

export default LatestPhotos
