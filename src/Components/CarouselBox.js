import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import na1Img from 'na1.jpg';
import na2Img from 'na2.jpg';
import na3Img from 'na3.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
            <img
              className="d-block w-80"
              src={na1Img}
              alt='Номер на одного'
            />
            <Carousel.Caption>
              <h2>Номер на одного человека</h2>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
              className="d-block w-80"
              src={na2Img}
              alt='Номер на двух'
            />
            <Carousel.Caption>
              <h2>Номер на два человека</h2>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
              className="d-block w-80"
              src={na3Img}
              alt='Номер на троих'
            />
            <Carousel.Caption>
              <h2>Номер на три человека</h2>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
