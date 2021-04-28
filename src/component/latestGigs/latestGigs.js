import React from 'react'
import './latestGigs.scss'
import Slider from "react-slick";
import SliderRightArrowSvg from '../assests/sliderRightArrowSvg';
import SliderLeftArrowSvg from '../assests/sliderLeftArrowSvg';

function LatestGigs() {
    const rightArrow = () => (
        <div className="arrow" >
            <SliderRightArrowSvg />
        </div>
    )
    const leftArrow = () => (
        <div className="arrow" style={{
            marginRight: "10px"
        }}>
            <SliderLeftArrowSvg />
        </div>
    )
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        arrow: true,
        slidesToScroll: 3,
        nextArrow: rightArrow(),
        prevArrow: leftArrow(),
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
        <div className="latestGigContainer mt-3">
            <h4 className="mb-4">Latest Gigs</h4>
            <div >
                <Slider {...settings} className="latestGigSlider">
                    {[0, 1, 2, 3, 4, 5, 6].map((value, index) => (
                        <div className="gigcard">

                            <div className="gigs">
                                <div className="gigImage">
                                </div>
                                <div className="gigContent">
                                    <p className="name">UNKANNY</p>
                                    <div className="d-flex col-12 p-0 mb-2">
                                        <div className="col-6 p-0 BD-top mar-right">
                                            <p className="smallText">Date</p>
                                            <p className="midText">Friday April 20</p>
                                        </div>
                                        <div className="col-6 p-0 BD-top">
                                            <p className="smallText">Time</p>
                                            <p className="midText">8:30PM - 9:30PM</p>
                                        </div>
                                    </div>
                                    <div className="col-12 p-0 BD-top mb-2">
                                        <p className="smallText">Venue</p>
                                        <p className="midText b-text">Tiger Eye Bar, Terrace, Petrie</p>
                                    </div>
                                    <div className="col-12 p-0 BD-top mb-2">
                                        <p className="smallText">Artist</p>
                                        <p className="midText b-text">UNKANNY ACOUSTIC</p>
                                    </div>
                                    <div className="col-12 p-0 BD-top mb-2">
                                        <p className="smallText">Gig Tags</p>
                                        <button className="soldTags">SOLD</button>
                                        <button className="soldTags">SOLD</button>
                                        <button className="soldTags">SOLD</button>
                                    </div>
                                </div>
                                <button className="gigButton">GIGUP</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default LatestGigs

