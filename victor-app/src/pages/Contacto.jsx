import React from 'react';
import { useParams, Outlet } from 'react-router-dom';

const Contacto = () => {
  const { username } = useParams();

  const localImage = '/morgado.png';

  return (
    <div>
      <h1>Contacto</h1>
      <p>Usuario: {username}</p>
      {username.toLowerCase() === 'morgado' ? (
        <img
          src={localImage}
          alt={`Avatar de ${username}`}
          style={{ borderRadius: '20%', width: '150px', height: '150px' }}
        />
      ) : (
        <p>Este usuario no tiene imagen</p>
      )}
      <div style={{ marginTop: '20px' }}>
        <h2>José Antonio Morgado Berruezo</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default Contacto;


