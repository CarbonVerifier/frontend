import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Ranking from './pages/Ranking'
import Admin from './pages/Admin'
import BuyCVT from './pages/BuyCVT'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/buycvt" element={<BuyCVT />} />
      </Routes>
    </Router>
  )
}

export default App
