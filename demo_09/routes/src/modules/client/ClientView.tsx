import { useParams } from "react-router-dom";

const ClientView = () => {
    const { id } = useParams<{ id: string }>();

    return <h1>Visor de Clientes {id} </h1>
}

export default ClientView;