import { useEffect, useState } from "react";

import Loader from "./components/loader/Loader";
import Elevator from "./components/elevator/Elevator";

import MainLayout from "./layouts/MainLayout";
import Intro from "./sections/Intro/Intro";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import BuildingBlocks from "./sections/BuildingBlocks/BuildingBlocks";
import Contact from "./sections/Contact/Contact";


function App() {

  const [stage, setStage] = useState("loader");
  const [transitioning, setTransitioning] = useState(false);

  return (
      <>
          <div className={`
                transition-opacity
                duration-1000
                ${transitioning ? "opacity-0" : "opacity-100"}
            `}>
                {stage === "loader" && (
                 <Loader
                        onComplete={() => {
                            setTransitioning(true);

                            setTimeout(() => {
                                setStage("elevator");
                                setTransitioning(false);
                            }, 1000);
                        }}
                    />
            )}

            {stage === "elevator" && (
                <Elevator
                    onComplete={() => setStage("hero")}
                />
            )} 

            {stage === "hero" && (
                <MainLayout>
                    <Intro />
                    <Hero />
                    <About />
                    <BuildingBlocks/>
                    <Contact />
                </MainLayout>
            )}
          </div>
      </>
  );
}

export default App;