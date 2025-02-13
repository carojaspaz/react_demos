const ComponenteC = (props) => {
  console.log("ComponenteC", props);
  return (
    <div>
      <h1>Este es el Componente</h1>
      <ul>
        <li>Nombre: {props.nombre}</li>
        <li>Apellidos: {props.apellidos}</li>
        <li>
          Dirección: {props.direccion.calle}, {props.direccion.ciudad},{" "}
          {props.direccion.pais}
        </li>
      </ul>
    </div>
  );
};

export default ComponenteC;
