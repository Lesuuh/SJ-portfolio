import "../assets/css/Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Testimonial = ({ text }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testData = [
    {
      id: 1,
      text: "Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
      img: "../src/assets/images/Image-6.png",
      name: "John Smith",
      position: "CEO, Smith Industries",
    },
    {
      id: 2,
      text: "Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
      img: "../src/assets/images/Image-6.png",
      name: "Jane Foster",
      position: "CEO, JNF Group",
    },
    {
      id: 3,
      text: "Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
      img: "../src/assets/images/Image-6.png",
      name: "Anthony Stark",
      position: "CEO, Stark Industries",
    },
    {
      id: 4,
      text: "Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
      img: "../src/assets/images/Image-6.png",
      name: "Bruce Wayne",
      position: "CEO Wayne Enterprise",
    },
  ];

  const showPrevious = () => {
    setActiveIndex((prevState) =>
      prevState > 0 ? prevState - 1 : testData.length - 1
    );
  };
  const showNext = () => {
    setActiveIndex((prevState) =>
      prevState < testData.length - 1 ? prevState + 1 : 0
    );
  };

  return (
    <div className="testimonial">
      <div className="testimonial-container">
        <h1>TESTIMONIAL</h1>
        <div className="test-wrapper">
          {testData.map((data, index) => (
            <div
              key={data.id}
              className={`testimonial-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faAngleLeft} onClick={showPrevious} />
              <p>{data.text}</p>
              <p>{data.name}</p>
              <FontAwesomeIcon icon={faAngleRight} onClick={showNext} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
