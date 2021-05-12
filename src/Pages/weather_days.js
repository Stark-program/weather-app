import React, { useEffect, useState } from "react";

import fromUnixTime from "date-fns/fromUnixTime";
import format from "date-fns/format";
import dotenv from "dotenv";
import "./App.css";
import { Card, Avatar } from "antd";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { WiDayFog, WiDaySunny } from "react-icons/wi";
import { WiDaySleetStorm } from "react-icons/wi";
import { WiDayRain } from "react-icons/wi";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { WiDayThunderstorm } from "react-icons/wi";
import { Link } from "react-router-dom";
import Geocode from "react-geocode";
const axios = require("axios").default;

dotenv.config();

const { Meta } = Card;

function Days() {
  const [headerTitle, setHeaderTitle] = useState("");
  const [cityState, setCityState] = useState("");
  const [dayData, setDayData] = useState([]);

  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

  const handleSubmit = async function (event) {
    event.preventDefault();
    await Geocode.fromAddress(cityState).then(
      (response) => {
        // console.log(headerTitle);
        // const { lat, lng } = response.results[0].geometry.location;
        const lat = response.results[0].geometry.location.lat;
        const long = response.results[0].geometry.location.lng;
        console.log(lat, long);

        const weather = axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=hourly,minutely{part}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
          )
          .then((answer) => {
            setDayData(answer.data.daily);
            console.log(answer.data);
          });
      },
      (error) => {
        console.error(error);
      }
    );

    setHeaderTitle(cityState);
  };

  const getDate = () => {};
  getDate();

  const renderCard = (data) => {
    console.log(data);
    return (
      <Col span={6} key={data.dt}>
        <Link to="/Pages/expanded_details">
          <Card className="weather-card grow">
            <Row className="row-background">
              <Col span={12}>
                <div className="temperature">
                  {data.temp.day}
                  {"\u00B0"}
                </div>
              </Col>
              <Col span={12} className="vl">
                <div className="image-section">
                  {
                    <img
                      src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                      className="day_to_day_image"
                    />
                  }
                </div>
              </Col>
            </Row>
            <hr className="line-seperation"></hr>
            <Row>
              <Col span={18}>
                <Meta
                  className="bottom-of-card"
                  avatar={
                    <Avatar
                      src={
                        <img
                          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                          className="small-weather-icon"
                        />
                      }
                    />
                  }
                  title={format(fromUnixTime(data.dt), "EEEE")}
                  description={data.weather[0].description}
                />
              </Col>
              <Col span={6}>
                <div className="bottom-of-card-date">
                  {format(fromUnixTime(data.dt), "M/d")}
                </div>
              </Col>
            </Row>
          </Card>
        </Link>
      </Col>
    );
  };
  return (
    <div className="App">
      <h1 className="city-header">{headerTitle}</h1>
      <div className="city-search-div">
        <form className="search-form" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              className="city-search-input"
              placeholder="Search for your city here...(city, state)"
              value={cityState}
              onChange={(e) => setCityState(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" className="city-search-btn" />
        </form>
      </div>
      <div className="both-rows">
        <Row>{dayData.map(renderCard)}</Row>
      </div>
    </div>
  );
}

export default Days;
