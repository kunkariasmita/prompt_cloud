import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import PromptsTable from './components/PromptsTable/PromptsTable.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className = 'min-h-screen bg-slate-950 text-white overflow-hidden'>
      <Navbar/>
      <Hero />
      <PromptsTable />
    </div>
    </>
  )
}

export default App
