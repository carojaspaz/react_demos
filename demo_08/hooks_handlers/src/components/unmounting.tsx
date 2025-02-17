import { useState, useEffect } from "react";

const Reloj = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log("Componente desmontado, limpiando intervalo...");
      clearInterval(intervalo);
    };
  }, []);

  return <h2>Hora actual: {hora}</h2>;
};

export default Reloj;
