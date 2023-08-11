import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Jokes from './Jokes'
import Loading from './Loading'

function App() {
  const [loading, setLoading] = useState(true)
  const [jokes, setJokes] = useState([])

  const handleChange = () => {
    fetchJokes()
  }

  const fetchJokes = async () => {
    const headers = { 'Accept': 'application/json' }
    setLoading(true)
    try {
      const response = await axios.get("https://icanhazdadjoke.com/", { headers })
      const newJoke = { id: response.data.id, joke: response.data.joke }
      setJokes(prevJokes => [newJoke, ...prevJokes]);
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJokes();
  }, [])

  return (
    <>
      {loading ? (<Loading />) : (<Jokes {...jokes[0]} handleChange={handleChange} />)
      }
    </>
  )
}


export default App
