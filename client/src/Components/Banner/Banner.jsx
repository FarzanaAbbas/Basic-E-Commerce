import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'

<<<<<<< HEAD
=======


>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
const Banner = () => {
  return (
    <Carousel autoPlay showThumbs={false} interval={3000} infiniteLoop showStatus={false} showIndicators={false}>
      <div className="banner-container">
        <img src="/images/2.jpg" alt="banner" />
      </div>
      <div className="banner-container">
        <img src="/images/model-02.jpg" alt="banner" />
      </div>
      <div className="banner-container">
        <img src="/images/model-03.jpg" alt="banner" />
      </div>
      <div className="banner-container">
        <img src="/images/model-04.jpg" alt="banner" />
      </div>
    </Carousel>
  )
}

export default Banner
