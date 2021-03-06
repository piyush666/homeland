import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import Integration from "../images/Integration.webp";

const data = [
  {
    title: "Spot",
    content:
      " Spot trend for crime/abnormal events across geography over time.",
    Icon: SearchIcon,
  },
  {
    title: "HotSpots",
    content: "Detect Risk pattern and Hotspots",
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
      <Row className="justify-content-center mt-5 parentrow dboard-row">
        <Col xs={11} md={10}>
          <Row className="justify-content-center">
            <h2 className="appText">Situation Dashboard</h2>
          </Row>
          <hr style={{ width: "2rem", border: "1px solid white" }} />
          <Row className="justify-content-center">
            {data.map((item, i) => (
              <Card key={i} className="m-1 m-md-3 dcard">
                <Row className="dboard-dcard-row">
                  <Col xs={3} md={3} className="align-self-center">
                    <span className="dboard-Icon-span">
                      <item.Icon className="dboard-Icon" />
                    </span>
                  </Col>
                  <Col xs={8} md={9} className="dcard-content-col">
                    <h6 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      {item.title}
                    </h6>
                    <h6 style={{ fontSize: "0.9rem" }}>{item.content}</h6>
                  </Col>
                </Row>
              </Card>
            ))}
          </Row>
        </Col>
      </Row>
      <Row
        className="justify-content-center  mt-3 parentrow"
        style={{ padding: "100px 0px" }}
      >
        <Col xs={12} md={9}>
          <Row style={{ justifyContent: "flex-start" }}>
            <Card className="Intcard">
              <Card.Img
                src={Integration}
                style={{
                  borderRadius: "0.8rem",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Card>
            <Col md={4} className="align-self-center Intcard-content">
              <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>Integration</p>
              <p style={{ fontSize: "0.8rem" }}>
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
