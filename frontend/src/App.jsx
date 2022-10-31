import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Home } from './Components/Home'
import { Routes, Route, Link } from "react-router-dom";
import { Addjobs } from './Components/Addjobs'
import { Myjobs } from './Components/Myjobs'
import { Application } from './Components/Application'
import { Register } from './Components/Register'
import { Login } from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}  ></Route>
        <Route path="/jobs" element={<Home />}  ></Route>
        <Route path="/addjobs" element={<Addjobs />}  ></Route>
        <Route path="/myjobs" element={<Myjobs />}  ></Route>
        <Route path="/applications" element={<Application />}  ></Route>
        <Route path="/register" element={<Register />}  ></Route>
        <Route path="/login" element={<Login />}  ></Route>
      </Routes>
    </div>
  )
}

export default App
