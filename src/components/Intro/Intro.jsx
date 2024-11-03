import React, { useContext } from "react";
import "./Intro.css";
import Vector2 from "../../img/Vector2.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey, We are</span>
          <span>NEXUS!</span>
          <span>
          Charting the Course of Innovation: Spearheading Revolutionary Advancements and Transformations in the Dynamic Landscape of Technology and Engineering
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Upcoming Events</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Nexus-PES/" target="_blank"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/company/nexus-pes/" target="_blank"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/nexus.pesu/" target="_blank"><img src={Instagram} alt="" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
      <img src={Vector2} alt="" />
        {/* animation */}
        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={logo}
          alt=""
        /> */}

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Explore" text2="Innovation" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Active Tech" text2="Club" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
