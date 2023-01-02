import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import '../css/slick.css'
// import '../css/slick-theme.css'

const Sliders = [
  { id: 1, img: 'https://www.unbin.ac.id/asset/media/isotope/138.JPG'},
  { id: 2, img: 'https://www.unbin.ac.id/asset/media/isotope/139.JPG'},
  { id: 3, img: 'https://www.unbin.ac.id/asset/media/isotope/140.JPG'},
  { id: 4, img: 'https://www.unbin.ac.id/asset/media/isotope/141.JPG'},
  { id: 5, img: 'https://www.unbin.ac.id/asset/media/isotope/142.JPG'},
  { id: 6, img: 'https://www.unbin.ac.id/asset/media/isotope/143.JPG'},
  { id: 7, img: 'https://www.unbin.ac.id/asset/media/isotope/144.JPG'},
  { id: 8, img: 'https://www.unbin.ac.id/asset/media/isotope/145.JPG'},
  { id: 9, img: 'https://www.unbin.ac.id/asset/media/isotope/146.JPG'},
  { id: 10, img: 'https://www.unbin.ac.id/asset/media/isotope/147.JPG'},
]

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

export default class Slide extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
    
    next() {
        this.slider.slickNext();
    }
    
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        };

    return (
      <div className="px-4 py-4 mt-8">
        <Slider {...settings}>
          {Sliders.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.img} alt={item.id} className='px-4' />
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}