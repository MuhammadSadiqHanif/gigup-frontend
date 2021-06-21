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
function App() {
  return (
    <div>
      <Header />
      <div className="d-flex content-center">
        <Menu />
        <div className="col-7 bg-black">
          {/* <DiscoverGigs />
          <LatestGigs />
          <Tablelist /> */}
          {/* <GigGuide /> */}
          <ArtistGuide />
          <LatestGigs />
        </div>
        <div className="col-3">
          <PopularGigs />
          <PopularArtist />
          <PopularVenues />
        </div>
      </div>
      <div className="footerpadding">
        <Footer />
      </div>
    </div>
  );
}

export default App;
