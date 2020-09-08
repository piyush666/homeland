import React, { Component } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const carouselSlidesData = [
  {
    title: "Vandalism",
    content: "Raven Works seamlessly with your existing CCTV cameras.",
    index: "01",
  },
  {
    title: "Accidents",
    content: "Raven Works seamlessly with your existing CCTV cameras.",
    index: "02",
  },
  {
    title: "Crime",
    content: "Raven Works seamlessly with your existing CCTV cameras.",
    index: "03",
  },
];

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      secondIndex: 1,
      slides: carouselSlidesData,
    };
    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }
  goToSlide(index) {
    this.setState({
      activeIndex: index,
      secondIndex: (index + 1) % (this.state.slides.length - 1),
    });
  }
  goToPrevSlide() {
    let index = this.state.activeIndex;
    let slides = this.state.slides;
    let next = index;
    if (index < 1) index = slides.length;

    index--;

    this.setState({ activeIndex: index, secondIndex: next });
  }
  goToNextSlide() {
    let slides = this.state.slides;
    let activeIndex = this.state.secondIndex;
    let next = (this.state.secondIndex + 1) % slides.length;

    this.setState({ activeIndex, secondIndex: next });
  }
  render() {
    return (
      <Row
        className="justify-content-center parentrow altrow"
        style={{ padding: "150px 0px 90px" }}
      >
        <Col md={9}>
          <Row>
            <Col
              md={8}
              style={{
                fontFamily: "Raleway, Helvetica, Arial, Lucida, sans-serif",
              }}
            >
              <Row>
                <Col xs={12} md={8}>
                  <h2 style={{ fontSize: "60px", fontWeight: "900" }}>
                    How can we help?
                  </h2>

                  <h2 className="appText" style={{ textAlign: "start" }}>
                    Detect Risks in real time
                  </h2>
                </Col>
                <Col className="" style={{ alignSelf: "flex-end" }} xs={3}>
                  <h2
                    style={{
                      fontSize: "60px",
                      fontWeight: "900",
                      opacity: "0.1",
                    }}
                  >
                    Events
                  </h2>
                </Col>
              </Row>
            </Col>
            <Col md={3} className="align-self-end ml-5 text-center">
              <Button
                variant="light"
                onClick={this.goToPrevSlide}
                className="mr-2"
              >
                <ArrowBackIcon />
              </Button>
              <Button variant="light" onClick={this.goToNextSlide}>
                <ArrowForwardIcon />
              </Button>
            </Col>
          </Row>
          <Row className="mt-md-4 mt-3">
            <div id="playbtn">
              <span>
                <PlayArrowIcon />
              </span>
            </div>
            <Col md={8} style={{ zIndex: 1 }}>
              <SwitchTransition>
                <CSSTransition
                  key={this.state.activeIndex}
                  addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                  }
                  classNames="myActiveEvent"
                  timeout={{ enter: 500, exit: 300 }}
                >
                  <Card
                    className="eventActivecard"
                    onClick={() => this.goToSlide(this.state.activeIndex)}
                    /* style={{ height: "16rem", fontSize: 22 }} */
                  >
                    <Row className="no-gutters eventCardRow">
                      <Col xs={1}>
                        <FiberManualRecordIcon
                          className="ml-2 ml-md-4"
                          style={{ fontSize: "1.4rem" }}
                        />
                      </Col>
                      <Col xs={8}>
                        <h2 className="ml-3  eventCardH2">
                          <span className="eventCardH2-Span">
                            {this.state.slides[this.state.activeIndex].index}
                          </span>

                          {"  "}
                          {this.state.slides[this.state.activeIndex].title}
                        </h2>

                        <Card.Text className="mt-4 ml-3 mt-md-5 eventCardText">
                          {this.state.slides[this.state.activeIndex].content}
                        </Card.Text>
                        <Button
                          className="mt-3 ml-3 eventCardText"
                          variant="outline-light"
                        >
                          Read More
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </CSSTransition>
              </SwitchTransition>
            </Col>
            <Col
              md={3}
              className="align-self-center eventSecCol"
              style={{ zIndex: 1 }}
            >
              <SwitchTransition>
                <CSSTransition
                  key={this.state.secondIndex}
                  addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                  }
                  classNames="my2ndActiveEvent"
                  timeout={{ enter: 500, exit: 300 }}
                >
                  <Card
                    className="eventSecCard"
                    onClick={() => this.goToSlide(this.state.secondIndex)}
                    /* style={{ height: "12rem", fontSize: 12 }} */
                  >
                    <Row className="no-gutters eventCardRow">
                      <Col xs={1}>
                        <FiberManualRecordIcon
                          className="mt-3 ml-1 ml-md-3"
                          style={{ fontSize: "1.1rem" }}
                        />
                      </Col>
                      <Col xs={8} className="ml-3">
                        <h2
                          className="mt-2 ml-1"
                          style={{
                            fontSize: "25px",
                            fontWeight: 700,
                          }}
                        >
                          <span
                            style={{
                              fontSize: "30px",
                              fontWeight: 900,
                              opacity: 0.2,
                            }}
                          >
                            {this.state.slides[this.state.secondIndex].index}
                          </span>
                          {"  "}
                          {this.state.slides[this.state.secondIndex].title}
                        </h2>

                        <Card.Text className="mt-4 ml-1">
                          {this.state.slides[this.state.secondIndex].content}
                        </Card.Text>
                        <Button className="mt-2 ml-1" variant="outline-light">
                          Read More
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </CSSTransition>
              </SwitchTransition>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
export default Events;
