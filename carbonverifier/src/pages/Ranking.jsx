import Menu from "../components/Menu";
import TableRanking from "../components/TableRanking";
import Globe from "../components/Globe";


export default function Ranking() {
    return (
        <div className="static h-screen w-full bg-background overflow-x-hidden">
            <Menu/>
            <p className="pt-32 pl-8 font-montserrat text-white	text-2xl font-bold"> Top CVT Buyers</p>
            <TableRanking />
            <Globe/>
        </div>
    )
}