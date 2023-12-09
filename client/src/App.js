 import React from 'react'
 import Navbar from './components/Navbar'
 import Home from  "./components/Home"
 import { Routes,Route } from "react-router-dom"
 import About from  "./components/About"
 import Contact from  "./components/Contact"
 import Login from  "./components/Login"
 import Signup from  "./components/Signup"
 import './App.css'
 
 
  

 
 const App = () => {
   return (
    <>
    <Navbar/>
    <Routes>
      <Route  path ='/' element={<Home/>}/>
      <Route path ='/about' element={<About/>}/>
      <Route path ='/contact' element={<Contact/>}/>
      <Route path ='/signup' element={<Signup/>}/>
      <Route path ='/login' element={<Login/>}/>
      


    
    </Routes>
 
    
    
    </>
    
   )
 }
 
 export default App