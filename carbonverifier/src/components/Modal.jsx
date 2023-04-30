import { useState } from "react";


export default function Modal() {
    const [haveMetamask, sethaveMetamask] = useState(true);
    const [isConnected, setIsConnected] = useState(false);
    const [accountAddress, setAccountAddress] = useState('');
    const [accountBalance, setAccountBalance] = useState(0);

        const connectWallet = async () => {
            try {
              if (!ethereum) {
                alert("Instale uma carteira como Metamask");
              }
              const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
              });
              setAccountAddress(accounts[0]);
              setIsConnected(true);
              alert()
            } catch (error) {
              setIsConnected(false);
            }
          }


    return (
        (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-10 font-montserrat">
                <div className="bg-background rounded-lg p-6 w-96">
                    <h2 className="text-lg font-bold mb-4">Connect your wallet...</h2>
                    <div className='flex flex-col justify-start font-regular'>
                        <button onClick={connectWallet}>with Metamask</button>
                        <div className="login-with-1inch-btn"></div>
                        <button onClick={connectWallet}>with WalletConnect</button>
                    </div>
                </div>

            </div>

        )
    )
}