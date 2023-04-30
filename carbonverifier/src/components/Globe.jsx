import globe from '../assets/globe.svg';

export default function BackgroundGlobe() {
    return (
        <div class="absolute bottom-0 overflow-hidden w-full ">
            <img src={globe} className="transform translate-y-[34%] translate-x-20 w-[90%]"/>
        </div>

    )
    }