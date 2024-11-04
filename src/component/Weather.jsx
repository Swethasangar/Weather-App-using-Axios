import one from "../assests/Images/clear.png";
import two from "../assests/Images/clouds.png";
import three from "../assests/Images/drizzle.png";
import four from "../assests/Images/mist.png";
import five from "../assests/Images/rain.png";
import six from "../assests/Images/snow.png";

import { useState } from "react";
import axios from "axios";
function Weatherapp() {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState("");
  const [temp, settemp] = useState("");
  const [desc, setdesc] = useState("");
  const [wicon, setwicon] = useState("");
  const handleChange = (eve) => {
    setcity(eve.target.value);
  };
  const getWeather = () => {
    let weatherData = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=178d608dc954698a9a39780b239b5d80`
    );
    weatherData.then(function (wdata) {
      setweather(wdata.data.weather[0].main);
      settemp(wdata.data.main.temp);
      setdesc(wdata.data.weather[0].description);
      if (wdata.data.weather[0].main === "Clear") {
        setwicon(<img src={one} alt="Clear" className="w-24"/>);
      } else if (wdata.data.weather[0].main === "Clouds") {
        setwicon(<img src={two} alt="Clouds" className="w-24" />);
      } else if (wdata.data.weather[0].main === "Drizzle") {
        setwicon(<img src={three} alt="Drizzle" className="w-24" />);
      } else if (wdata.data.weather[0].main === "Mist") {
        setwicon(<img src={four} alt="Mist" className="w-24" />);
      } else if (wdata.data.weather[0].main === "Rain") {
        setwicon(<img src={five} alt="Rain" className="w-24" />);
      } else if (wdata.data.weather[0].main === "Snow") {
        setwicon(<img src={six} alt="Snow" className="w-24" />);
      }
    });
  };
  return (
    <>
      <section className="container">
        <div className="box">
          <h1 className="mt-1 font-medium md:text-2xl">Weather Report</h1>
          <p className="mt-1 md:text-lg">
            Hi, Enter your city here to see the weather report!
          </p>
          <input
            type="text"
            placeholder="Enter Your City Name"
            className="mt-1"
            onChange={handleChange}
          ></input>
          <br></br>
          <button className="mt-2" onClick={getWeather}>
            Get Report
          </button>
          <p className="mt-2">{wicon}</p>
          <p className="mt-2">
            <b>Weather:</b> {weather}
          </p>
          <p>
            <b>Temperature:</b> {temp}
          </p>
          <p>
            <b>Description:</b> {desc}
          </p>
        </div>
      </section>
    </>
  );
}
export default Weatherapp;
