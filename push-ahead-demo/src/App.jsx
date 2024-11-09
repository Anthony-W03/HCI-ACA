import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home.jsx'
//import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
//import Stories from './pages/Stories.jsx'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/about" element={<About/>}/> */}
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/stories" element={<Stories/>}/> */}
      </Routes>
    </Router>
  )
}

export default App
