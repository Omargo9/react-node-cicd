import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'



function App() {
  const [name, setName] = useState('')

  useEffect(() => {
    getName()
   
  }, [])

  const getName = async () =>{
     const response = await  axios.get("http://localhost:5000/names")
     setName(response.data)
  }

  return (
    <h1> Hello Mr {name} !! </h1>
  );
}

export default App;
