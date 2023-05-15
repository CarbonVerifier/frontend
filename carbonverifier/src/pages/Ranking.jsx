import Menu from "../components/Menu";
import TableRanking from "../components/TableRanking";
import Globe from "../components/Globe";

export default function Ranking() {
    return (
        <div className="h-screen w-full bg-background">
            <Menu />
            <div className="pt-32 pl-8 flex justify-center items-center">
                <p className=" font-montserrat text-white text-2xl font-bold"> Leaderboard</p>
                <input></input>
            </div>
            <TableRanking />
        </div>
    )
}