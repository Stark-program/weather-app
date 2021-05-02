import { Row, Col } from "antd";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./details.css";

const { Header, Footer, Sider, Content } = Layout;
function Details() {
  return (
    <div className="row-container">
      <Layout>
        <Sider>
          <Row className="home-btn">Home</Row>
          <hr></hr>
          <Row className="day-btn">Monday</Row>
          <Row className="day-btn"> Tuesday</Row>
          <Row className="day-btn">Wednesday</Row>
          <Row className="day-btn">Thursday</Row>
          <Row className="day-btn">Friday</Row>
          <Row className="day-btn">Saturday</Row>
          <Row className="day-btn">Sunday</Row>
        </Sider>
        <Layout>
          <Header>Location</Header>
          <Content>
            <Row>
              <Col span={24}>
                <Row className="details-row">1</Row>
                <Row className="details-row">2</Row>
                <Row className="details-row">3</Row>
                <Row className="details-row">4</Row>
                <Row className="details-row">5</Row>
                <Row className="details-row">6</Row>
                <Row className="details-row">1</Row>
                <Row className="details-row">2</Row>
                <Row className="details-row">3</Row>
                <Row className="details-row">4</Row>
                <Row className="details-row">5</Row>
                <Row className="details-row">6</Row>
                <Row className="details-row">1</Row>
                <Row className="details-row">2</Row>
                <Row className="details-row">3</Row>
                <Row className="details-row">4</Row>
                <Row className="details-row">5</Row>
                <Row className="details-row">6</Row>
                <Row className="details-row">1</Row>
                <Row className="details-row">2</Row>
                <Row className="details-row">3</Row>
                <Row className="details-row">4</Row>
                <Row className="details-row">5</Row>
                <Row className="details-row">6</Row>
              </Col>
            </Row>
          </Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    </div>
  );
}

export default Details;
