import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from'./Components/Projects';
import Contact from './Components/Contact';
import Aos from "aos";
import "aos/dist/aos.css"
const App=()=>{
  useEffect(()=>{
Aos.init();
  },[])
  return(
<>
<Navbar/>
<div className="container">
  
<Home/>
<Projects/>
<Skills/>

<Contact/>
</div>


</>
  )
}

export default App;
