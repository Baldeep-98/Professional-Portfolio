import React from 'react'
import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
const App=()=>{
  return(
<>
<Navbar/>
<div className="container">
<Home/>
<Skills/>
</div>


</>
  )
}

export default App;
