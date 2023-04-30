import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import Home from './pages/Home'
import Ranking from './pages/Ranking'
import Admin from './pages/Admin'
import BuyCVT from './pages/BuyCVT'

export const WalletContext = createContext(); 

function App() {
  const [walletAddress, setWalletAddress] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  return (
    <WalletContext.Provider value={{walletAddress, setWalletAddress, isConnected, setIsConnected}}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/buycvt" element={<BuyCVT />} />
      </Routes>
    </Router>
    </WalletContext.Provider>
  )
}

export default App
