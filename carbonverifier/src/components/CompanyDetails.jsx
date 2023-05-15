import Gerdau from '../assets/gerdau.png'

export default function CompanyDetails() {
    return (
        <div className="pt-32 px-10">
            <div className=" bg-gray-table bg-opacity-50 rounded-md w-full flex flex-col p-5">
                <div className="flex gap-2 justify-between rounded-md">
                    <div className=" bg-gray-table-topic w-1/2 rounded-md">
                        <img src={Gerdau}></img>
                    </div>
                    <div className="flex flex-col w-1/2 rounded-md gap-2 justify-between ">
                        <div className=' bg-gray-table-topic rounded-md h-1/2 flex flex-col'>
                            CARBON EMITTED
                            <button>Compensate carbon (retire)</button>
                        </div>
                        <div className=' bg-gray-table-topic rounded-md h-1/2'>
                            CARBON CREDITS
                            <button>Compensate carbon (retire)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}