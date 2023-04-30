import globe from '../assets/globe.svg';

export default function BackgroundGlobe() {
    return (
        <div className="absolute bottom-0 overflow-hidden w-screen h-full">
            <img src={globe} className="transform translate-y-[34%] translate-x-20 w-[90%]"/>
        </div>

    )
    }