import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import Integ from "../images/Integ.png";
import SearchIcon from "@material-ui/icons/Search";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";

const data = [
  {
    title: "Spot",
    content:
      " Spot Sopt trend for crime/abormal events across geography over time.",
    Icon: SearchIcon,
  },
  {
    title: "HotSpots",
    content: " Detect Risk pattern and Hotspots",
    Icon: WifiTetheringIcon,
  },
  {
    title: "Live alret",
    content: " Live alert Count for public saftey events",
    Icon: NotificationsNoneIcon,
  },
  {
    title: "Response Time",
    content:
      " Predective Response time recommandations for public safety events",
    Icon: AccessAlarmsIcon,
  },
];

const DashBoard = () => {
  return (
    <>
      <Row className="justify-content-center mt-5 parentrow altrow">
        <Col xs={10} md={8}>
          <Row className="justify-content-center">
            <h4>Situation DashBoard</h4>
          </Row>
          <hr style={{ width: "2rem", border: "1px solid white" }} />
          <Row className="mx-0">
            {data.map((item, i) => (
              <Card key={i} style={{ width: "22rem" }} className="m-2 dcard">
                <Card.Body>
                  <Row>
                    <Col md={3} className="mr-2 mt-4">
                      <span
                        style={{
                          backgroundColor: "#EDEDEE",
                          borderRadius: "15px",
                          padding: "15px",
                          paddingTop: "25px",
                          paddingBottom: "25px",
                        }}
                      >
                        <item.Icon
                          style={{
                            fontSize: 40,
                            color: "black",
                          }}
                        />
                      </span>
                    </Col>
                    <Col md={8} className="mt-3">
                      {item.title}
                      <br />
                      <small>{item.content}</small>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center  mt-3 parentrow">
        <Col xs={10} md={8}>
          <Row>
            <Col xs={3} md={4}>
              <Card className="mr-md-5 pcard">
                <Card.Img variant="top" src={Integ} style={{  borderRadius: '1rem' }} />
              </Card>
            </Col>
            <Col
              xs={3}
              md={4}
              className="align-self-center"
              style={{ borderLeft: "2px solid #2C78B3" }}
            >
              <p style={{ fontSize: 35 }}>
                <strong>Integration</strong>
              </p>
              <p style={{ fontSize: 15 }}>
                Integrates with your notification system(mail, sms, buzzer etc){" "}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default DashBoard;
