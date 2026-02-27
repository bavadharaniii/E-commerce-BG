import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/home.jsx'
import Productpage from './Pages/product.jsx'
import About from './Pages/about.jsx'
import WishlistnPage from './pages/WishlistnPage.jsx'
import Contact from './pages/contact.jsx'


function App() {
    return (
        <div>
            <h1>this is my hone page</h1>
            <Home />
            <Productpage />
            <About/>
            <WishlistnPage />
            <Contact />
        </div>
    )
}

export default App;