// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Route,BrowserRouter as Router , Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import {About,Home, Project ,Contact} from './pages';
const App = () => {
  return (
    <main className='bg-slate-300.20 h-full'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/Projects" element={<Project/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App