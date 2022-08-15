import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import orgaosFiscalizadoresService from '../../services/orgaosFiscalizadoresService';

const FiscalizadorDetail = () => {
  const [fiscalizador, setProduto] = useState({});
  const routeParams = useParams();
  const fiscalizadorId = routeParams.fiscalizadorId;

  useEffect(() => {
    orgaosFiscalizadoresService.getOne(fiscalizadorId).then((fiscalizador) => {
      setProduto(fiscalizador);
    });
  }, []);

  const handleRemoveProduto = () => {
    if (window.confirm(`Deseja excluir ${fiscalizador.description}?`)) {
      orgaosFiscalizadoresService.remove(fiscalizadorId).then(() => {});
      alert(
        `${fiscalizador.description} foi excluido, você será redirecionado para a tela inicial`
      );
      window.location = 'http://127.0.0.1:5173/';
    }
  };

  const { description, image } = fiscalizador;

  return (
    <div>
      <Link
        to={'/'}
        className='ml-5 text-2xl font-extrabold tracking-wide lg:text-3xl'
      >
        &larr;
      </Link>
      <div className='grid h-screen place-items-center'>
        <div className='block'>
          <img
            alt={description}
            src={image}
            className='object-cover w-full -mt-3 h-[350px] sm:h-[450px]'
          />

          <div className='flex items-center justify-between mt-4 font-medium'>
            <p>{description}</p>

            <div>
              <Link
                replace
                to={`/fiscalizadores/edit/${fiscalizadorId}`}
                className='h-6 px-4 mb-1 text-sm grid h-screen place-items-center leading-6 border border-black text-black hover:text-white uppercase bg-white hover:bg-black transition-all transition-duration: 150ms'
              >
                Editar
              </Link>
              <button
                onClick={handleRemoveProduto}
                className='h-6 px-4 text-sm grid h-screen place-items-center leading-6 border border-black text-white hover:text-black uppercase bg-black hover:bg-white transition-all transition-duration: 150ms'
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiscalizadorDetail;
