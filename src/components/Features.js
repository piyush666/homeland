import React, { Component } from "react";
import { Row, Card, Col, Button } from "react-bootstrap";
import FaceDet from "../images/FaceDet.png";
import People from "../images/People.png";
import Adobe from "../images/Adobe.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Data = [
  {
    title: "Number Plate Recognition",
    content: "Automatic",
    index: 0,
    img: Adobe,
  },
  {
    title: "(Face Recognition)",
    content: "POI Indentification",
    index: 1,
    img: FaceDet,
  },
  {
    title: "Or person Serach",
    content: "Object",
    index: 2,
    img: People,
  },
  {
    title: "Continue Recognition",
    content: "Peaple",
    index: 3,
    img: FaceDet,
  },
  {
    title: "Car Recognition",
    content: "Automatic",
    index: 4,
    img: Adobe,
  },
  {
    title: "abnormality Detection",
    content: "Automatic",
    index: 5,
    img: People,
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
    this.goToSlide = this.goToSlide.bind(this);
  }
  goToSlide(index) {
    if (index === this.state.slides[this.state.slides.length - 1].index) {
      this.goToNextSlide();
    }
    if (index === this.state.slides[0].index) {
      this.goToPrevSlide();
    }
  }
  goToPrevSlide() {
    if (this.state.slides[0].index === this.state.data[0].index) {
      return;
    }

    let next = this.state.slides[this.state.slides.length - 1].index;
    let prev = this.state.prev;
    if (prev < 1) {
      prev = this.state.data.length;
    }
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
    let data = this.state.data;
    if (
      this.state.slides[this.state.slides.length - 1].index ===
      data[data.length - 1].index
    ) {
      return;
    }
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
        <Col>
          <Row className="justify-content-center">
            <h2 style={{ textAlign: "center" }}>
              Detect Potential risk in real time
            </h2>
          </Row>
          <hr style={{ width: "2rem", border: "1px solid white" }} />
          <Row id="btn-row-Forsmall" className="justify-content-center">
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

          <Row id="featForbig" className="mt-2">
            <div className="feat-left-fix-div"></div>
            <Col>
              <div
                className={`feature-slider active-feature-slide-${this.state.activeIndex}`}
              >
                <div
                  className="feature-slider-wrapper"
                  style={{
                    zIndex: "1",
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
                          ? "active-feat-window"
                          : "active-feat-window"
                      }
                      handleClick={this.goToSlide}
                    />
                  ))}
                </div>
              </div>
            </Col>
            <div className="feat-right-fix-div"></div>
          </Row>
          <Row id="featForSmall"></Row>
        </Col>
      </Row>
    );
  }
}
const CaroSlide = ({ currentSlide, addclass, handleClick }) => {
  return (
    <Col id={`feat-card-${currentSlide.index}`} className={addclass}>
      <Card
        className="fcard"
        style={{}}
        onClick={() => handleClick(currentSlide.index)}
      >
        <Card.Img src={currentSlide.img} className="fcard-img" />
      </Card>
      <div
        className="ml-4 mt-2"
        onClick={() => handleClick(currentSlide.index)}
      >
        {currentSlide.content}
        <p style={{ fontSize: "20px" }}>
          <b>{currentSlide.title}</b>
          <ArrowForwardIcon />
        </p>
      </div>
    </Col>
  );
};
export default Features;
