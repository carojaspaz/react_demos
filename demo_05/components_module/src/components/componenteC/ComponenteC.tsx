interface Props {
  nombre: string;
  apellidos: string;
  identificacion: number;
  direccion: {
    calle: string;
    ciudad: string;
    pais: string;
  };
}

const ComponenteC = (props: Props) => {
  console.log(props);
  return (
    <div>
      <h1>Este es el Componente</h1>
      <ul>
        <li>Nombre: {props.nombre}</li>
        <li>Apellidos: {props.apellidos}</li>
        <li>Identificación: {props.identificacion}</li>
        <li>
          Dirección: {props.direccion.calle}, {props.direccion.ciudad},{" "}
          {props.direccion.pais}
        </li>
      </ul>
    </div>
  );
};

export default ComponenteC;