import ItemTableAdmin from "./ItemTableAdmin"
import GerdauLogo from "../assets/Gerdau.png"
export default function TableAdmin() {
    return (
        <div className="h-screen w-full bg-background">
        
            
            <div className="w-100 h-1/2	 bg-gray-table bg-opacity-87 rounded-md mt-8 ml-8 mr-8 overflow-auto">
                <div className="h-0.5"></div>
                <ItemTableAdmin logo={GerdauLogo} name='Gerdau S.A.' condicao='ok'/>

            </div>
        </div>
    )
}