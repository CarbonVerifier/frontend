import { useNavigate } from 'react-router-dom'
import Gerdau from '../assets/gerdau.png'
import logo from '../assets/logo.svg'
import toucan from '../assets/toucan.png'

export default function CompanyDetails() {
    const navigate = useNavigate()
    
    return (
        <div className="pt-32 px-10">
            <div className=" bg-gray-table bg-opacity-50 rounded-md w-full flex flex-col p-5">
                <div className="flex gap-2 justify-between rounded-md">
                    <div className=" bg-gray-table-topic w-1/2 rounded-md flex flex-col">
                        <img src={Gerdau}></img>
                        <h3>Company name: </h3>
                        <h3>Company ID: </h3>
                        <h3>Country: </h3>
                    </div>
                    <div className="flex flex-col w-1/2 rounded-md gap-2 justify-between ">
                        <div className=' bg-gray-table-topic rounded-md h-1/2 '>
                            CARBON EMITTED
                            <button className=' bg-gray-table flex gap-2 p-1 rounded-md'>
                                <img src={toucan} className='w-6'></img>
                                <p>Retire tokens</p>
                            </button>
                        </div>
                        <div className=' bg-gray-table-topic rounded-md h-1/2'>
                            CARBON CREDITS
                            <button className=' bg-gray-table flex gap-2 p-1 rounded-md' onClick={() => window.open('https://app.ubeswap.org/#/swap', '_blank')}>
                                <img src={logo} className='w-7'></img>
                                <p>Buy tokens</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}