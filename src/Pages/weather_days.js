import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
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
  const [mondayTempState, setMondayTempState] = useState("");
  const [tuesdayTempState, setTuesdayTempState] = useState("");
  const [wednesdayTempState, setWednesdayTempState] = useState("");
  const [thursdayTempState, setThursdayTempState] = useState("");
  const [fridayTempState, setFridayTempState] = useState("");
  const [saturdayTempState, setSaturdayTempState] = useState("");
  const [sundayTempState, setSundayTempState] = useState("");
  const [date, setDate] = useState(new Date());

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
            const currentWeather = answer.data.current.weather[0].main;
            const currentTemp = answer.data.current.temp;
            const mondayTemp = answer.data.daily[0].temp.day;

            console.log(mondayTemp);
            setMondayTempState(mondayTemp);
          });
      },
      (error) => {
        console.error(error);
      }
    );

    setHeaderTitle(cityState);
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
        <Row>
          <Col span={6}>
            <Link to="/Pages/expanded_details">
              <Card className="weather-card grow">
                <Row className="row-background">
                  <Col span={12}>
                    <div className="temperature">
                      {mondayTempState}
                      {"\u00B0"}
                    </div>
                  </Col>
                  <Col span={12} className="vl">
                    <div className="image-section">
                      {<WiDaySunny className="day_to_day_image" />}
                    </div>
                  </Col>
                </Row>
                <hr className="line-seperation"></hr>
                <Row>
                  <Col span={20}>
                    <Meta
                      className="bottom-of-card"
                      avatar={
                        <Avatar
                          src={<WiDaySunny className="small-weather-icon" />}
                        />
                      }
                      title="Monday"
                      description="Today, it is clear skies"
                    />
                  </Col>
                  <Col span={4}>
                    <div className="bottom-of-card-date">
                      <DatePicker
                        onChange={setDate}
                        value={date}
                        format="MM/dd"
                        disableCalendar="true"
                        disabled="true"
                        clearIcon={null}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Link>
          </Col>
          {
            <Col span={6}>
              <Link to="/Pages/expanded_details">
                <Card className="weather-card grow">
                  <Row className="row-background">
                    <Col span={12}>
                      <div className="temperature">
                        {tuesdayTempState}
                        {"\u00B0"}
                      </div>
                    </Col>
                    <Col span={12} className="vl">
                      <div className="image-section">
                        {<WiDaySunnyOvercast className="day_to_day_image" />}
                      </div>
                    </Col>
                  </Row>
                  <hr className="line-seperation"></hr>
                  <Meta
                    className="bottom-of-card"
                    avatar={
                      <Avatar
                        src={
                          <WiDaySunnyOvercast className="small-weather-icon" />
                        }
                      />
                    }
                    title="Tuesday"
                    description="Today, expect some clouds"
                  />
                </Card>
              </Link>
            </Col>
          }
          {
            <Col span={6}>
              <Link to="/Pages/expanded_details">
                <Card className="weather-card grow">
                  <Row className="row-background">
                    <Col span={12}>
                      <div className="temperature">
                        {wednesdayTempState}
                        {"\u00B0"}
                      </div>
                    </Col>
                    <Col span={12} className="vl">
                      <div className="image-section">
                        {<WiDayThunderstorm className="day_to_day_image" />}
                      </div>
                    </Col>
                  </Row>
                  <hr className="line-seperation"></hr>
                  <Meta
                    className="bottom-of-card"
                    avatar={
                      <Avatar
                        src={
                          <WiDayThunderstorm className="small-weather-icon" />
                        }
                      />
                    }
                    title="Wednesday"
                    description="Today, expect rain and thunderstorms"
                  />
                </Card>
              </Link>
            </Col>
          }
          <Col span={6}>
            <Link to="/Pages/expanded_details">
              <Card className="weather-card grow">
                <Row className="row-background">
                  <Col span={12}>
                    <div className="temperature">
                      {thursdayTempState}
                      {"\u00B0"}
                    </div>
                  </Col>
                  <Col span={12} className="vl">
                    <div className="image-section">
                      {<WiDayRain className="day_to_day_image" />}
                    </div>
                  </Col>
                </Row>
                <hr className="line-seperation"></hr>
                <Meta
                  className="bottom-of-card"
                  avatar={
                    <Avatar
                      src={<WiDayRain className="small-weather-icon" />}
                    />
                  }
                  title="Thursday"
                  description="Today, expect rain throughout the day"
                />
              </Card>
            </Link>
          </Col>
        </Row>
        <Row className="second-row">
          <Col span={6}>
            <Link to="/Pages/expanded_details">
              <Card className="weather-card grow">
                <Row className="row-background">
                  <Col span={12}>
                    <div className="temperature">
                      {fridayTempState}
                      {"\u00B0"}
                    </div>
                  </Col>
                  <Col span={12} className="vl">
                    <div className="image-section">
                      {<WiDaySunny className="day_to_day_image" />}
                    </div>
                  </Col>
                </Row>
                <hr className="line-seperation"></hr>
                <Meta
                  className="bottom-of-card"
                  avatar={
                    <Avatar
                      src={<WiDaySunny className="small-weather-icon" />}
                    />
                  }
                  title="Friday"
                  description="Today, it is clear skies"
                />
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            <Link to="/Pages/expanded_details">
              <Card className="weather-card grow">
                <Row className="row-background">
                  <Col span={12}>
                    <div className="temperature">
                      {saturdayTempState}
                      {"\u00B0"}
                    </div>
                  </Col>
                  <Col span={12} className="vl">
                    <div className="image-section">
                      {<WiDaySleetStorm className="day_to_day_image" />}
                    </div>
                  </Col>
                </Row>
                <hr className="line-seperation"></hr>
                <Meta
                  className="bottom-of-card"
                  avatar={
                    <Avatar
                      src={<WiDaySleetStorm className="small-weather-icon" />}
                    />
                  }
                  title="Saturday"
                  description="Today, expect rain and thunderstorms"
                />
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            <Link to="/Pages/expanded_details">
              <Card className="weather-card grow">
                <Row className="row-background">
                  <Col span={12}>
                    <div className="temperature">
                      {sundayTempState}
                      {"\u00B0"}
                    </div>
                  </Col>
                  <Col span={12} className="vl">
                    <div className="image-section">
                      {<WiDayFog className="day_to_day_image" />}
                    </div>
                  </Col>
                </Row>
                <hr className="line-seperation"></hr>
                <Meta
                  className="bottom-of-card"
                  avatar={
                    <Avatar src={<WiDayFog className="small-weather-icon" />} />
                  }
                  title="Sunday"
                  description="Today, it will be a bit foggy"
                />
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Days;
