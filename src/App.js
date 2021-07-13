import './App.scss';
import DiscoverGigs from './component/discoverGigs/discoverGigs';
import Footer from './component/footer/footer';
import Header from './component/header/header'
import LatestGigs from './component/latestGigs/latestGigs';
import Menu from './component/menu/menu'
import PopularArtist from './component/popularArtist/popularArtist';
import PopularGigs from './component/popularGigs/popularGigs';
import PopularVenues from './component/popularVenues/popularVenues';
import GigGuide from './component/gigGuide/gigGuide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-calendar/dist/Calendar.css';
import Tablelist from './component/tableList/tablelist';
import ArtistGuide from './component/ArtistGuide/ArtistGuide';
import VenueGuide from './component/VenueGuide/VenueGuide';
import MyGuide from './component/myGuide/MyGuide';
import ArtistPage from './component/artistPage/ArtistPage';
import VenueList from './component/venueList/venueList';
import VenuePage from './component/venuePage/VenuePage';
import AddGig from './component/addGig/AddGig';
import 'antd/dist/antd.css'
import { useState } from 'react';
import DrawerComponent from './component/menu/drawer';
import Home from './component/Home/home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {

  const [visible, setVisible] = useState(false)
  const [placement, setPlacement] = useState('left')

  function showDrawer() {
    setVisible(true);
  };

  function onClose() {
    setVisible(false)
  };

  function onChange(e) {
    setPlacement(e.target.value)
  };

  return (
    <div>
      <Header visible={visible}
        setVisible={setVisible}
        placement={placement}
        setPlacement={setPlacement}
        showDrawer={showDrawer}
        onClose={onClose}
        onChange={onChange}
      />
      <div className="d-flex content-center mainDivApp">
        <Menu
          visible={visible}
          setVisible={setVisible}
          placement={placement}
          setPlacement={setPlacement}
          showDrawer={showDrawer}
          onClose={onClose}
          onChange={onChange}
        />
        <DrawerComponent visible={visible}
          setVisible={setVisible}
          placement={placement}
          setPlacement={setPlacement}
          showDrawer={showDrawer}
          onClose={onClose}
          onChange={onChange}
        />
        <div className="col-lg-7 col-md-8 col-sm-12 bg-black mainCenterDiv">
          <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/gigGuide" component={GigGuide} />
    <Route exact path="/artistGuide" component={ArtistGuide} />
    <Route exact path="/venueGuide" component={VenueGuide} />
    <Route exact path="/artistPage" component={ArtistPage} />
    <Route exact path="/venuePage" component={VenuePage} />
    <Route exact path="/addGig" component={AddGig} />
    {/* <Route exact path="/home" component={Home} /> */}
          {/* <Home /> */}

          {/* <GigGuide /> */}
          {/* <ArtistGuide /> */}
          {/* <VenueGuide /> */}
          {/* <MyGuide /> */}
          {/* <ArtistPage /> */}
          {/* <VenuePage /> */}
          {/* <AddGig /> */}
          </Router>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12">
          <PopularGigs />
          <PopularArtist />
          {/* <PopularVenues /> */}
        </div>
      </div>
      <div className="footerpadding">
        <Footer />
      </div>
    </div>
  );
}

export default App;
