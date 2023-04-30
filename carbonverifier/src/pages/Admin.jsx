import Menu from "../components/Menu";
import TableAdmin from "../components/TableAdmin";


export default function Ranking() {
    return (
        <div className="h-screen w-full bg-background">
            <Menu/>
            <p className="pt-32 pl-8 font-montserrat text-white	text-2xl font-bold"> Admin View</p>
            <TableAdmin />
        
        </div>
    )
}