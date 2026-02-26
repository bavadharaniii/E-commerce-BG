<<<<<<< HEAD
import React from "react";
import Wishlist from "./pages/Wishlist";

function App() {
  return <Wishlist />;
}

export default App;





=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/home.jsx'
import Productpage from './Pages/product.jsx'
import About from './Pages/about.jsx'
>>>>>>> d03ae62f5a288159f93697e21ab4760b684c9dea


function App() {
    return (
        <div>
            <h1>this is my hone page</h1>
            <Home />
            <Productpage />
            <About/>
        </div>
    )
}

export default App;