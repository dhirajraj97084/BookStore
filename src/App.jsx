import React from 'react'
import Navbar from './component/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';


function App() {
  return (
    <div>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
   </Router>
    </div>
  )
}

export default App
