import { useEffect, useState } from "react";

import divipola from "./Data.json";

const CascadeDDL = () => {
  const [idState, setIdState] = useState(0);
  const [states, setStates] = useState<
    { id: number; departamento: string; municipios: string[] }[]
  >([]);
  const [municipalities, setMunicipalieties] = useState<string[]>([]);

  useEffect(() => {
    setStates(divipola);
  }, []);

  useEffect(() => {
    setMunicipalieties(states.find((s) => s.id == idState)?.municipios || []);
    return () => {
      //Limpiar los DDL
    };
  }, [idState]);

  const handlerOnChange = (e: any) => {
    setIdState(e.target.value);
  };

  return (
    <>
      <select onChange={handlerOnChange}>
        <option>Seleccionar Departamento</option>
        {states.map((state, index) => (
          <option key={`state-${index}`} value={state.id}>
            {state.departamento}
          </option>
        ))}
        ;
      </select>
      <hr />
      <select>
        <option>Seleccionar Municipio</option>
        {municipalities.map((m, i) => (
          <option key={`mun-${i}`} value={m}>
            {m}
          </option>
        ))}
      </select>
    </>
  );
};

export default CascadeDDL;
