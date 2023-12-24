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
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
      "#ffb56b",
      "#fdaf69",
      "#f89d63",
      "#f59761",
      "#ef865e",
      "#ec805d",
      "#e36e5c",
      "#df685c",
      "#d5585c",
      "#d1525c",
      "#c5415d",
      "#c03b5d",
      "#b22c5e",
      "#ac265e",
      "#9c155f",
      "#950f5f",
      "#830060",
      "#7c0060",
      "#680060",
      "#60005f",
      "#48005f",
      "#3d005e",
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return (
    <BrowserRouter>
      {/* <AnimatedCursor
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
      /> */}
      {Array(22).fill(0).map((item, index) => {return(<div key={index} class="circle"></div>)})}
      <div id="dom" className="relative z-0 bg-primary">
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
