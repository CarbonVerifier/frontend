import BackgroundGlobe from "../components/BackgroundGlobe";
import HighlightCard from "../components/HighlightCard";
import Menu from "../components/Menu";

import { useEffect, useState } from "react";

export default function Home() {
    const texts = ["tons of CO2 offset", "cars off the road per year", "trees planted"]
    const [index, setIndex] = useState(0);
    const values = [897000, 195000, 149500]

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((index) => (index + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
      }, [texts.length]);


    return (
        <div className="h-screen w-full bg-background flex items-center justify-center">
            <Menu/>
            <BackgroundGlobe/>
            <div className="flex absolute text-white gap-20 pb-40 items-baseline">
                <HighlightCard value={897000} text={'carbon tokens minted'}/>
                <p className="text-5xl">=</p>
                <HighlightCard value={values[index]} text={texts[index]}/>
            </div>
        </div>
    )
}