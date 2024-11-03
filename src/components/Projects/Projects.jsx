import React, { useContext } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Project1 from "../../img/project1.png";
import Project2 from "../../img/project2.png";
import Project3 from "../../img/project3.png";
import Project4 from "../../img/project4.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Our Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Project1} alt="" className="projectDisplay"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project2} alt="" className="projectDisplay"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project3} alt="" className="projectDisplay"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project4} alt="" className="projectDisplay"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
