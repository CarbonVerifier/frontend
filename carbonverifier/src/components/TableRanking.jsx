
import GerdauLogo from "../assets/gerdau.png"
import FaberLogo from "../assets/FaberCastell.png"
import KlabinLogo from "../assets/Klabin.png"
import UnileverLogo from "../assets/Unilever.png"
import ValeLogo from "../assets/Vale.png"
import ItemTableRanking from "./ItemTableRanking"


export default function Table() {
    
       
    const items = [{logo: GerdauLogo, position: '1º', name: 'Gerdau S.A.', cvt: '999 CVT'},
                   {logo: FaberLogo, position: '2º', name: 'Faber Castell', cvt: '998 CVT'},
                   {logo: KlabinLogo, position: '3º', name: 'Klabin S.A.', cvt: '996 CVT'},
                   {logo: UnileverLogo, position: '4º', name: 'Unilever', cvt: '990 CVT'}]

    const listItems = items.map(item => (
        <ItemTableRanking logo={item.logo} name={item.name} position={item.position} cvt={item.cvt} />
      ));

    return (
        
        <div className="h-screen w-full bg-background">
        
            
            <div className="w-100 h-1/2	 bg-gray-table bg-opacity-87 rounded-md mt-8 ml-8 mr-8 overflow-auto">

                <div className="h-0.5"></div>

                {listItems}
                
            </div>
        </div>
    )
}