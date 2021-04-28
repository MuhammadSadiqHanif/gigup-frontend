import React from 'react'
import './discoverGigs.scss'
import Slider from "react-slick";
function DiscoverGigs() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
                style={{
                    // backgroundColor: "#ddd",/
                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{ margin: "0px" }}>{dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="activeDotmain">
                <div className="activeDot">
                    {/* {i + 1} */}
                </div>
            </div>
        )
    };
    return (
        <div className="discoverGigsMainDiv mt-3">
            <h4 className="mb-4">Discover Gigs</h4>
            <div className="bG-grey d-flex carousalContianer">
                <div className="carousalContentContainer">
                    <Slider {...settings}>
                        {[0, 1, 2, 3].map(() => <div className="contentMainDiv">
                            <h5>Queenslands largest <br /> interactive gig & event guide</h5>
                            <p className="slug">make music live again</p>
                            <button className="browseButton">browse gig guide</button>
                        </div>)}
                    </Slider>
                    <div className="skewDIv"></div>
                </div>
                <div className="carousalImageContainer"></div>
            </div>
        </div>
    )
}

export default DiscoverGigs

