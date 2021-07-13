import React, { useState } from 'react'
import Calendar from 'react-calendar'
import './myGuide.scss'
import concertImage from '../assests/concert.png';
import Tablelist from '../tableList/tablelist';


function MyGuide() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="myGuidePage">
            <div className="heading">
                <h4>MY GUIDES</h4>
            </div>
            <div className="d-flex col-lg-12 section1Guide">

                <div className="d-flex col-lg-7">
                    <div className="calenderMainDiv col-lg-12 ">
                        <p className="smallHeading">Gig Calender</p>
                        <div className="d-flex col-lg-12 calenderMainDIv">
                            <div className="calenderMain col-lg-6 col-md-6">
                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                />
                            </div>
                            <div className="gigContent2 col-lg-6 col-md-6">
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
                <div className="concertImage col-lg-5" style={{ backgroundImage: `url(${concertImage})` }} >
                </div>
            </div>
            <div className="playList">
                <div className="playListFilter">
                    <div className="filter1">
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6.5C0 6.36739 0.0526785 6.24021 0.146447 6.14645C0.240215 6.05268 0.367392 6 0.5 6H3.5C3.63261 6 3.75979 6.05268 3.85355 6.14645C3.94732 6.24021 4 6.36739 4 6.5C4 6.63261 3.94732 6.75979 3.85355 6.85355C3.75979 6.94732 3.63261 7 3.5 7H0.5C0.367392 7 0.240215 6.94732 0.146447 6.85355C0.0526785 6.75979 0 6.63261 0 6.5ZM0 3.5C0 3.36739 0.0526785 3.24021 0.146447 3.14645C0.240215 3.05268 0.367392 3 0.5 3H7.5C7.63261 3 7.75979 3.05268 7.85355 3.14645C7.94732 3.24021 8 3.36739 8 3.5C8 3.63261 7.94732 3.75979 7.85355 3.85355C7.75979 3.94732 7.63261 4 7.5 4H0.5C0.367392 4 0.240215 3.94732 0.146447 3.85355C0.0526785 3.75979 0 3.63261 0 3.5ZM0 0.5C0 0.367392 0.0526785 0.240215 0.146447 0.146447C0.240215 0.0526785 0.367392 0 0.5 0H11.5C11.6326 0 11.7598 0.0526785 11.8536 0.146447C11.9473 0.240215 12 0.367392 12 0.5C12 0.632608 11.9473 0.759785 11.8536 0.853553C11.7598 0.947321 11.6326 1 11.5 1H0.5C0.367392 1 0.240215 0.947321 0.146447 0.853553C0.0526785 0.759785 0 0.632608 0 0.5Z" fill="black" />
                        </svg>
                        filter
                    </div>
                    <div className="filter2">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.41471 12.8294C7.83796 12.8291 9.22019 12.3527 10.3413 11.4759L13.8662 15.0008L15 13.867L11.4751 10.3421C12.3523 9.22088 12.8291 7.83833 12.8294 6.41471C12.8294 2.8778 9.95162 0 6.41471 0C2.8778 0 0 2.8778 0 6.41471C0 9.95162 2.8778 12.8294 6.41471 12.8294ZM6.41471 1.60368C9.068 1.60368 11.2257 3.76143 11.2257 6.41471C11.2257 9.068 9.068 11.2257 6.41471 11.2257C3.76143 11.2257 1.60368 9.068 1.60368 6.41471C1.60368 3.76143 3.76143 1.60368 6.41471 1.60368Z" fill="#666666" />
                        </svg>
                        search for gigs
                    </div>
                </div>
                <Tablelist />
            </div>
        </div>
    )
}

export default MyGuide
