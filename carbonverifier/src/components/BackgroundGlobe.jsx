import planet from '../assets/planet.svg';

export default function BackgroundGlobe() {
    return (
        <div class="absolute bottom-0 overflow-hidden w-full">
            <img src={planet} className="transform translate-y-[80%] w-full" />
        </div>

    )
}