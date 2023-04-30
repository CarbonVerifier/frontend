import { useState } from "react";
import { useContext } from "react";
import { WalletContext } from "../App";
import Globe from "./Globe";

export default function Swap() {
    const [amount, setAmount] = useState(0);
    const { walletAddress } = useContext(WalletContext);
    const [fromToken, setFromToken] = useState("weth");

    const tokens = {
        'matic': '0x2d7882beDcbfDDce29Ba99965dd3cdF7fcB10A1e',
        'weth': '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
    }

    const walletAddressEither = localStorage.getItem("accounts") || walletAddress;

    function swap() {
        console.log({
            "amount": amount,
            "toTokenAddress": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
            "fromTokenAddress": fromToken,
            "makerAddress": walletAddressEither
        })
        fetch('http://localhost:3001/swap_tokens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "amount": amount,
                "toTokenAddress": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
                "fromTokenAddress": tokens[fromToken],
                "makerAddress": walletAddressEither
            }),
        })

    }

    return (
        <div className="h-screen w-full bg-background flex items-center justify-center">

            <div className="w-1/2 h-1/2 bg-gray-swap rounded-md mx-8 overflow-auto flex flex-col items-center justify-center gap-5">

                <div className="flex flex-row items-center justify-center text-white font-bold font-md gap-10">
                    <select className="bg-[#414141] 
                text-white py-2 px-4 rounded-md" onChange={(e) => setFromToken(e.target.value)}>
                        <option value='weth'>WETH</option>
                        <option value='matic'>MATIC</option>
                    </select>
                    <p>TO</p>
                    <div className="bg-[#414141] py-2 px-4 rounded-md">
                        CFV
                    </div>
                </div>

                <p></p>
                <input onChange={(e) => setAmount(e.target.value)} type="number" />
                <button className="bg-gradient-to-r from-[#414141] to-[#1f1f1f] 
                text-white py-2 px-4 rounded-md font-bold" onClick={swap}>SWAP</button>

            </div>
        </div>
    )
}