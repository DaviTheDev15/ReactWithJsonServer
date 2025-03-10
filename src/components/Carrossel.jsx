import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/fotoguarabira.jpg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container p-3">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
                className="d-block w-100"
                src={img1}
                height={500}
                width={500}
                alt="First slide"
            />
            <Carousel.Caption>
              <h3>Um Instituto Federal</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
                className="d-block w-100"
                src={img2}
                height={500}
                width={500}
                alt="Second slide"
            />
            <Carousel.Caption>
              <h3>De cinco estrelas</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
                className="d-block w-100"
                src={img3}
                height={500}
                width={500}
                alt="Thrid slide"
            />
            <Carousel.Caption>
              <h3>Pertinho de você!</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default ControlledCarousel;