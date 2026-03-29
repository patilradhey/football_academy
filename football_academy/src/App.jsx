import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Hero from './components/Hero'
import Coaches from './components/Coaches'
import PlayerWeek from './components/PlayerWeek'
import Gallery from './components/Gallery'
import JoinTeam from './components/JoinTeam'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
      <Hero />
      <Coaches />
      <PlayerWeek />
      <Gallery />
      <JoinTeam />
      <Footer />
    </div>
    </>
  )
}

export default App
