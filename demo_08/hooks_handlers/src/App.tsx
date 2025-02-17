import './App.css'

//components
import Contador_Class from './components/hook_class'
import Contador_Func from './components/hook_func'
import MiContador from './components/hook_personalizado'


function App() {
 
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
    </>
  )
}

export default App
