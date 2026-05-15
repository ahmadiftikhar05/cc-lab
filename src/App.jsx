import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({ message: 'Loading...', time: '' })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/hello')
        if (!response.ok) throw new Error('API failed')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error:', error)
        setData({
          message: 'Hello from React!',
          time: new Date().toISOString(),
        })
      }
    }

    fetchData()
  }, [])

  return (
    <div className="home-page">
      <div className="info-container">
        <h1>Welcome</h1>
        <div className="info-item">
          <label>Name :</label>
          <span>Ahmad Iftikhar Khan</span>
        </div>
        <div className="info-item">
          <label>Enrollment :</label>
          <span>01-131232-009</span>
        </div>
        <div className="info-item">
          <label>Message :</label>
          <span>{data.message}</span>
        </div>
        <div className="info-item">
          <label>Time :</label>
          <span>{new Date(data.time).toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}

export default App
