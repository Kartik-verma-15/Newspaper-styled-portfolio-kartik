import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#f8f2e8] min-h-screen flex flex-col items-center justify-center">
      
      <Home />
    </div>
  )
}

export default App
