import Navbar from './components/navbar/Navbar'
import './App.css'
import Heros from './components/hero/Hero'
import { useEffect, useState } from 'react'

function App() {
    const [days, setDays] = useState([])

    
    useEffect(() => {
    fetch('https://mocki.io/v1/8246de62-17ac-44f8-81db-77bbf6be7d9e')
      .then(res => res.json())
      .then(data => setDays(data))}, [])

return (
    <div className='App'>
        <Navbar />
        <Heros days={days}/>
    </div>
)

}

export default App
