import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import produtosService from '../../services/produtosService';
import lotesService from '../../services/lotesService';

const ProdutoForm = () => {
  const [produto, setProduto] = useState({});
  const routeParams = useParams();
  const produtoId = routeParams.produtoId;
  const [lotes, setLotes] = useState([]);
  const { description, image } = produto;
  const formTitleName = description;
  
  useEffect(() => {
    produtosService.getOne(produtoId).then((produto) => {
      setProduto(produto);
    });
  }, []);
  
  useEffect(() => {
    lotesService.getAll().then((lotes) => {
      setLotes(lotes);
    });
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setProduto((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const obj = { ...produto };
    
    
    
    if (produtoId) {
      produtosService.update(produtoId, obj).then(() => {
        alert(
          `${obj.description} foi atualizado, clique em OK para voltar a página inicial`
        );
        window.location = 'http://127.0.0.1:5173/';
      });
    } else {
      produtosService.create(obj).then(() => {
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
          {produtoId ? `Editando ${formTitleName}` : 'Novo Produto'}
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
              placeholder=''
              value={description ? description : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor='description' className='text-sm font-medium'>
            Grupo
          </label>

          <div className='relative'>
           <select name="produto_grupo" onChange={handleInputChange}>
           
           {
           lotes && lotes.map((lote, i) => (
                  
            <option value={lote.id} key={i}>{lote.pg_descricao}</option>
           ))
            
            }
            </select>
          </div>
        </div>
        <div>
          <label htmlFor='description' className='text-sm font-medium'>
            Ean
          </label>

          <div className='relative'>
            <input
              name='ean'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              onChage=""
              maxlength="13"
              onkeypress="return event.charCode >= 48 && event.charCode <= 57"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor='saldo' className='text-sm font-medium'>
            Saldo_Inicial
          </label>

          <div className='relative'>
            <input
              name='saldo'
              type='number'
              min="0"
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder=''
 
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor='description' className='text-sm font-medium'>
            Unidade Medida
          </label>

          <div className='relative'>
          <select onChange={handleInputChange} name="produto_unidade_medida">
            <option value="CX" selected>CAIXA</option>
            <option value="L" >LITRO</option>
            <option value="M">METRO</option>
            <option value="KG">QUILO</option>
            <option value="UND">UNIDADE</option>
          </select>
            
          </div>
        </div>
<div>
          <label htmlFor='description' className='text-sm font-medium'>
            Tipo
          </label>

          <div className='relative'>
            <select name="produto_tipo" onChange={handleInputChange}>
            <option value="MP" selected>MATERIA PRIMA</option>
            <option value="PA" >PRODUTO ACABADO</option>
          </select>
          </div>
        </div>
        

        <div className='flex produtos-center justify-between'>
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
            {produtoId ? 'Atualizar' : 'Criar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProdutoForm;
