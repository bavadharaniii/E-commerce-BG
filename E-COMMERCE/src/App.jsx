import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/home.jsx'
import Productpage from './Pages/product.jsx'


function App() {
    return (
        <div>
            <h1>This is my home page</h1>
            <Home />
            <Productpage />
        </div>
    )
}

export default App;