import { useState, useContext } from "react";
import { WalletContext } from "../App";

export default function Modal({setIsOpen}) {
    const { isConnected, setIsConnected, walletAddress, setWalletAddress } = useContext(WalletContext);

    const connectWallet = async () => {
        try {
            if (!ethereum) {
                alert("Instale uma carteira como Metamask");
            }
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            setWalletAddress(accounts[0]);
            setIsConnected(true);
            setIsOpen(false)
        } catch (error) {
            setIsConnected(false);
        }
    }

    const connectInch = async () => {
        window['__1inch_connect_init_rpc__'] = {
            1: "https://mainnet.infura.io/v3/5851ae72b9fc41228470db23c2c9154d"
        };
    }

    return (
        (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-10 font-montserrat">
                <div className="bg-background rounded-lg p-6 w-96">
                    <h2 className="text-lg font-bold mb-4">Connect your wallet...</h2>
                    <div className='flex flex-col justify-start font-regular'>
                        <button onClick={connectWallet}>with Metamask</button>
                        <div onClick={connectInch} className="login-with-1inch-btn">Botão</div>
                    </div>
                </div>

            </div>

        )
    )
}