import React, { Component } from "react";
import { Row, Card, Col, Button } from "react-bootstrap";
import FaceDet from "../images/FaceDet.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Data = [
  {
    title: "Number Plate Recognition",
    content: "Automatic",
    index: 0,
  },
  {
    title: "(Face Recognition)",
    content: "POI Indentification",
    index: 1,
  },
  {
    title: "Or person Serach",
    content: "Object",
    index: 2,
  },
  {
    title: "Continue Recognition",
    content: "Peaple",
    index: 3,
  },
  {
    title: "Car Recognition",
    content: "Automatic",
    index: 4,
  },
  {
    title: "abnormality Detection",
    content: "Automatic",
    index: 5,
  },
];

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      slides: Data.slice(0, 4),
      prev: Data.length - 1,
      next: 4,
      activeSlide: Data[0],
      activeIndex: 0,
    };
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }
  goToPrevSlide() {
    let next = this.state.slides[this.state.slides.length - 1].index;
    let prev = this.state.prev;
    if (prev < 1) prev = this.state.data.length;
    prev--;

    const newSlides = [
      this.state.data[this.state.prev],
      ...this.state.slides.slice(0, 3),
    ];
    this.setState({
      slides: newSlides,
      prev,
      next,
      activeSlide: this.state.data[this.state.activeIndex - 1],
      activeIndex: this.state.activeIndex - 1,
    });
  }
  goToNextSlide() {
    let prev = this.state.slides[0].index;
    let next = this.state.next;
    next = (next + 1) % this.state.data.length;
    const newSlides = this.state.slides
      .slice(1, 4)
      .concat(this.state.data[this.state.next]);

    this.setState({
      slides: newSlides,
      prev,
      next,
      activeSlide: this.state.data[this.state.activeIndex + 1],
      activeIndex: this.state.activeIndex + 1,
    });
  }
  render() {
    return (
      <Row className="justify-content-center mt-2 parentrow">
        <Col md={10}>
          <Row className="justify-content-center">
            <h4>Detect Potential risk in Real time</h4>
          </Row>
          <hr style={{ width: "2rem", border: "1px solid white" }} />
          <Row className="justify-content-center">
            <Button
              variant="light"
              onClick={this.goToPrevSlide}
              className="mr-2"
              disabled={this.state.slides[0].index === 0}
            >
              <ArrowBackIcon />
            </Button>
            <Button
              variant="light"
              onClick={this.goToNextSlide}
              disabled={
                this.state.slides[3].index === this.state.data.length - 1
              }
            >
              <ArrowForwardIcon />
            </Button>
          </Row>

          <Row className="mt-2">
            <Col>
              <div
                className={`feature-slider active-feature-slide-${this.state.activeIndex}`}
              >
                <div
                  className="feature-slider-wrapper"
                  style={{
                    transform: `translateX(-${
                      this.state.slides[0].index *
                      (100 / this.state.data.length)
                    }%)`,
                  }}
                >
                  {this.state.data.map((item) => (
                    <CaroSlide
                      key={item.index}
                      currentSlide={item}
                      addclass={
                        this.state.slides.find((e) => e.index === item.index)
                          ? `active-feat-window`
                          : ""
                      }
                    />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
const CaroSlide = ({ currentSlide, addclass }) => {
  return (
    <Col id={`feat-card-${currentSlide.index}`} className={addclass}>
      <Card className="pcard" style={{ width: "15rem", height: "15rem" }}>
        <Card.Img
          variant="top"
          src={FaceDet}
          style={{ borderRadius: "1rem" }}
        />
      </Card>
      <div className="ml-4 mt-2">
        <small>{currentSlide.content}</small>
        <p>
          <b>{currentSlide.title}</b>
        </p>
      </div>
    </Col>
  );
};
export default Features;
