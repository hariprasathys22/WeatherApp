import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { BsCloudHaze2 } from "react-icons/bs";
import "./Info.css";

const Info = ({data, rateOfChange, currentWindSpeed, rainChance}) => {
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
          <div className="speed-flow">
            <AiOutlineCaretDown className="ios1" />

           {rateOfChange !== null && (
               <p className="speed-flow-hr">{rateOfChange}</p>
            )}
          </div>
        </div>
        <div className="wind-speed-we">
          <div className="info-logo">
            <BsCloudHaze2 className="ios" />
          </div>
          <div className="wind-speed-meter">
            <div className="speed-text">
              <p className="speed-para">Rain Chanse</p>
            </div>
            <div className="speed-km">
              <h2 className="speed-headkm-head">{rainChance}%</h2>
            </div>
          </div>
          <div className="speed-flow">
            <AiOutlineCaretDown className="ios1" />

            <p className="speed-flow-hr">10%</p>
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
              <h2 className="speed-headkm-head">720 hpa</h2>
            </div>
          </div>
          <div className="speed-flow">
            <AiOutlineCaretDown className="ios1" />

            <p className="speed-flow-hr">32 hpa</p>
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
              <h2 className="speed-headkm-head">2,3</h2>
            </div>
          </div>
          <div className="speed-flow">
            <AiOutlineCaretDown className="ios1" />

            <p className="speed-flow-hr">0,3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
