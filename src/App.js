import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [naves,setNaves] =useState({})
  useEffect(()=>{
    fetch('http://localhost:3001/tripulada')
      .then(respuesta=>respuesta.json())
      .then(data=> setNaves(data))
  },[])

  return (
    <div className="App">
      <p>Hellooo</p>
    </div>
  );
}

export default App;
