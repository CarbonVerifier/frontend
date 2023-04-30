import Menu from "../components/Menu";
import TableAdmin from "../components/TableAdmin";
import Globe from "../components/Globe"

export default function Admin() {
    return (
        <div className=" static h-screen w-full bg-background overflow-x-hidden">
            <Menu/>
            <p className="pt-32 pl-8 font-montserrat text-white	text-2xl font-bold"> Admin View</p>
            <TableAdmin />
            <Globe />
        </div>
    )
}