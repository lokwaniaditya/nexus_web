import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./About.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
        <span  style={{color: darkMode?'white':''}}>Events </span>
        <span>Held</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>10+</div>
        <span  style={{color: darkMode?'white':''}}>Projects </span>
        <span>Completed</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>35+</div>
        <span  style={{color: darkMode?'white':''}}>Members </span>
        <span>in club</span>
      </div>
    </div>
  );
};

export default Experience;
