import React, { useContext } from "react";
import "./Events.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Upcoming</span>
        <span>EVENTS</span>
        <spane>
          Keep an eye out for our Upcoming events!
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "30rem" }}
          whileInView={{ left: "30rem" }}
        >
          <Card
            heading={"Event #1"}
            detail={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-4rem", top: "12rem" }}
          whileInView={{ left: "-4rem", top: "12rem" }}
        >
          <Card
            heading={"Event #2"}
            detail={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet pellentesque quam."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
        initial={{ top: "19rem", left: "20rem"}}
          whileInView={{ top: "19rem", left: "20rem" }}
        >
          <Card
            heading={"Event #3"}
            detail={
              "Lorem ispum dummy text is usually used in sections where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
