import planet from '../assets/planeta.png';

export default function BackgroundGlobe() {
    return (
        <div class="absolute bottom-0 overflow-hidden w-full">
            <img src={planet} className="transform translate-y-[34%] translate-x-20 w-[90%]"/>
        </div>

    )
}