import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./Slider.css";
class Slider extends Component {
    render() {
        return (
            <Carousel
                className="sliderImage"
                width={this.props.width}
                showThumbs={false}
            >
                {this.props.images.map((image) => (
                    <div key={image}>
                        <img src={image} alt={image} />
                    </div>
                ))}
            </Carousel>
        );
    }
}

export default Slider;
