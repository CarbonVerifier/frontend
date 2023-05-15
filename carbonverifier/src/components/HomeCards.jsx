import HighlightCard from "../components/HighlightCard";
import { useEffect, useState } from "react";

export default function HomeCards() {
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
        <div className="flex absolute text-white gap-20 pb-40 items-baseline">
                <HighlightCard value={897000} text={'offset carbons'}/>
                <p className="text-5xl">=</p>
                <HighlightCard value={values[index]} text={texts[index]}/>
            </div>
    )
}