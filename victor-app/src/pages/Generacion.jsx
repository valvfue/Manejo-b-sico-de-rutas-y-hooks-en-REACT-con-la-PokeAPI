import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Generacion = ({ generation }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const ids = Array.from({ length: 10 }, () => Math.floor(Math.random() * 151) + 1); 
        const promises = ids.map(id => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`));
        const results = await Promise.all(promises);
        setPokemon(results.map(res => res.data));
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };
    fetchPokemon();
  }, [generation]);

  return (
    <div>
      <h1>Generación {generation}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {pokemon.map(poke => (
          <div key={poke.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h2>{poke.name}</h2>
            <img src={poke.sprites.front_default} alt={poke.name} />
            <p>Tipo: {poke.types.map(type => type.type.name).join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Generacion;
