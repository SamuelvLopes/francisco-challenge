import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import orgaosDonatariosService from '../../services/orgaosDonatariosService';

const DonatarioDetail = () => {
  const [donatario, setDonatario] = useState({});
  const routeParams = useParams();
  const donatarioId = routeParams.donatarioId;

  useEffect(() => {
    orgaosDonatariosService.getOne(donatarioId).then((donatario) => {
      setDonatario(donatario);
    });
  }, []);

  const handleRemoveProduto = () => {
    if (window.confirm(`Deseja excluir ${donatario.name}?`)) {
      orgaosDonatariosService.remove(donatarioId).then(() => {});
      alert(
        `${donatario.name} foi excluido, você será redirecionado para a tela inicial`
      );
      window.location = 'http://127.0.0.1:5173/';
    }
  };

  const { name, address, phone, openingHour, description, image } = donatario;

  return (
    <div>
      <Link
        to={'/'}
        className='ml-5 text-2xl font-extrabold tracking-wide lg:text-3xl'
      >
        &larr;
      </Link>
      <div className='grid h-screen place-items-center'>
        <div className='block w-2/4'>
          <img
            alt={description}
            src={image}
            className='object-cover w-full mt-3 h-[350px] sm:h-[450px]'
          />

          <h5>
            {name} - {description}
          </h5>

          <div className='flex items-center justify-between mt-4 font-medium'>
            <p>
              Telefone: {phone}
              <br />
              Endereço: {address}
              <br />
              Funcionamento: {openingHour}
            </p>

            <div>
              <Link
                replace
                to={`/donatarios/edit/${donatarioId}`}
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

export default DonatarioDetail;
