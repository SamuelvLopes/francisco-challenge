import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import orgaosDonatariosService from '../../services/orgaosDonatariosService';

const ProdutoForm = () => {
  const [donatario, setDonatario] = useState({});
  const routeParams = useParams();
  const donatarioId = routeParams.donatarioId;

  const { name, address, phone, openingHour, description, image } = donatario;
  const formTitleName = name;

  console.log(donatario);

  useEffect(() => {
    orgaosDonatariosService.getOne(donatarioId).then((donatario) => {
      setDonatario(donatario);
    });
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setDonatario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = { ...donatario };
    console.log(obj);

    if (donatarioId) {
      orgaosDonatariosService.update(donatarioId, obj).then(() => {
        alert(
          `${obj.name} foi atualizado, clique em OK para voltar a página inicial`
        );
        window.location = 'http://127.0.0.1:5173/';
      });
    } else {
      orgaosDonatariosService.create(obj).then(() => {
        alert(
          `${obj.name} foi criado, clique em OK para voltar a página inicial`
        );
        window.location = 'http://127.0.0.1:5173/';
      });
    }
  };

  return (
    <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-lg mx-auto text-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>
          {donatarioId ? `Editando ${formTitleName}` : 'Novo Prato'}
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className='max-w-lg mx-auto mt-8 mb-0 p-2.5 space-y-4 border-2 border-gray-200 rounded-md'
      >
        <div>
          <label htmlFor='name' className='text-sm font-medium'>
            Nome
          </label>

          <div className='relative'>
            <input
              name='name'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: Caridade'
              value={name ? name : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='description' className='text-sm font-medium'>
            Descrição
          </label>

          <div className='relative'>
            <input
              name='description'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: Instituição de Caridade'
              value={description ? description : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='address' className='text-sm font-medium'>
            Endereço
          </label>

          <div className='relative'>
            <input
              name='address'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: Rua Tal, Nº 1'
              value={address ? address : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='phone' className='text-sm font-medium'>
            Telefone
          </label>

          <div className='relative'>
            <input
              name='phone'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: (81) 9 9999-9999'
              value={phone ? phone : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='openingHour' className='text-sm font-medium'>
            Horário de Funcionamento
          </label>

          <div className='relative'>
            <input
              name='openingHour'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: das 07: ás 18:00'
              value={openingHour ? openingHour : ''}
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

        <div className='flex donatarios-center justify-between'>
          <Link
            to={`/donatarios/${donatarioId}`}
            className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
          >
            Voltar
          </Link>

          <button
            type='submit'
            className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
          >
            {donatarioId ? 'Atualizar' : 'Criar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProdutoForm;
