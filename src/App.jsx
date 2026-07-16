import { useEffect, useState } from "react";

import Loader from "./components/loader/Loader";
import Elevator from "./components/elevator/Elevator";

import MainLayout from "./layouts/MainLayout";

import Intro from "./sections/Intro/Intro";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Journey from "./sections/Journey/Journey";
import Contact from "./sections/Contact/Contact";
import Skills from "./sections/skills/Skills";

function App() {

  const [stage, setStage] = useState("loader");

  return (
      <>
          {stage === "loader" && (
              <Loader
                  onComplete={() => setStage("elevator")}
              />
          )}

          {stage === "elevator" && (
              <Elevator
                  onComplete={() => setStage("hero")}
              />
          )}

          {stage === "hero" && (
              <MainLayout>
                  {/* <Intro /> */}
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Journey />
                  <Contact />
              </MainLayout>
          )}
      </>
  );
}

export default App;