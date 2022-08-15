import React from 'react';
import { Link } from 'react-router-dom';

const Produto = ({ donatario }) => {
  const { id, name, address, phone, description, image } = donatario;

  return (
    <Link to={`/donatarios/${id}`} className='block'>
      <img
        alt={name}
        src={image}
        className='object-cover w-full -mt-3 h-96'
      />

      <h5 className='mt-4 text-sm text-black/90'>{name} - {description}</h5>

      <div className='flex flex-col Produtos-center justify-between mt-4 font-bold'>
        <p className='text-lg'>{address}</p>
        <p className='text-lg'>{phone}</p>
      </div>
    </Link>
  );
};

export default Produto;