import { useState } from 'react' 
import './App.css'

//components
import Contador_Class from './components/hook_class'
import Contador_Func from './components/hook_func'
import MiContador from './components/hook_personalizado'
import Mounting from './components/mounting'
import Reloj from './components/unmounting'

function App() {
  const [toogleView, setToogleView] = useState(true);
  function handlerOnClick() {
     setToogleView(!toogleView)
  }
  return (
    <>
      <h1>Hook Usando Class</h1>
      <Contador_Class />
      <hr />
      <h1>Hook Funcional</h1>
      <Contador_Func />
      <hr />
      <h1>Hook Personalizado</h1>
      <MiContador />
      <hr />
      <h1>Use Effects</h1>
      <Mounting />
      <hr />
      <h1>Un mounting</h1>
      { toogleView? (
        <Reloj />
      ):(
        <h1>Reloj detenido</h1>
      )}
      <button onClick={handlerOnClick}>Ver/Ocultar Reloj</button>
    </>
  )
}

export default App
