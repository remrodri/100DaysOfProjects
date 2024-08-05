import "./App.css";
import img from "./assets/image.png";

function App() {
  return (
    <div className="work-space">
      <div className="card">
        <div className="top-container">
          <h1 className="main-title">Traffic source types</h1>
          <div className="view-info">
            <p>Views</p>
            <div className="dot-container">
              <div className="dot"></div>
            </div>
            <p>Last 28 days</p>
          </div>
        </div>
        <div className="bottom-container">
          <div className="img-container">
            <img src={img} alt="circulo" />
            <div className="tooltip">
              <p>aqui van las porcentajes</p>
            </div>
          </div>
          <div className="info-container">
            <div className="row-info">
              <p>Chancel pages</p>
              <div className="line-container">
                <hr className="line1" />
              </div>
              <div className="percentage-container">
                <p>37.5%</p>
              </div>
            </div>
            <div className="row-info">
              <p>Direct or unknown</p>
              <div className="line-container">
                <hr className="line2" />
              </div>
              <div className="percentage-container">
                <p>33.6%</p>
              </div>
            </div>
            <div className="row-info">
              <p>Search</p>
              <div className="line-container">
                <hr className="line3" />
              </div>
              <div className="percentage-container">
                <p>11%</p>
              </div>
            </div>
            <div className="row-info">
              <p>External</p>
              <div className="line-container">
                <hr className="line4" />
              </div>
              <div className="percentage-container">
                <p>6%</p>
              </div>
            </div>
            <div className="row-info see-more-container">
              <a href="#">See more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
