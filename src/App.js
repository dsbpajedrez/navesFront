import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [naves,setNaves] =useState({})
  useEffect(()=>{
    fetch('http://localhost:3001/tripulada')
      .then(respuesta=>respuesta.json())
      .then(data=> setNaves(data))
  },[])
  console.log(naves);
  return (
    <div className="App">
      <p></p>
    </div>
  );
}

export default App;
