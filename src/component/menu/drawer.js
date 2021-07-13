import React, { useState } from 'react'
import { Drawer, Button, Radio, Space } from 'antd';
import HomeSvg from '../assests/homeSvg'
import GigGuideSvg from '../assests/gigGuideSvg'
import ArtistGuideSvg from '../assests/artistGuideSvg'
import VenueGuideSvg from '../assests/venueGuideSvg'
import MyGuideSvg from '../assests/myGuideSvg'
import SearchSvg from '../assests/searchSvg'
import ContactSvg from '../assests/contactSvg'
import AddGigSvg from '../assests/AddGigSvg'

function DrawerComponent(props) {
    const [tabs, setTabs] = useState(0)

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
        <>
            {/* <Space>
              
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
            </Space> */}
            <div className="mt-4  hidePc">
                <Drawer
                    title="Basic Drawer"
                    placement={placement}
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    key={placement}
                >
            <div className="MenuMainDiv mobDrawerMenu">
                    <p className="heading">MENU</p>
                    <div className="list">
                        <button className={`btn buttonRound mt-4 ${tabs === 0 && "btn-warning"}`} onClick={() => setTabs(0)}><HomeSvg /> Home</button>
                        <button className={`btn buttonRound mt-4 ${tabs === 1 && "btn-warning"}`} onClick={() => setTabs(1)}><GigGuideSvg /> Gig Guide</button>
                        <button className={`btn buttonRound mt-4 ${tabs === 2 && "btn-warning"}`} onClick={() => setTabs(2)}><ArtistGuideSvg /> Artist Guide</button>
                        <button className={`btn buttonRound mt-4 ${tabs === 3 && "btn-warning"}`} onClick={() => setTabs(3)}><VenueGuideSvg /> Vuenue Guide</button>
                        <button className={`btn buttonRound mt-4 ${tabs === 4 && "btn-warning"}`} onClick={() => setTabs(4)}><MyGuideSvg /> My Guide</button>
                        <button className={`btn buttonRound mt-4 ${tabs === 5 && "btn-warning"}`} onClick={() => setTabs(5)}><SearchSvg /> Search</button>
                        <button className={`btn buttonRound mt-4 ${tabs === 6 && "btn-warning"}`} onClick={() => setTabs(6)}><ContactSvg /> Contact</button>
                        <button className={`btn buttonRound mt-4 ${tabs === 7 && "btn-warning"}`} onClick={() => setTabs(7)}><AddGigSvg /> Add Gig</button>
                    </div>
                    </div>
                </Drawer>
            </div>
        </>
    )
}

export default DrawerComponent
