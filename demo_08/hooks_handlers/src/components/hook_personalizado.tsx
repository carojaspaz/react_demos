import useContador from '../hooks/useContador';

const MiContador = () => {
  const { contador, incrementar, decrementar } = useContador(20);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default MiContador;
