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
                    <div className=" bg-gray-table-topic w-1/2 rounded-md flex flex-col p-2">
                        <img src={Gerdau}></img>
                        <h2 className='font-montserrat font-bold text-white'>
                            Company name: 
                        </h2>
                        <h2 className='font-montserrat font-bold text-white'>
                            Company ID: 
                        </h2>
                        <h2 className='font-montserrat font-bold text-white'>
                            Country: 
                        </h2>
                    </div>
                    <div className="flex flex-col w-1/2 rounded-md gap-2 justify-between ">
                        <div className=' bg-gray-table-topic rounded-md h-1/2 px-2 pt-2 flex flex-col gap-3'>
                            <h2 className='font-montserrat font-bold text-white text-xl'>Carbon emitted</h2>
                            <h2 className='font-montserrat font-bold text-white text-2xl self-center'>XX</h2>
                            <button className=' bg-gray-table flex gap-2 py-2 px-2 rounded-md items-center w-36 justify-center self-center'>
                                <img src={toucan} className='w-6'></img>
                                <p className='text-white'>Retire tokens</p>
                            </button>
                        </div>
                        <div className=' bg-gray-table-topic rounded-md h-1/2 px-2 pt-2 flex flex-col gap-3'>
                            <h2 className='font-montserrat font-bold text-white text-xl'>Carbon tokens</h2>
                            <h2 className='font-montserrat font-bold text-white text-2xl self-center'>XX</h2>
                            <button className='bg-gray-table flex gap-2 py-2 px-2 rounded-md items-center w-36 justify-center self-center' onClick={() => window.open('https://app.ubeswap.org/#/swap', '_blank')}>
                                <img src={logo} className='w-7'></img>
                                <p className='text-white'>Buy tokens</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}