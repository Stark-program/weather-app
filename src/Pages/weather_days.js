import React, { useState } from "react";
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

const { Meta } = Card;

function Days() {
  const [cityState, setCityState] = useState({ name: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Sumbitting Name" + { cityState });
  };
  const set = (name) => {
    return ({ target: { value } }) => {
      setCityState((oldName) => ({ ...oldName, [name]: value }));
    };
  };

  return (
    <div className="App">
      <h1 className="city-header">{cityState.name}</h1>
      <div className="city-search-div">
        <form className="search-form" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              className="city-search-input"
              placeholder="Search for your city here...(city, state)"
              value={cityState.name}
              onChange={set("name")}
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
                    <div className="temperature">92{"\u00B0"}</div>
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
                  title="Monday"
                  description="Today, it is clear skies"
                />
              </Card>
            </Link>
          </Col>
          {
            <Col span={6}>
              <Link to="/Pages/expanded_details">
                <Card className="weather-card grow">
                  <Row className="row-background">
                    <Col span={12}>
                      <div className="temperature">79{"\u00B0"}</div>
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
                      <div className="temperature">68{"\u00B0"}</div>
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
                    <div className="temperature">61{"\u00B0"}</div>
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
                    <div className="temperature">96{"\u00B0"}</div>
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
                    <div className="temperature">56{"\u00B0"}</div>
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
                    <div className="temperature">51{"\u00B0"}</div>
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
