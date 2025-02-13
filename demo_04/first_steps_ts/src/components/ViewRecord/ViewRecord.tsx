import React from 'react';
import './ViewRecord.css';

type ViewRecordProps = {
  data: {
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
  };
};

const ViewRecord: React.FC<ViewRecordProps> = ({ data }) => {
  return (
    <div className="view-record">
      <h2>Datos Registrados</h2>
      <p><strong>Nombre:</strong> {data.nombre}</p>
      <p><strong>Correo Electrónico:</strong> {data.email}</p>
      <p><strong>Teléfono:</strong> {data.telefono}</p>
      <p><strong>Dirección:</strong> {data.direccion}</p>
    </div>
  );
};

export default ViewRecord;