import { useEffect, useState } from "react";

const Mounting = () => {

    const [contador, setContador] = useState(0);

    useEffect(()=>{
        console.log("Componente montado");
    }, []);

    useEffect(() => {
        console.log("Component actualizado")
    }, [contador]);
    
    return (
        <div>
            <h1>Reemplazo del componentDidMount</h1>
            <hr />
            <h1>Actualziacion del componente</h1>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    )
}

export default Mounting;