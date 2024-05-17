import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        My balance
  $921.48

  Spending - Last 7 days

  mon
  tue
  wed
  thu
  fri
  sat
  sun

  Total this month
  $478.33

  +2.4%
  from last month
  
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/KlvnWr">Kelvin</a>.
    </div>
    </>
  )
}

export default App
