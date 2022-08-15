import React, { useState,useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import lotesService from '../../services/lotesService';

const LoteForm = () => {
  const [lote, setLote] = useState({});
  const [lotes, setLotes] = useState([]);
  const routeParams = useParams();
  const loteId = routeParams.loteId;
  console.log(lote)

 useEffect(() => {
    lotesService.getAll().then((lotes) => {
      setLotes(lotes);
    });
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setLote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = { ...lote };
    
    let control=lotes.find((lote) => {
      return  lote.pg_descricao === obj.desc.toUpperCase()
    });
    
    if(control!=undefined){
        alert('Esse grupo já existe');
        return 0;
        }
   
   
    lotesService.create(obj).then(() => {
      alert(
        `${obj.desc} foi criado, clique em OK para voltar a página inicial`
      );
      window.location = 'http://127.0.0.1:5173/';
    });
  };

  return (
    <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-lg mx-auto text-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>Novo Grupo</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className='max-w-md mx-auto mt-8 mb-0 p-2.5 space-y-4 border-2 border-gray-200 rounded-md'
      >
        <div>
          <label htmlFor='orgaoDonatario' className='text-sm font-medium'>
           Descricao
          </label>

          <div className='relative'>
            <input
              name='desc'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder=''
              onChange={handleInputChange}
            />
          </div>
        </div>
       

        <div className='flex items-center justify-between'>
          <Link
            to={`/`}
            className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
          >
            Voltar
          </Link>

          <button
            type='submit'
            className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
          
    >
            {loteId ? 'Atualizar' : 'Criar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoteForm;
