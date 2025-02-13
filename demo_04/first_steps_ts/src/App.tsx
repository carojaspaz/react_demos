import React, { useState } from 'react'
import './App.css'

//Components
import Register from './components/Register/Register'
import ViewRecord from './components/ViewRecord/ViewRecord'
import List from './components/List/List'
import Button from './components/Button/Button'

function App() {

  const [submittedData, setSubmittedData] = useState<{
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
  } | null>(null);

  const teams = ["Real Madrid", "Barcelona", "Atletico de Madrid", "Valencia", "Sevilla"];

   const handleRegister = (data: { nombre: string; email: string; telefono: string; direccion: string }) => {
    setSubmittedData(data);
  };

  return (
    <>
      <div>
        <h1>Registro de Usuarios</h1>
      {!submittedData ? (
        <Register onRegister={handleRegister} />
      ) : (
        <ViewRecord data={submittedData} />
      )}
      </div>
      <hr />
      <Button label='Click Me' onClick={()=>{console.log("Button clicked")}} />
      <hr />
      <List items={teams} />
    </>
  )
}

export default App
