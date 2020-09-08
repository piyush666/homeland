import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import DesktopMacOutlinedIcon from "@material-ui/icons/DesktopMacOutlined";
import CameraIcon from "@material-ui/icons/Camera";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

const RavenIntro = () => {
  return (
    <Row
      className="justify-content-center parentrow"
      style={{ padding: "100px 0px" }}
    >
      <Col md={10}>
        <Row className=" appText justify-content-center text-center">
          <h2 style={{ fontSize: "50px" }}>
            <b> RAVEN | Homeland </b>
          </h2>
        </Row>
        <Row className="justify-content-center text-center">
          <h2 className="appText">
            (Real-time AI based Video analytics Engine)
          </h2>
        </Row>
        <Row style={{ justifyContent: "space-evenly", marginTop: "2rem" }}>
          <Card className="my-2 text-center pcard">
            <Card.Body style={{ paddingTop: "3rem" }}>
              <Card.Text>
                <DesktopMacOutlinedIcon style={{ fontSize: "70px" }} />
              </Card.Text>
              <Card.Text className="mt-4 p-1" style={{ fontSize: "20px" }}>
                AI algorithm for automated public safety events detection in
                real-time
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-2 text-center pcard ">
            <Card.Body style={{ paddingTop: "3rem" }}>
              <Card.Text>
                <CameraIcon style={{ fontSize: "70px" }} />
              </Card.Text>
              <Card.Text className="mt-4 p-1" style={{ fontSize: "20px" }}>
                Improve clearance rate & reduce
                <br />
                response time to crime
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-2 text-center pcard">
            <Card.Body style={{ paddingTop: "3rem" }}>
              <Card.Text>
                <SettingsOutlinedIcon style={{ fontSize: "70px" }} />
              </Card.Text>
              <Card.Text className="mt-4 p-1" style={{ fontSize: "20px" }}>
                Raven works seamlessly with your <br /> existing CCTV cameras
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-center mt-4">
          <Button
            style={{
              borderRadius: "40px",
              padding: "20px 36px",
            }}
          >
            Request Demo
          </Button>
        </Row>
      </Col>
    </Row>
  );
};
export default RavenIntro;
