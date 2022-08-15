import React from 'react';
import { Link } from 'react-router-dom';

const Produto = ({ produto }) => {
  const { id, description, image } = produto;

  return (
    <Link to={`/produtos/${id}`} className='block'>
      <img
        alt={description}
        src={image}
        className='object-cover w-full -mt-3 h-96'
      />

      <h5 className='mt-4 text-sm text-black/90'>{description}</h5>

      <div className='flex Produtos-center justify-between mt-4 font-bold'>
        <p className='text-lg'>{description}</p>
      </div>
    </Link>
  );
};

export default Produto;