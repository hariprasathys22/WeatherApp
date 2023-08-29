import React from "react";
import { CiBellOn, CiUser } from "react-icons/ci";
import "./TopContainer.css";
const TopContainer = () => {

    const dataBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let monthFull = months[d.getMonth()];
        let monthShort = monthsShort[d.getMonth()]
        let year = d.getFullYear();
    
        return {
            heading: `${monthFull} ${year}`,
            paragraph: `${day}, ${monthShort} ${date}, ${year}`
        };
    }
    
    const currentDate = new Date();
    const formattedData = dataBuilder(currentDate);
    
  return (
    <div className="top-container">
      <div className="date">
        <h2 className="head-text">{formattedData.heading}</h2>
        <p className="p-text">{formattedData.paragraph}</p>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search location here"
        />
      </div>
      <div className="icons-container">
        <button><CiBellOn /></button>
        <button><CiUser /></button>
      </div>
    </div>
  );
};

export default TopContainer;
