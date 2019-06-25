import React from "react"
import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"

class Carousel extends React.Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="carousel__container">
                <div className="carousel__items">
                    <Slider {...settings}>
                        {this.props.items.map(item => (
                            <div key={item.id}>
                                {/* <img src={item.img} />    */}
                                <LazyLoadImage src={item.img} effect="blur" />
                            </div>
                        ))}
                    </Slider>
                    <div className="carousel__description">
                        The collection pairs quartz with gold, exploring the limits of shape within our signature lens of timelessness and wearability. The resulting collection feels equal parts modern statement and relics that could belong to any era.
                    </div>
                </div>
                <div className="carousel__main">
                    {/* <img src="./images/03_1280 (4x3 Large).jpg" alt="" /> */}
                    <LazyLoadImage src={`./images/03_1280 (4x3 Large).jpg`} effect="blur" />
                </div>
            </div>
        )
    }

}

Carousel.defaultProps = {
    items: [
        {
            id: 'carousel-1',
            description: 'The collection pairs quartz with gold, exploring the limits of shape within our signature lens of timelessness and wearability. The resulting collection feels equal parts modern statement and relics that could belong to any era.',
            img: './images/02_1280 (3x4 Small).jpg'
        },
        {
            id: 'carousel-2',
            description: 'The collection pairs quartz with gold, exploring the limits of shape within our signature lens of timelessness and wearability. The resulting collection feels equal parts modern statement and relics that could belong to any era.',
            img: './images/03_1280 (4x3 Large).jpg'
        }
    ]
}

export default Carousel;
