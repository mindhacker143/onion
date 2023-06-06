import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Coliflower from './coliflower'
import Brocli from './brocli'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen  '>
        <Coliflower></Coliflower>
        <Brocli></Brocli>
      </div>
    </>
  )
}

export default App
