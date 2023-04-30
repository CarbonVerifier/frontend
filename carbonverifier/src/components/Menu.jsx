import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import Home from '../pages/Home';
import Modal from './Modal';
import { useContext } from 'react';
import { WalletContext } from '../App';

export default function Menu() {
    const { isConnected } = useContext(WalletContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex justify-between w-full absolute top-5 font-montserrat items-center text-white font-bold px-5 text-sm'>
            <div className='flex justify-between items-center gap-10'>
                <img src={logo} alt="Carbon Verifier Logo" className='w-14' />
                <Link to={Home}>Home</Link>
                <Link to={Home}>Swap</Link>
                <Link to={Home}>Top Buyers</Link>
            </div>
            <div className='flex justify-between'>
                <button className='bg-gradient-to-r from-[#414141] to-[#1f1f1f] 
                text-white py-2 px-4 rounded-md'
                    onClick={() => setIsOpen(true)}>{isConnected ? 'Connected' : 'Connect wallet'}</button>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen}/>}
        </div>
    )
}