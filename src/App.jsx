import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={20}
        // onPointerEnter={handlePointerEnter}
        // onPointerLeave={handlePointerLeave}
        // pointerEvents={isCursorVisible ? "auto" : "none"}
        outerSize={50}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={3}
        // innerStyle={{ backgroundColor: "transparent" }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".p",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 40,
              outerSize: 50,
              color: "200, 255, 255, 0",
              outerAlpha: 0.3,
              innerScale: 1,
              outerScale: 5,
            },
          },
        ]}
      />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works /> */}
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
