import Menu from "../components/Menu";
import TableRanking from "../components/TableRanking";
import BackgroundGlobe from "../components/BackgroundGlobe";


export default function Ranking() {
    return (
        <div className="h-screen w-full bg-background">
            <Menu/>
            <p className="pt-32 pl-8 font-montserrat text-white	text-2xl font-bold"> Top CVT Buyers</p>
            <TableRanking />
            <BackgroundGlobe />
        </div>
    )
}