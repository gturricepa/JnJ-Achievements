import { useState } from 'react'
import { Login } from './components/Login'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'
import ProtectedRoute from './ProtectedRoute'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='holder'>
     <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="*" element={<NotFound />} />
              </Routes>
    </Router>
    </div>
  )
}

export default App







