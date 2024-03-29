import React, { useState } from 'react'
import './menu.scss'
import HomeSvg from '../assests/homeSvg'
import GigGuideSvg from '../assests/gigGuideSvg'
import ArtistGuideSvg from '../assests/artistGuideSvg'
import VenueGuideSvg from '../assests/venueGuideSvg'
import MyGuideSvg from '../assests/myGuideSvg'
import SearchSvg from '../assests/searchSvg'
import ContactSvg from '../assests/contactSvg'
import AddGigSvg from '../assests/AddGigSvg'
function Menu() {
    const [tabs,setTabs] = useState(0)
    return (
        <div className="mt-4 MenuMainDiv col-2">
            <p className="heading">MENU</p>
            <div className="list">
                <button className={`btn buttonRound mt-3 ${tabs === 0 && "btn-warning"}`} onClick={()=>setTabs(0)}><HomeSvg /> Home</button>
                <button className={`btn buttonRound mt-3 ${tabs === 1 && "btn-warning"}`} onClick={()=>setTabs(1)}><GigGuideSvg /> Gig Guide</button>
                <button className={`btn buttonRound mt-3 ${tabs === 2 && "btn-warning"}`} onClick={()=>setTabs(2)}><ArtistGuideSvg /> Artist Guide</button>
                <button className={`btn buttonRound mt-3 ${tabs === 3 && "btn-warning"}`} onClick={()=>setTabs(3)}><VenueGuideSvg /> Vuenue Guide</button>
                <button className={`btn buttonRound mt-3 ${tabs === 4 && "btn-warning"}`} onClick={()=>setTabs(4)}><MyGuideSvg /> My Guide</button>
                <button className={`btn buttonRound mt-3 ${tabs === 5 && "btn-warning"}`} onClick={()=>setTabs(5)}><SearchSvg /> Search</button>
                <button className={`btn buttonRound mt-3 ${tabs === 6 && "btn-warning"}`} onClick={()=>setTabs(6)}><ContactSvg /> Contact</button>
                <button className={`btn buttonRound mt-3 ${tabs === 7 && "btn-warning"}`} onClick={()=>setTabs(7)}><AddGigSvg /> Add Gig</button>
            </div>
        </div>
    )
}

export default Menu
