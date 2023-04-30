import Menu from "../components/Menu";
import Swap from "../components/Swap";
import Globe from "../components/Globe";


export default function Ranking() {
    return (
        <div className="h-screen w-full bg-background">
            <Menu/>
            <p className="pt-32 pl-8 font-montserrat text-white	text-2xl font-bold"></p>
            <Swap />
            
        </div>
    )
}