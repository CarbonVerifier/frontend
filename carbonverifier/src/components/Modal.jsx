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

  const connectInch = async () => {
    window["__1inch_connect_init_rpc__"] = {
      1: "https://mainnet.infura.io/v3/5851ae72b9fc41228470db23c2c9154d",
    };
  };

  const [provider, setProvider] = useState(null);
  const symbol1nch = Symbol("__1inch__");

  const loadAndShow = () => {
    window["__1inch_connect_init_rpc__"] = {
      1: "https://mainnet.infura.io/v3/5851ae72b9fc41228470db23c2c9154d",
    };

    const scriptNode = document.createElement("script");
    scriptNode.setAttribute(
      "src",
      "https://cdn.1inch.io/mobile/connect_button/desktop.js"
    );
    scriptNode.async = true;
    scriptNode.onload = () => {};
    scriptNode.onerror = () => {
      const load_and_show_qr = document.getElementById("load_and_show_qr");
      load_and_show_qr.removeAttribute("disabled");
    };
    window.addEventListener("1inch_connect_button_init", (e) => {
      e.detail.provider.enable().then(() => {
        console.log(
          "provider",
          e.detail.provider.chainId,
          e.detail.provider.accounts
        );
        localStorage.setItem("chainId", e.detail.provider.chainId);
        localStorage.setItem("accounts", e.detail.provider.accounts);

        setProvider(null);
        window.location.reload();
      });
    });
    document.body.appendChild(scriptNode);
  };

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
            <button className="bg-gradient-to-r from-[#414141] to-[#1f1f1f] 
                text-white py-2 px-4 rounded-md" id="load_and_show_qr" onClick={loadAndShow}>
              1inch wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
