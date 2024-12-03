import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Stories from './pages/Stories.jsx'
import Todo from './pages/Todo.jsx'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/stories" element={<Stories/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/donate" element={<Todo/>}/>
      </Routes>
    </Router>
  )
}

export default App
