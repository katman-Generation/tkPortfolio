import { useEffect, useState } from "react";

import Loader from "./components/loader/Loader";

import MainLayout from "./layouts/MainLayout";

import Intro from "./sections/Intro/Intro";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Journey from "./sections/Journey/Journey";
import Contact from "./sections/Contact/Contact";

function App() {

    const [loading, setLoading] = useState(true);


    if (loading) {
        return <Loader onComplete={() => setLoading(false)} />;
    }

    return (
        <MainLayout>
            <Intro />
            <Hero />
            <About />
            <Projects />
            <Journey />
            <Contact />
        </MainLayout>
    );
}

export default App;