import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BitcoinRates from './components/BitcoinRates'
import BitcoinRateswHooks from './components/BitcoinRateswHooks'
import Emoji from './components/Emoji'
import { EmojiProvider } from './context/EmojiContext'

import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar';



function App() {
 

  return (
    <Router>
      <NavBar />
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={viteLogo} className="logo vite" alt="Vite logo" />
      </div>

      <div className="card">

      <BitcoinRates />

      <EmojiProvider>

      <Emoji />
      <BitcoinRateswHooks />

      </ EmojiProvider >


      </div>

      </Router>
  );
}


export default App
