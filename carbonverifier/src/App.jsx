import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import Home from './pages/Home'
import Ranking from './pages/Ranking'
import Company from './pages/Company';

export const WalletContext = createContext(); 

function App() {
  const [walletAddress, setWalletAddress] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  return (
    <WalletContext.Provider value={{walletAddress, setWalletAddress, isConnected, setIsConnected}}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Ranking />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </Router>
    </WalletContext.Provider>
  )
}

export default App
