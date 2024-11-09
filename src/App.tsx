import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setsocket] = useState(null)
  useEffect(() => (
    const socket = new WebSocket('ws://localhost:8080')
    WebSocket.onopen = () => (
      console.log('Connected')
    )
    setSocket(socket)

    return () => {
      socket.close()
    }
  ))
  return (
    <>
      
    </>
  )
}

export default App
