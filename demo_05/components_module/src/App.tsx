import './App.css'

//Components
import { ComponenteA, ComponenteB, ComponenteC } from './components'

function App() {
  const direccion = {
    calle: 'Calle 123',
    ciudad: 'Bogota',
    pais: 'Colombia',
  }
  return (
    <>
      <ComponenteA />
      <hr />
      <ComponenteB />
      <hr />
      <ComponenteC nombre="Carlos" apellidos="Rojas" identificacion={1234} direccion={direccion} />
    </>
  )
}

export default App
