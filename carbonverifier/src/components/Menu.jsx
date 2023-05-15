import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { WalletContext } from "../App";

export default function Menu() {
  const { 
    walletAddress, setWalletAddress, isConnected, setIsConnected 
  } = useContext(WalletContext);

  const { ethereum } = window;

  const accounts = ethereum.request({
    method: 'eth_requestAccounts',
  }).then(accounts => {
    if (accounts.length === 0) {
      setIsConnected(false);
    } else {
      setWalletAddress(accounts[0]);
      setIsConnected(true);
    }
  }
  )

  async function connectWallet() {
    try {
      if (!ethereum) {
        alert("Install the Metamask extension")
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setWalletAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  }

  function accessMyPage() {
    alert("My page");
  }

  return (
    <div className="flex justify-between w-full absolute top-5 font-montserrat items-center text-white font-bold px-5 text-sm">
      <div className="flex justify-between items-center gap-10">
        <img src={logo} alt="Carbon Verifier Logo" className="w-14" />
        <Link to={"/"}>Home</Link>
        <Link to={"/ranking"}>Companies</Link>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-gradient-to-r from-[#414141] to-[#1f1f1f] 
                text-white py-2 px-4 rounded-md"
          onClick={() => isConnected ? accessMyPage() : connectWallet()}
        >
          {isConnected ? "Connected" : "Connect wallet"}
        </button>
      </div>
    </div>
  );
}
