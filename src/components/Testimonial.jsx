import "../assets/css/Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const Testimonial = ({ text }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testData = [
    {
      id: 1,
      text: "Sara Jones's designs are both captivating and effective. She revamped our website, enhancing user engagement and conversions. Highly recommended for her attention to detail and creative brilliance!",
      img: "../src/assets/images/Image-6.png",
      name: "John Smith",
      position: "CEO, Smith Industries",
    },
    {
      id: 2,
      text: "Sara Jones's design skills are outstanding! She transformed our website into a visually appealing masterpiece, significantly increasing user engagement and conversions. Her creative approach and meticulous attention to detail are truly impressive.",
      img: "../src/assets/images/Image-6.png",
      name: "Jane Foster",
      position: "CEO, JNF Group",
    },
    {
      id: 3,
      text: "We had the pleasure of working with Sara Jones, and her designs blew us away! Her ability to create visually captivating and highly effective designs is unmatched. Sara's work not only met but exceeded our expectations, making her our top choice for all future projects.",
      img: "../src/assets/images/Image-6.png",
      name: "Anthony Stark",
      position: "CEO, Stark Industries",
    },
    {
      id: 4,
      text: "Sara Jones is a professional in every sense. Her designs are visually captivating and highly effective. Our website's transformation under her expertise led to increased user engagement and conversions. Sara's creative brilliance and attention to detail make her the go-to designer for any project!",
      img: "../src/assets/images/Image-6.png",
      name: "Bruce Wayne",
      position: "CEO Wayne Enterprise",
    },
  ];

  // for automatically changing
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === testData.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prevState) => prevState + 1);
      }
    }, 50000);
    return () => clearInterval(interval);
  }, [activeIndex, testData.length]);

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
              <div className="text-box">
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  onClick={showPrevious}
                  className="iconprev"
                />
                <p>{data.text}</p>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  onClick={showNext}
                  className="iconnext"
                />
              </div>
              <div className="detais">
                <img src={data.img} alt="" />
                <h4>
                  {data.name} / {data.position}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
