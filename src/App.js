import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Men from "./Men"
import Women from "./Women"

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="men" element={ <Men/> } />
          <Route path="women" element={ <Women/> } />
        </Routes>
      </div>
    )
  }
  
  export default App