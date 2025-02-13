import { useState, useEffect } from "react";

function RelojFuncional() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
        console.log('Unmounting hook');
        clearInterval(timer)
    }; // Limpieza en desmontaje
  }, []);

  return <h1>Hora actual: {hora}</h1>;
}

export default RelojFuncional;