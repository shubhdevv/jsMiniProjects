import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Footer/>
    <Home />
    </>
  )
}

export default App
