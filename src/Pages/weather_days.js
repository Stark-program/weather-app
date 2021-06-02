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
import Geocode from "react-geocode";
const axios = require("axios").default;

dotenv.config();
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

function Days() {
  const [headerTitle, setHeaderTitle] = useState("");
  const [cityState, setCityState] = useState("");
  const [placeholder, setPlaceholder] = useState(
    "Search for your city here...(city, state)"
  );
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

        const weather = axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=hourly,minutely{part}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
          )
          .then((answer) => {
            Geocode.fromLatLng(lat, long).then(
              (response) => {
                const addressData = response.results[0].address_components;

                for (let i = 0; i < addressData.length; i++) {
                  if (addressData[i].types[0] == "locality") {
                    console.log(addressData[i].long_name);
                  }
                }

                const location = response.results[0].formatted_address;
                console.log(addressData);
                setHeaderTitle(location);
              },
              (error) => {
                alert("Input Not Valid");
                console.log(error);
              }
            );

            setDayData(answer.data.daily);
          });
      },
      (error) => {
        console.error(error);
      }
    );
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
              placeholder={placeholder}
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
    setIsSearching(false);
    setDayData([]);
    setHeaderTitle(false);
    setIsHourly(true);

    await Geocode.fromAddress(cityState).then(
      (response) => {
        const lat = response.results[0].geometry.location.lat;
        const long = response.results[0].geometry.location.lng;

        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
          )
          .then((answer) => {
            let objectArray = Object.entries(answer);

            let data = [];
            objectArray.forEach(([key, value]) => {
              data.push(value);
            });

            setHourlyData(data[0].list);
            // setHeaderTitle(headerTitle);
          });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const renderRows = (data) => {
    return (
      <div>
        <Row className="details-row" key={data.dt}>
          <Col span={2}>{format(fromUnixTime(data.dt), "M/d EEEE")}</Col>
          <Col span={3}>{format(fromUnixTime(data.dt), "HHmm")}</Col>
          <Col span={3}>{data.main.temp}</Col>
          <Col span={3}>{data.weather[0].main}</Col>
        </Row>
      </div>
    );
  };

  const clearInputField = () => {
    setPlaceholder("");
  };

  const renderHourlyData = (data) => {
    return (
      <div className="row-container">
        <Layout>
          <Sider>
            <Row className="home-btn">
              <button
                onClick={() => {
                  setCityState("");
                  setPlaceholder(placeholder);
                  setIsHourly(false);
                  setIsLandingPage(true);
                  setIsSearching(true);
                  setHeaderTitle(false);
                }}
              >
                Home
              </button>
            </Row>
          </Sider>
          <Layout>
            <Row>
              <Header>{headerTitle}</Header>
            </Row>
            <Content>
              <Row>
                <Col span={2}>Date</Col>
                <Col span={3}>Time</Col>
                <Col span={3}>Temperature</Col>
                <Col span={3}>Conditions</Col>
              </Row>
              <hr className="hourly-content-line"></hr>
              <Row>
                <Col span={24} className="hourly-content">
                  {hourlyData.map(renderRows)}
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  };

  const renderCard = (data) => {
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
        <Row className="below-card">Click card for a 5 day 3 hour forecast</Row>
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
