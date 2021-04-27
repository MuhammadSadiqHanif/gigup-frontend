import React from 'react'
import './footer.scss'
import BackwardArrowSvg from "../assests/backwardArrowSvg";
import PlayArrowSvg from "../assests/playArrowSvg";
import ForwardArrowSvg from "../assests/forwardArrowSvg";
import LoopSvg from "../assests/loopSvg";
import SoundSvg from "../assests/soundSvg";
import ListSvg from "../assests/listSvg";
import HeartSvg from "../assests/heartSvg";
import DownloadSvg from "../assests/downloadSvg";
function Footer() {
    return (
        <div className="footerMainDiv">
            <div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="d-flex contentDiv">
                    <div className="d-flex col-3 mr-5 trackMainDiv">
                        <div className="ArtistImage"></div>
                        <div>
                            <p className="trackTitle">Take us Back</p>
                            <p className="trackSlug">Katanak</p>
                        </div>
                    </div>
                    <div className="d-flex col-8 trackMainDiv space-between">
                        <div className="trackTime right-gap">01:53 - 02:30</div>
                        <div className="Icons right-gap"><BackwardArrowSvg/></div>
                        <div className="Icons right-gap playArrow"><PlayArrowSvg/></div>
                        <div className="Icons right-gap"><ForwardArrowSvg/></div>
                        <div className="Icons right-gap lightIcon"><LoopSvg/></div>
                        <div className="Icons right-gap lightIcon"><SoundSvg/></div>
                        <div className="Icons right-gap lightIcon"><ListSvg/></div>
                        <div className="Icons right-gap lightIcon"><HeartSvg/></div>
                        <div className="Icons right-gap lightIcon"><DownloadSvg/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
