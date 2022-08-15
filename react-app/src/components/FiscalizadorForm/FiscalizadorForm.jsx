import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import orgaosFiscalizadoresService from '../../services/orgaosFiscalizadoresService';

const ProdutoForm = () => {
  const [fiscalizador, setFiscalizador] = useState({});
  const routeParams = useParams();
  const fiscalizadorId = routeParams.fiscalizadorId;

  const { description, image } = fiscalizador;
  const formTitleName = description;

  useEffect(() => {
    orgaosFiscalizadoresService.getOne(fiscalizadorId).then((fiscalizador) => {
      setFiscalizador(fiscalizador);
    });
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFiscalizador((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = { ...fiscalizador };

    if (fiscalizadorId) {
      orgaosFiscalizadoresService.update(fiscalizadorId, obj).then(() => {
        alert(
          `${obj.description} foi atualizado, clique em OK para voltar a página inicial`
        );
        window.location = 'http://127.0.0.1:5173/';
      });
    } else {
      orgaosFiscalizadoresService.create(obj).then(() => {
        alert(
          `${obj.description} foi criado, clique em OK para voltar a página inicial`
        );
        window.location = 'http://127.0.0.1:5173/';
      });
    }
  };

  return (
    <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-lg mx-auto text-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>
          {fiscalizadorId ? `Editando ${formTitleName}` : 'Novo Orgão fiscalizador'}
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className='max-w-md mx-auto mt-8 mb-0 p-2.5 space-y-4 border-2 border-gray-200 rounded-md'
      >
        <div>
          <label htmlFor='description' className='text-sm font-medium'>
            Descrição
          </label>

          <div className='relative'>
            <input
              name='description'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: Receita Federal'
              value={description ? description : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='image' className='text-sm font-medium'>
            Image
          </label>

          <div className='relative'>
            <input
              name='image'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-700 rounded-lg shadow-md'
              placeholder='Ex: https://url-da-imagem-aqui.com'
              value={image ? image : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <Link
            to={`/fiscalizadores/${fiscalizadorId}`}
            className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
          >
            Voltar
          </Link>

          <button
            type='submit'
            className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
          >
            {fiscalizadorId ? 'Atualizar' : 'Criar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProdutoForm;
