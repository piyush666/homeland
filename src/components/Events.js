import React, { Component } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
      <Row className="justify-content-center parentrow altrow">
        <Col md={10}>
          <Row>
            <Col md={6}>
              <h3>
                <strong>How can we help?</strong>
              </h3>
              <h5>Detect Risks in real time</h5>
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
          <Row>
            <Col md={6}>
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
                    className="pcard eventActivecard"
                    onClick={() => this.goToSlide(this.state.activeIndex)}
                    style={{ height: "16rem", fontSize: 22 }}
                  >
                    <Card.Title className="m-3">
                      <h2>
                        <b style={{ opacity: "0.2" }}>
                          {this.state.slides[this.state.activeIndex].index}
                        </b>
                        {"  "}
                        <strong>
                          {this.state.slides[this.state.activeIndex].title}
                        </strong>
                      </h2>
                    </Card.Title>
                    <Card.Body>
                      <Card.Text>
                        {this.state.slides[this.state.activeIndex].content}
                      </Card.Text>
                      <Button variant="outline-light">Read More</Button>
                    </Card.Body>
                  </Card>
                </CSSTransition>
              </SwitchTransition>
            </Col>
            <Col md={3} className="align-self-center ml-5">
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
                    className="pcard eventcard"
                    onClick={() => this.goToSlide(this.state.secondIndex)}
                    style={{ height: "12rem", fontSize: 12 }}
                  >
                    <Card.Title className="mt-1 ml-1">
                      <h2>
                        <b style={{ opacity: "0.2" }}>
                          {this.state.slides[this.state.secondIndex].index}
                        </b>
                        {"  "}
                        <strong>
                          {this.state.slides[this.state.secondIndex].title}
                        </strong>
                      </h2>
                    </Card.Title>
                    <Card.Body>
                      <Card.Text>
                        {this.state.slides[this.state.secondIndex].content}
                      </Card.Text>
                      <Button variant="outline-light">Read More</Button>
                    </Card.Body>
                  </Card>
                </CSSTransition>
              </SwitchTransition>
            </Col>
          </Row>
          {/*           <SliderRow state={this.state} HandleOnClick={this.goToSlide} /> */}
        </Col>
      </Row>
    );
  }
}
export default Events;
