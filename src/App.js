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

const { Meta } = Card;

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={6}>
          <Card
            className="weather-card"
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
              title="Monday"
              description="Today, it is clear skies"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="weather-card"
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
            className="weather-card"
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
            className="weather-card"
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
        <Col span={8}>
          <Card
            className="weather-card"
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
        <Col span={8}>
          <Card
            className="weather-card"
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
        <Col span={8}>
          <Card
            className="weather-card"
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
  );
}

export default App;
