import React from 'react'
import './header.scss'
import PlusSvg from '../assests/plusSvg'
import Logo from '../assests/logo.jpeg'
import { MenuUnfoldOutlined } from '@ant-design/icons'
function Header(props) {
    let {
        visible,
        setVisible,
        placement,
        setPlacement,
        showDrawer,
        onClose,
        onChange,
    } = props

    return (
        <div className="HeaderPage">
            <div className="headerMainDiv">
                <div className="headerSection1 col-lg-2 col-sm-3">
                    <img src={Logo}/>
                </div>
                <div className="headerSection2 hideMobile hideTable col-7">
                    <input type="email" className="form-control roundedInput" placeholder="Search for gigs, artist & venues" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="headerSection2 droptDownMob col-lg-3 col-sm-9">
                    <button className="btn btn-warning buttonAddGig"><PlusSvg /> Add Gig</button>
                    <div className="dropdown">
                        <button className="btn d-flex btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="profileDiv hideMobile"></div>  Hi, Tam
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="headerSection2 headerdrawerButn col-lg-7 col-sm-10 align-center hidePc">
            <MenuUnfoldOutlined  onClick={showDrawer}  className="drawerIcon" />
                <input type="email" className="form-control roundedInput" placeholder="Search for gigs, artist & venues" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
        </div>
    )
}

export default Header
