import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'


const ReactSlick = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1734244331/top-view-books-circle-with-copy-space_i5bspv.jpg" alt="image1"/>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1734244361/creative-arrangement-with-different-books_k6phwp.jpg" alt="image2"/>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1734184788/pexels-pixabay-159711_fjyyll.jpg" alt="image3"/>
        </div>
        <div>
          <img src='https://res.cloudinary.com/dg3csk2jz/image/upload/v1734248033/pexels-pixabay-256431_rrpvwr.jpg' alt="image4"/>
        </div>
      </Slider>
    </div>
  )
}

export default ReactSlick