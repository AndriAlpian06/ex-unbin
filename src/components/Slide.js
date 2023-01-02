import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import '../css/slick.css'
// import '../css/slick-theme.css'

const Sliders = [
  { id: 1, img: 'https://www.unbin.ac.id/asset/media/avatar_review/1.jpg'},
  { id: 2, img: 'https://www.unbin.ac.id/asset/media/avatar_review/2.jpg'},
  { id: 3, img: 'https://www.unbin.ac.id/asset/media/avatar_review/3.jpg'},
  { id: 4, img: 'https://www.unbin.ac.id/asset/media/avatar_review/4.jpg'},
  { id: 5, img: 'https://www.unbin.ac.id/asset/media/avatar_review/5.jpg'},
  { id: 6, img: 'https://www.unbin.ac.id/asset/media/avatar_review/6.jpg'},
  { id: 7, img: 'https://www.unbin.ac.id/asset/media/avatar_review/7.jpg'},
  { id: 8, img: 'https://www.unbin.ac.id/asset/media/avatar_review/8.jpg'},
  { id: 9, img: 'https://www.unbin.ac.id/asset/media/avatar_review/9.jpg'},
  { id: 10, img: 'https://www.unbin.ac.id/asset/media/avatar_review/10.jpg'},
  { id: 11, img: 'https://www.unbin.ac.id/asset/media/avatar_review/11.jpg'},
  { id: 12, img: 'https://www.unbin.ac.id/asset/media/avatar_review/12.jpg'},
  { id: 13, img: 'https://www.unbin.ac.id/asset/media/avatar_review/13.jpg'},
  { id: 14, img: 'https://www.unbin.ac.id/asset/media/avatar_review/14.jpg'},
  { id: 15, img: 'https://www.unbin.ac.id/asset/media/avatar_review/15.jpg'},
  { id: 16, img: 'https://www.unbin.ac.id/asset/media/avatar_review/16.jpg'},
]

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
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
        slidesToShow: 4,
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
      <div className="px-4 py-4 mt-4">
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