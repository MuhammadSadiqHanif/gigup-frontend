import React from 'react'
import './header.scss'
import PlusSvg from '../assests/plusSvg'
import Logo from '../assests/logo.jpeg'
function Header() {
    return (
        <div className="HeaderPage">
            <div className="headerMainDiv">
                <div className="headerSection1 col-2">
                    <img src={Logo} />
                </div>
                <div className="headerSection2 col-7">
                    <input type="email" className="form-control roundedInput" placeholder="Search for gigs, artist & venues" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="headerSection2 col-3">
                    <button className="btn btn-warning buttonAddGig"><PlusSvg /> Add Gig</button>
                    <div className="dropdown">
                        <button className="btn d-flex btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="profileDiv"></div>  Hi, Tam
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
