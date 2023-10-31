'use client'
import React, { useState } from 'react';

const Formulario = () => {
  const [nuevoElemento, setNuevoElemento] = useState('');
  const [elementos, setElementos] = useState([]);
  
  const agregarElemento = () => {
    if (nuevoElemento.trim() !== '') {
      setElementos([...elementos, nuevoElemento]);
      setNuevoElemento('');
    }
  };

  const eliminarElemento = (index) => {
    const nuevaLista = elementos.filter((_, i) => i !== index);
    setElementos(nuevaLista);
  };

  return (
    <div >
      <input
        type="text" 
        placeholder='ELEMENTO PARA LA LISTA' className='bg-gray-400-300 p-3'
        value={nuevoElemento}
        onChange={(e) => setNuevoElemento(e.target.value)}
      />
      <button className='bg-green-400 p-3 m-3'   onClick={agregarElemento}>AGREGAR</button>

      <ul>
      {elementos.map((elemento, index) => (
          <li key={index}>
            {elemento}
            <button className='p-3 bg-red-400 m-3' onClick={() => eliminarElemento(index)}>ELIMINAR</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Formulario;
