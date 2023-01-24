import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import '../css/slick.css'
// import '../css/slick-theme.css'
import '../css/arrow.css'

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
        slidesToShow: 3,
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
              // <div key={index}>
              //   <img src={item.img} alt={item.id} className='px-4' />
              // </div>
              // <div class="max-w-md py-4 px-4 bg-white shadow-lg rounded-lg my-20 ml-4">
              //   <div class="flex justify-center md:justify-end -mt-16">
              //     <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
              //   </div>
              //   <div>
              //     <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
              //     <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
              //   </div>
              //   <div class="flex justify-end mt-4">
              //     <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
              //   </div>
              // </div>
              // <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              //   <div class="swiper-container mt-12 !overflow-hidden">
              //     <div class="swiper-wrapper">
              //       <div class="swiper-slide">
              //         <blockquote class="rounded-lg bg-gray-100 p-8">
              //           <div class="flex items-center">
              //             <img
              //               alt="Man"
              //               src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              //               class="h-16 w-16 rounded-full object-cover"
              //             />

              //             <div class="ml-4">
              //               <div class="flex justify-center gap-0.5 text-green-500">
              //                 <p class="mt-1 text-lg font-medium text-gray-700">Paul Starr</p>
              //               </div>

              //               <p class="mt-1 text-lg font-medium text-gray-700 ml-4">Design Web</p>
              //             </div>
              //           </div>

              //           <p class="mt-4 text-gray-500">
              //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              //             voluptatem alias ut provident sapiente repellendus.
              //           </p>
              //         </blockquote>
              //       </div>
              //     </div>
              //   </div>
              // </div>
              <div class="grid md:grid-cols-2 gap-4 lg:gap-x-16">
                <div class="mb-12 md:mb-0 px-4">
                  <div class="flex justify-center mb-6">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-full shadow-lg w-32" />
                  </div>
                  <h5 class="text-lg font-bold mb-4 text-center">Maria Smantha</h5>
                  <h6 class="font-medium text-blue-600 mb-4 text-center">Web Developer</h6>
                  <p class="mb-4 text-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left"
                      class="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                      </path>
                    </svg>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
                    tenetur quae quaerat ad velit ab hic tenetur.
                  </p>
                  <ul class="flex justify-center mb-0">
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                        </path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-alt"
                        class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 512">
                        <path fill="currentColor"
                          d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z">
                        </path>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}