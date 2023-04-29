import BackgroundGlobe from "../components/BackgroundGlobe";
import Menu from "../components/Menu";

export default function Home() {
    return (
        <div className="h-screen w-full bg-background">
            <Menu/>
            <BackgroundGlobe/>
        </div>
    )
}