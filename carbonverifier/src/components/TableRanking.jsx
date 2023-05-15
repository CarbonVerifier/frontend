import React, { useState } from "react";
import Lupa from "../assets/lupa.png"

export default function Table() {

    const [query, setquery] = useState()
    
    const [state, setstate] = useState({
        query: '',
        list: []
        })

    const handleChange = (e) => {
        const results = items.filter(item => {
            if (e.target.value === "") return items
            return item.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setstate({
            query: e.target.value,
            list: results
        })
        }
    
    const items = [{ position: '1º', name: 'Gerdau S.A.', country: 'Brazil', emitted:'50 Tons', retire:'50 Tons'},
                   {position: '2º', name: 'FaberCastell', country: 'Brazil', emitted:'50 Tons', retire:'49 Tons'},
                   {position: '3º', name: 'Klabin S.A.', country: 'Brazil', emitted:'50 Tons', retire:'46 Tons'},
                   {position: '4º', name: 'Unilever', country: 'Brazil', emitted:'50 Tons', retire:'40 Tons'},
                   {position: '5º', name: 'Vale S.A.', country: 'Brazil', emitted:'50 Tons', retire:'28 Tons'}]

    return (
        
        <div className="h-screen w-full bg-background ">
            
           
            
            <div className="w-100 h-96 bg-gray-table bg-opacity-50 roundd-md mt-8 ml-8 mr-8 overflow-auto relative z-50">
                
                <form className="container flex flex-row items-center py-4 place-content-center	" >
                    <img src={Lupa} alt="Lupa" className='h-6 px-2' />
                    <input type="search" value={query} onChange={handleChange} className='font-montserrat px-2 bg-gray-table rounded text-white '/>
                </form>
            

                <div className="my-2 container flex flex-row items-center justify-evenly">

                
                
                    <h1 className='font-montserrat font-bold px-16 text-white' >Position</h1>
                    <h1 className='font-montserrat font-bold px-16 text-white' >Company</h1>
                    <h1 className='font-montserrat font-bold px-16 text-white' >Country</h1>
                    <h1 className='font-montserrat font-bold px-16 text-white' >Carbon emitted</h1>
                    <h1 className='font-montserrat font-bold px-16 text-white' >Carbon offset</h1>
                </div>

                

                <ul>
                    {(state.query === '' ? items.map(item =>
                    {return(
                        <div className="w-auto h-16 bg-gray-table-topic rounded-md my-4 mx-4 container flex flex-row items-center justify-around">
                            <h1 className='font-montserrat font-bold text-white' key={item.position} >{item.position}</h1>
                            <h1 className='font-montserrat font-bold text-white' key={item.name} >{item.name}</h1>
                            <h1 className='font-montserrat font-bold text-white' key={item.country} >{item.country}</h1>
                            <h1 className='font-montserrat font-bold text-white' key={item.emitted} >{item.emitted}</h1>
                            <h1 className='font-montserrat font-bold text-white' key={item.retire} >{item.retire}</h1>
                        

                        
                        
                    </div>
                    )}) : state.list.map(item => {
                    return (
                        <div className="w-auto h-16 bg-gray-table-topic rounded-md my-4 mx-4 container flex flex-row items-center justify-around">
                            <h1 className='font-montserrat font-bold px-16 text-white' key={item.position} >{item.position}</h1>
                            <h1 className='font-montserrat font-bold px-16 text-white' key={item.name} >{item.name}</h1>
                            <h1 className='font-montserrat font-bold px-16 text-white' key={item.country} >{item.country}</h1>
                            <h1 className='font-montserrat font-bold px-16 text-white' key={item.emitted} >{item.emitted}</h1>
                            <h1 className='font-montserrat font-bold px-16 text-white' key={item.retire} >{item.retire}</h1>
                        </div>
                    )

                    }))}
                </ul>  

                
            </div>
        </div>
    )
}