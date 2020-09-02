import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const carouselSlidesData = [
  {
    title: "Built for HomeLand",
    content: "Reduce manul Monitoring",
    index: 0,
    Icon: AccessAlarmsIcon,
  },
  {
    title: "Built with Raven",
    content: "Reduce manul Monitoring 2",
    index: 1,
    Icon: AccessAlarmsIcon,
  },
  {
    title: "low Latency",
    content: "detects evets in real time",
    index: 2,
    Icon: AccessAlarmsIcon,
  },
  {
    title: "Raven is scalable",
    content: "Can scale from 1 to 1000 cameras",
    index: 3,
    Icon: AccessAlarmsIcon,
  },
];

class LastCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      slides: carouselSlidesData,
      currentSlide: carouselSlidesData[0],
    };
    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }
  goToSlide(index) {
    this.setState({ activeIndex: index });
  }
  goToPrevSlide() {
    let index = this.state.activeIndex;
    let slides = this.state.slides;
    if (index < 1) index = slides.length;

    --index;

    this.setState({
      activeIndex: index,
      currentSlide: this.state.slides[index],
    });
  }
  goToNextSlide() {
    let index = this.state.activeIndex;
    let slides = this.state.slides;
    if (index === slides.length - 1) index = -1;
    ++index;
    this.setState({
      activeIndex: index,
      currentSlide: this.state.slides[index],
    });
  }
  render() {
    return (
      <Row className="mt-5 justify-content-center parentrow altrow">
        <Col md={6}>
          <Row>
            <div
              className={`cards-slider active-slide-${this.state.currentSlide.index}`}
            >
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${
                    this.state.currentSlide.index *
                    (100 / this.state.slides.length)
                  }%)`,
                }}
              >
                {this.state.slides.map((item) => (
                  <CaroSlide key={item.index} currentSlide={item} />
                ))}
              </div>
            </div>
          </Row>
          <Row className="mt-2 justify-content-center">
            <ArrowBackIcon
              className="myClickable mr-2"
              onClick={this.goToPrevSlide}
              disabled={this.state.currentSlide.index === 0}
            />

            <ArrowForwardIcon
              className="myClickable"
              onClick={this.goToNextSlide}
              disabled={
                this.state.currentSlide.index === this.state.slides.length - 1
              }
            />
          </Row>
        </Col>
      </Row>
    );
  }
}

const CaroSlide = ({ currentSlide }) => {
  return (
    <Card id={`card-${currentSlide.index}`} className="caroCard">
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>
          <h1>
            <b>{currentSlide.title}</b>
          </h1>
        </Card.Title>
        <hr style={{ width: "2rem", border: "1px solid white" }} />
        <Row className="justify-content-center">
          <span
            style={{
              backgroundColor: "#02192c",
              borderRadius: "50%",
              padding: "18px",
            }}
          >
            <currentSlide.Icon
              style={{
                fontSize: 50,
                color: "white",
              }}
            />
          </span>
        </Row>
        <Card.Text className="text-center">
          <small>{currentSlide.content}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LastCarousel;
