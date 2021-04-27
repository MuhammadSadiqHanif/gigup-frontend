import './App.scss';
import Footer from './component/footer/footer';
import Header from './component/header/header'
import Menu from './component/menu/menu'
import PopularGigs from './component/popularGigs/popularGigs';
function App() {
  return (
    <div>
      <Header />
      <Footer />
      <div className="d-flex content-center">
        <Menu />
        <div className="col-7 bg-black"></div>
        <div className="col-3">
          <PopularGigs />
        </div>
      </div>
    </div>
  );
}

export default App;
