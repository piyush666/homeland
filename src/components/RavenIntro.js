import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import DesktopMacOutlinedIcon from "@material-ui/icons/DesktopMacOutlined";
import CameraIcon from "@material-ui/icons/Camera";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

const RavenIntro = () => {
  return (
    <Row className="justify-content-center parentrow">
      <Col md={10}>
        <Row className="justify-content-center text-center mt-2">
          <h2> Raven | Homeland</h2>
        </Row>
        <Row className="justify-content-center text-center mb-2">
          <h4>(Real-time AI based Video analytics Engine)</h4>
        </Row>
        <Row className="justify-content-center ">
          <Col>
            <Card className="my-2 text-center pcard">
              <Card.Body>
                <Card.Text className="m-3">
                  <DesktopMacOutlinedIcon style={{ fontSize: 60 }} />
                </Card.Text>
                <Card.Text className="m-3" style={{ fontSize: 15 }}>
                  AI algorithm for automated public safety events detection in
                  real-time
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-2 text-center pcard ">
              <Card.Body>
                <Card.Text className="text-center m-3">
                  <CameraIcon style={{ fontSize: 60 }} />
                </Card.Text>
                <Card.Text className="m-3" style={{ fontSize: 15 }}>
                  Improve clearance rate & reduce response time to crime
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-2 text-center pcard">
              <Card.Body>
                <Card.Text className="text-center m-3">
                  <SettingsOutlinedIcon style={{ fontSize: 60 }} />
                </Card.Text>
                <Card.Text className="m-3" style={{ fontSize: 15 }}>
                  Raven works seamlessly with your existing CCTV cameras
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Button style={{ borderRadius: "40px" }}>Request Demo</Button>
        </Row>
      </Col>
    </Row>
  );
};
export default RavenIntro;
