import "./App.css";
import { Card, Avatar } from "antd";
import { Row, Col } from "antd";
import "antd/dist/antd.dark.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import sunnyDay from "./images/sunnySky.jpg";
import { WiDaySunny } from "react-icons/wi";
import { Layout } from "antd";

const { Meta } = Card;

function App() {
  return (
    <div className="App">
      <div className="both-rows">
        <Row>
          <Col span={6}>
            <Card
              className="weather-card grow"
              // cover={
              //   <img className="weather-image" alt="example" src={sunnyDay} />
              // }
              // // actions={[
              // //   <SettingOutlined key="setting" />,
              // //   <EditOutlined key="edit" />,
              // //   <EllipsisOutlined key="ellipsis" />,
              // // ]}
              onClick={() => alert("hello World")}
            >
              <Row>
                <Col span={12}>Temperature here</Col>
                <Col span={12} className="vl">
                  picture here
                </Col>
              </Row>
              <hr></hr>
              <Meta
                className="bottom-of-card"
                avatar={
                  <Avatar src={<WiDaySunny className="small-weather-icon" />} />
                }
                title="Monday"
                description="Today, it is clear skies"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              className="weather-card grow"
              cover={
                <img className="weather-image" alt="example" src={sunnyDay} />
              }
              // actions={[
              //   <SettingOutlined key="setting" />,
              //   <EditOutlined key="edit" />,
              //   <EllipsisOutlined key="ellipsis" />,
              // ]}
            >
              <Meta
                className="bottom-of-card"
                avatar={
                  <Avatar src={<WiDaySunny className="small-weather-icon" />} />
                }
                title="Tuesday"
                description="Today, it is clear skies"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              className="weather-card grow"
              cover={
                <img className="weather-image" alt="example" src={sunnyDay} />
              }
              // actions={[
              //   <SettingOutlined key="setting" />,
              //   <EditOutlined key="edit" />,
              //   <EllipsisOutlined key="ellipsis" />,
              // ]}
            >
              <Meta
                className="bottom-of-card"
                avatar={
                  <Avatar src={<WiDaySunny className="small-weather-icon" />} />
                }
                title="Wednesday"
                description="Today, it is clear skies"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              className="weather-card grow"
              cover={
                <img className="weather-image" alt="example" src={sunnyDay} />
              }
              // actions={[
              //   <SettingOutlined key="setting" />,
              //   <EditOutlined key="edit" />,
              //   <EllipsisOutlined key="ellipsis" />,
              // ]}
            >
              <Meta
                className="bottom-of-card"
                avatar={
                  <Avatar src={<WiDaySunny className="small-weather-icon" />} />
                }
                title="Thursday"
                description="Today, it is clear skies"
              />
            </Card>
          </Col>
        </Row>
        <Row className="second-row">
          <Col span={6}>
            <Card
              className="weather-card weather-card-3 grow"
              cover={
                <img className="weather-image" alt="example" src={sunnyDay} />
              }
              // actions={[
              //   <SettingOutlined key="setting" />,
              //   <EditOutlined key="edit" />,
              //   <EllipsisOutlined key="ellipsis" />,
              // ]}
            >
              <Meta
                className="bottom-of-card"
                avatar={
                  <Avatar src={<WiDaySunny className="small-weather-icon" />} />
                }
                title="Friday"
                description="Today, it is clear skies"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              className="weather-card weather-card-3 grow"
              cover={
                <img className="weather-image" alt="example" src={sunnyDay} />
              }
              // actions={[
              //   <SettingOutlined key="setting" />,
              //   <EditOutlined key="edit" />,
              //   <EllipsisOutlined key="ellipsis" />,
              // ]}
            >
              <Meta
                className="bottom-of-card"
                avatar={
                  <Avatar src={<WiDaySunny className="small-weather-icon" />} />
                }
                title="Saturday"
                description="Today, it is clear skies"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              className="weather-card weather-card-3 grow"
              cover={
                <img className="weather-image" alt="example" src={sunnyDay} />
              }
              // actions={[
              //   <SettingOutlined key="setting" />,
              //   <EditOutlined key="edit" />,
              //   <EllipsisOutlined key="ellipsis" />,
              // ]}
            >
              <Meta
                className="bottom-of-card"
                avatar={
                  <Avatar src={<WiDaySunny className="small-weather-icon" />} />
                }
                title="Sunday"
                description="Today, it is clear skies"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
