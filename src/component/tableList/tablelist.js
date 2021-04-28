import React from 'react'
import AttachSvg from '../assests/attachSvg'
import DownloadSvg from '../assests/downloadSvg'
import FacebookSvg from '../assests/facebookSvg'
import './tablelist.scss'
function Tablelist() {
    return (
        <div className="tableListMainDiv mt-5">
            {
                [0, 1, 2, 3, 4, 5].map((value, index) => (
                    <div className="bgGrey">
                        <div className="d-flex">
                            <div className="div1 yellowBG">
                                <p className="gigDate">9</p>
                                <p className="gigMonth">march</p>
                            </div>
                            <div className="div2">
                                <p className="name">UNKANNY</p>
                                <div className="d-flex col-12 p-0 mb-2 space-bt">
                                    <div className="col-5 p-0 BD-top mar-right">
                                        <p className="smallText">Artist</p>
                                        <p className="midText">UNKANNY ACOUSTIC</p>
                                    </div>
                                    <div className="col-6 p-0 BD-top">
                                        <p className="smallText">Venue</p>
                                        <p className="midText">Tiger Eye Bar, Terrace, Petrie</p>
                                    </div>
                                </div>
                            </div>
                            <div className="div3">
                                <button className="roundButton btn btn-warning"><FacebookSvg /></button>
                                <button className="roundButton btn btn-warning"><AttachSvg /> </button>
                                <button className="roundButton btn btn-warning"><DownloadSvg /></button>
                                <button className="buyBtn btn btn-warning">Buy Ticket</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Tablelist
