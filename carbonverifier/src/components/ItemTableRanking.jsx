

export default function ItemTableRanking(props) {
   
    return (
        

        <div className="w-auto h-16 bg-gray-table-topic rounded-md my-4 mx-4 container flex flex-row items-center justify-between">
            <h1 className='font-montserrat font-bold px-16 text-white' >{props.position}</h1>
            <h1 className='font-montserrat font-bold px-16 text-white' >{props.name}</h1>
            <h1 className='font-montserrat font-bold px-16 text-white' >{props.country}</h1>
            <h1 className='font-montserrat font-bold px-16 text-white' >{props.emitted}</h1>
            <h1 className='font-montserrat font-bold px-16 text-white' >{props.retire}</h1>
        </div>

            
    )
}