import { useState, useContext } from "react";
import { WalletContext } from "../App";

export default function Modal({ setIsOpen }) {
  const { isConnected, setIsConnected, walletAddress, setWalletAddress } =
    useContext(WalletContext);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        alert("Instale uma carteira como Metamask");
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
      setIsConnected(true);
      setIsOpen(false);
    } catch (error) {
      setIsConnected(false);
    }
  };


  const [provider, setProvider] = useState(null);


  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-10 font-montserrat">
      <div className="bg-background rounded-lg p-6 w-96">
        <h2 className="text-lg font-bold mb-4">Connect your wallet...</h2>
        <div className="flex flex-col justify-start font-regular">
          <button className="bg-gradient-to-r from-[#414141] to-[#1f1f1f] 
                text-white py-2 px-4 rounded-md mb-4" onClick={connectWallet}>Metamask wallet</button>
          <div
            onClick={connectInch}
            className="flex flex-col justify-start font-regular"
          >
          </div>
        </div>
      </div>
    </div>
  );
}
