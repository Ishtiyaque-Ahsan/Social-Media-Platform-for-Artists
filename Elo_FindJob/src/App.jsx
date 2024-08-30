import "./App.css";
import CrslAd from "./comp/CrslAd";
import Genre_item from "./comp/Genre_item";
import SugBox from "./comp/SugBox";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App({count,countG}) {
  count=4;
  countG = 3;
  const sugBoxes = Array.from({ length: count }, (_, index) => <SugBox key={index} />);
  const genreBoxes = Array.from({ length: countG }, (_, index) => <Genre_item key={index} />);
  return (
    <div className="exp">
      <div className="exp-tp">
        <h6 style={{ textAlign: "right" }}>Find Jobs</h6>
      </div>
     
      <CrslAd/>
      
      <div className="search-box">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Search jobs...
            </a>
          </div>
        </nav>
      </div>

      <h4 style={{ padding: "20px" }}>Suggested for you</h4>
      <div className="sg">
        {sugBoxes}
        <div className="scroll-button-sugbox" >
          <h5>&gt;</h5>
        </div>
      </div>

      <h1 style={{ textAlign: "center" }}>Genre</h1>

      <div className="genre-container">
        {genreBoxes}
      </div>
      
    </div>
  );
}

export default App;

