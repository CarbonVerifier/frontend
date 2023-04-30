import Menu from "./Menu";
import GerdauLogo from "../assets/gerdau.png"

export default function TableAdmin() {
    return (
        <div className="h-screen w-full bg-background">
        
            
            <div className="w-100 h-1/2	 bg-gray-table bg-opacity-87 rounded-md mt-8 ml-8 mr-8 overflow-auto">

                <div className="h-0.5"></div>


                <div className="w-auto h-16 bg-gray-table-topic rounded-md my-4 mx-4 container flex flex-row items-center justify-between">

                    <img src={GerdauLogo} alt="Gerdau Logo" className='w-32 ml-8' />
                    <h1 className='font-montserrat font-bold px-16 text-white' >Gerdau S.A.</h1>
                    <div className="bg-red-600 mx-8 px-16 py-4 rounded-full"></div> 

                </div>

                <div className="w-auto h-16 bg-gray-table-topic rounded-md my-4 mx-4 container flex flex-row items-center justify-between">

                    <img src={GerdauLogo} alt="Gerdau Logo" className='w-32 ml-8' />
                    <h1 className='font-montserrat font-bold px-16 text-white' >Gerdau S.A.</h1>
                    <div className="bg-red-600 mx-8 px-16 py-4 rounded-full"></div> 

                </div>

                <div className="w-auto h-16 bg-gray-table-topic rounded-md my-4 mx-4 container flex flex-row items-center justify-between">

                    <img src={GerdauLogo} alt="Gerdau Logo" className='w-32 ml-8' />
                    <h1 className='font-montserrat font-bold px-16 text-white' >Gerdau S.A.</h1>
                    <div className="bg-red-600 mx-8 px-16 py-4 rounded-full"></div> 

                </div>


                <div className="w-auto h-16 bg-gray-table-topic rounded-md my-4 mx-4 container flex flex-row items-center justify-between">

                    <img src={GerdauLogo} alt="Gerdau Logo" className='w-32 ml-8' />
                    <h1 className='font-montserrat font-bold px-16 text-white' >Gerdau S.A.</h1>
                    <div className="bg-red-600 mx-8 px-16 py-4 rounded-full"></div> 

                </div>            

            </div>
        </div>
    )
}