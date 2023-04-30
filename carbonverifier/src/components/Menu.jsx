import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";
import Home from "../pages/Home";
import Modal from "./Modal";
import { useContext } from "react";
import { WalletContext } from "../App";
import Ranking from "../pages/Admin";
import Admin from "../pages/Admin";

export default function Menu() {
  const isConnected =
    localStorage.getItem("accounts") != null ||
    useContext(WalletContext).isConnected;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between w-full absolute top-5 font-montserrat items-center text-white font-bold px-5 text-sm">
      <div className="flex justify-between items-center gap-10">
        <img src={logo} alt="Carbon Verifier Logo" className="w-14" />
        <Link to={"/"}>Home</Link>
        <Link to={"/swap"}>Swap</Link>
        <Link to={"/ranking"}>Top Buyers</Link>
        <Link to={"/admin"}>Admin</Link>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-gradient-to-r from-[#414141] to-[#1f1f1f] 
                text-white py-2 px-4 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          {isConnected ? "Connected" : "Connect wallet"}
        </button>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}
