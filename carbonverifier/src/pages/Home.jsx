import BackgroundGlobe from "../components/BackgroundGlobe";
import HomeCards from "../components/HomeCards";
import Menu from "../components/Menu";

export default function Home() {
    
    return (
        <div className="h-screen w-full bg-background flex items-center justify-center">
            <Menu/>
            <BackgroundGlobe/>
            <HomeCards/>
        </div>
    )
}