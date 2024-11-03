import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Events from "./components/Events/Events";
import "./App.css";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
