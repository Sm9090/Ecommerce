import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/BannerImages/1.png'
import Image2 from '../assets/BannerImages/2.png'
import Image3 from '../assets/BannerImages/3.png'
import Image4 from '../assets/BannerImages/4.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image4}
          alt="four slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;