import React, { useEffect, useState } from "react";

import fromUnixTime from "date-fns/fromUnixTime";
import format from "date-fns/format";
import dotenv from "dotenv";
import "./App.css";
import { Card, Avatar } from "antd";
import { Row, Col } from "antd";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./details.css";
import { WiDayFog, WiDaySunny } from "react-icons/wi";
import { WiDaySleetStorm } from "react-icons/wi";
import { WiDayRain } from "react-icons/wi";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { WiDayThunderstorm } from "react-icons/wi";
import { Link } from "react-router-dom";
import Geocode from "react-geocode";
const axios = require("axios").default;

dotenv.config();
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

function Days() {
  const [headerTitle, setHeaderTitle] = useState("");
  const [cityState, setCityState] = useState("");
  const [dayData, setDayData] = useState([]);
  const [isSearching, setIsSearching] = useState(true);
  const [isLandingPage, setIsLandingPage] = useState(true);
  const [isHourly, setIsHourly] = useState(false);
  const [hourlyData, setHourlyData] = useState([]);

  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
  const handleSubmit = async function (event) {
    setIsLandingPage(false);

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
          });
      },
      (error) => {
        console.error(error);
      }
    );

    setHeaderTitle(cityState);
  };
  const renderLandingPage = () => {
    return (
      <div className="landingPage">
        {" "}
        <h1>Enter City and State</h1>
      </div>
    );
  };
  const renderInput = () => {
    return (
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
    );
  };

  const handleHourlyData = async function () {
    console.log(1);
    setIsSearching(false);
    setDayData([]);
    setHeaderTitle(false);
    setIsHourly(true);
    console.log(2);
    await Geocode.fromAddress(cityState).then(
      (response) => {
        console.log(3);
        const lat = response.results[0].geometry.location.lat;
        const long = response.results[0].geometry.location.lng;
        console.log(lat, long);
        console.log(4);
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
          )
          .then((answer) => {
            let objectArray = Object.entries(answer);
            console.log(objectArray);
            let data = [];
            objectArray.forEach(([key, value]) => {
              data.push(value);
            });
            console.log(data[0].list);
            setHourlyData(data[0].list);
            setHeaderTitle(headerTitle);
            console.log(hourlyData);
          });
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(6);
  };

  const renderRows = (data) => {
    return (
      <div>
        <Row className="details-row" key={data.dt}>
          <Col span={2}>{format(fromUnixTime(data.dt), "M/d EEEEEE HHmm")}</Col>
          <Col span={8}>{data.main.temp}</Col>
          <Col span={8}>{data.weather[0].main}</Col>
        </Row>
      </div>
    );
  };

  const renderHourlyData = (data) => {
    console.log(7);
    // console.log(hourlyData);
    console.log(8);
    return (
      <div className="row-container">
        <Layout>
          <Sider>
            <Row className="home-btn">
              <button>Home</button>
            </Row>
            <hr></hr>
            {/* <Row className="day-btn">
              <button>Monday</button>
            </Row>
            <Row className="day-btn">
              <button>Tuesday</button>
            </Row>
            <Row className="day-btn">
              <button>Wednesday</button>
            </Row>
            <Row className="day-btn">
              <button>Thursday</button>
            </Row>
            <Row className="day-btn">
              <button>Friday</button>
            </Row>
            <Row className="day-btn">
              <button>Saturday</button>
            </Row>
            <Row className="day-btn">
              <button>Sunday</button>
            </Row> */}
          </Sider>
          <Layout>
            <Row>
              <Header>{headerTitle}</Header>
            </Row>
            <Content>
              <Row>
                <Col span={21}>{hourlyData.map(renderRows)}</Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  };

  const renderCard = (data) => {
    console.log(data);
    return (
      <Col span={6} key={data.dt}>
        {/* <Link to="/Pages/expanded_details" onClick={hourlyData}> */}
        <Card className="weather-card grow" onClick={handleHourlyData}>
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
        {/* </Link> */}
      </Col>
    );
  };
  return (
    <div className="App">
      {isLandingPage ? renderLandingPage() : null}
      <h1 className="city-header">{headerTitle}</h1>
      {isSearching ? renderInput() : null}
      <div className="both-rows">
        <Row>{dayData.map(renderCard)}</Row>
      </div>
      {isHourly ? renderHourlyData() : null}
    </div>
  );
}

export default Days;
