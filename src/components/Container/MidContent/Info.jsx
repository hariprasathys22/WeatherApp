import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { BsCloudHaze2 } from "react-icons/bs";
import "./Info.css";

const Info = ({currentWindSpeed, humidity, pressures, temparature}) => {
  return (
    <div className="info-container">
      <div className="info-head">
        <div className="info-head-overview">
          <p>Today overview</p>
        </div>
        <div className="moredetail">
          <a href="#">More detail</a>
          <BsArrowRightShort className="asa" />
        </div>
      </div>
      <div className="weather-contain">
        <div className="wind-speed-we">
          <div className="info-logo">
            <BsCloudHaze2 className="ios" />
          </div>
          <div className="wind-speed-meter">
            <div className="speed-text">
              <p className="speed-para">Wind Speed</p>
            </div>
            <div className="speed-km">
              <h2 className="speed-headkm-head">{currentWindSpeed}km/h</h2>
            </div>
          </div>
          
        </div>
        <div className="wind-speed-we">
          <div className="info-logo">
            <BsCloudHaze2 className="ios" />
          </div>
          <div className="wind-speed-meter">
            <div className="speed-text">
              <p className="speed-para">Humidity</p>
            </div>
            <div className="speed-km">
              <h2 className="speed-headkm-head">{humidity}%</h2>
            </div>
          </div>
         
        </div>
        <div className="wind-speed-we">
          <div className="info-logo">
            <BsCloudHaze2 className="ios" />
          </div>
          <div className="wind-speed-meter">
            <div className="speed-text">
              <p className="speed-para">Pressure</p>
            </div>
            <div className="speed-km">
              <h2 className="speed-headkm-head">{pressures}hpa</h2>
            </div>
          </div>
          
        </div>
        <div className="wind-speed-we">
          <div className="info-logo">
            <BsCloudHaze2 className="ios" />
          </div>
          <div className="wind-speed-meter">
            <div className="speed-text">
              <p className="speed-para">Uv Index</p>
            </div>
            <div className="speed-km">
              <h2 className="speed-headkm-head">{temparature}°C</h2>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Info;
