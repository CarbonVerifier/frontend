
export default function ItemTableAdmin(props) {

    const changeState = () => {
        if (props.condicao == 'ok'){
            return "bg-green-600 mx-8 px-16 py-4 rounded-full"
        }   
        else{
            return "bg-red-600 mx-8 px-16 py-4 rounded-full"
        }
            

    }

    return (
        <div className="w-auto h-16 bg-gray-table-topic rounded-md my-4 mx-4 container flex flex-row items-center justify-between">

            <img src={props.logo} className='h-12' />
            <h1 className='font-montserrat font-bold px-16 text-white' >{props.name}</h1>
            <div className={changeState}></div> 

        </div>            

            
    )
}