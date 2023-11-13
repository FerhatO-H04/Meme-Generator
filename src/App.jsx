import { useState } from 'react'
import {Header} from "./Components/Header/header"
import {Hero} from "./Components/Hero/hero"





import './App.css'

function App() {
 

  return (
    <div className='Container'>
      <Header/>
      <div className="subContainer">
        <Hero/>
      
      </div>
    </div>
  )
}

export default App
