import { useRef } from "react";
import "./carousel.css";

function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={scrollLeft}>
        &#8249;
      </button>
      <div className="carousel" ref={carouselRef}>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt="slide" />
          </div>
        ))}
      </div>

      <button className="carousel-button right" onClick={scrollRight}>
        &#8250;
      </button>
    </div>
  );
}

export default Carousel;

const images = [
  "assets/image_1.jpeg",
  "assets/image_2.jpeg",
  "assets/image_3.jpeg",
  "assets/image_4.jpeg",
  "assets/image_5.jpeg",
  "assets/image_6.jpeg",
  "assets/image_7.jpeg",
  "assets/image_8.jpeg",
  "assets/image_10.jpeg",
];
