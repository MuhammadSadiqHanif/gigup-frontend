import React, { useState } from 'react'
import SliderLeftArrowSvg from '../assests/sliderLeftArrowSvg';
import SliderRightArrowSvg from '../assests/sliderRightArrowSvg';
import MapBox from '../assests/box.png';
import Slider from "react-slick";
import './ArtistGuide.scss'
import FacebookSvg from '../assests/facebookSvg';
import AttachSvg from '../assests/attachSvg';
import DownloadSvg from '../assests/downloadSvg';
import Calendar from 'react-calendar';
function ArtistGuide() {
    const [value, onChange] = useState(new Date());
    return (
        <div className="ArtistGuideContainer mt-3">
            <h4 className="mb-4">UNKANNY - Tiger Eye Bar</h4>
            <div className="d-flex sp-between">
                <div className="gigCardMain">
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
                    <div className="Buttondiv">
                        <div className="btnDiv1">
                            <button className="buyBtn btn btn-warning"> MY GIG</button>
                            <button className="buyBtn btn btn-warning">Buy Ticket</button>
                        </div>
                        <div className="btnDiv2">
                            <button className="roundButton btn btn-warning"><FacebookSvg /></button>
                            <button className="roundButton btn btn-warning"><AttachSvg /> </button>
                            <button className="roundButton btn btn-warning"><DownloadSvg /></button>
                        </div>
                    </div>
                </div>
                <div className="descriptionMain">
                    <div className="paraSection">
                        <div className="d-flex f-center">
                            <div className="line"></div>
                            <div className="circle"></div>
                        </div>
                        <p className="smallHeading">Desc</p>
                        <p className="paraText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor, duis id sit dui egestas augue accumsan, eleifend. Eget elementum convallis eros sit sed ut cursus ipsum sit. Diam dapibus dignissim tempus mauris. Urna, elementum, mattis quam vel auctor. Nunc, donec eget nec a dictum arcu. Nulla vitae condimentum augue ullamcorper aenean massa. Eros congue justo proin adipiscing sit sed massa.
                        </p>

                        <div className="d-flex f-center">
                            <div className="line"></div>
                            <div className="circle"></div>
                        </div>
                        <p className="smallHeading">Gig Calender</p>
                        <div className="d-flex">
                            <div className="calenderMain">
                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                />
                            </div>
                            <div className="gigContent2">
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
                                <div className="col-12 p-0" style={{ textAlign: "right" }}>
                                    <button className="MyGigWhite">MY GIG</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistGuide
