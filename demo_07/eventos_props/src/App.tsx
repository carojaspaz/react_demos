import ButtonClick from './components/ButtonClick'
import InputEjemplo from './components/OnChange';
import Register from './components/OnSubmit';
import BotonEjemplo from './components/OnMouse';


import './App.css'

function App() {
   const handleRegister = (data: { nombre: string; email: string; telefono: string; direccion: string }) => {
    console.log("Submitted", data);
  };
  return (
    <>
      <h1>Eventos y props</h1>
      <ButtonClick />     
      <hr />
      <InputEjemplo />
      <hr />
      <BotonEjemplo />
      <hr />
      <Register onRegister={handleRegister} />
    </>
  )
}

export default App
