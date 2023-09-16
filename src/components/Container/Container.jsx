import React, { useState, useEffect } from "react";
import "./Container.css";
import TopContainer from "./top-container/TopContainer";
import Info from "./MidContent/Info";
import axios from "axios";

const Container = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentWindSpeed, setCurrentWindSpeed] = useState(null);
  const [prevWindSpeed, setPrevWindSpeed] = useState(null);
  const [rateOfChange, setRateOfChange] = useState(null); // New state to hold rate of change

  const [rainChance, setRainChance] = useState(0)

  useEffect(() => {
    const apiKey = "ea4c44a9a8632d9e7c12a667bae5df78";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=coimbatore&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        const newWindSpeed = response.data.wind.speed;

        if (prevWindSpeed !== null) {
          // Calculate the rate of change
          const newRateOfChange = newWindSpeed - prevWindSpeed;
          setRateOfChange(newRateOfChange); // Set the rate of change state
          setCurrentWindSpeed(newWindSpeed);
          setPrevWindSpeed(prevWindSpeed);
        } else {
          setCurrentWindSpeed(newWindSpeed);
          setPrevWindSpeed(newWindSpeed);
        }

        setWeatherData(response.data);
        setLoading(false);
        if (response.data.list[0].rain) {
          setRainChance(response.data.list[0].rain["3h"]); // Get the 3-hour rain volume
        }




      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [prevWindSpeed]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <TopContainer />
      <hr size="1" />
      <Info data={weatherData} currentWindSpeed={currentWindSpeed} rateOfChange={rateOfChange} rainChance={rainChance}/> {/* Pass rateOfChange as a prop */}
    </div>
  );
};

export default Container;
