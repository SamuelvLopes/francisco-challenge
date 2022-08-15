import React from 'react';
import { Link } from 'react-router-dom';

const Fiscalizador = ({ fiscalizador }) => {
  const { id, description, image } = fiscalizador;

  return (
    <Link to={`/fiscalizadores/${id}`} className='block'>
      <img
        alt={description}
        src={image}
        className='object-cover w-full -mt-3 h-96'
      />

      <div className='flex Fiscalizadors-center justify-between mt-4 font-bold'>
        <p className='text-lg'>{description}</p>
      </div>
    </Link>
  );
};

export default Fiscalizador;