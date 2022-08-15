import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import produtosService from '../../services/produtosService';

const ProdutoDetail = () => {
  const [produto, setProduto] = useState({});
  const routeParams = useParams();
  const produtoId = routeParams.produtoId;
  console.log(produto);

  useEffect(() => {
    produtosService.getOne(produtoId).then((produto) => {
      setProduto(produto);
    });
  }, []);

  const handleRemoveProduto = () => {
    if (window.confirm(`Deseja excluir ${produto.description}?`)) {
      produtosService.remove(produtoId).then(() => {});
      alert(
        `${produto.description} foi excluido, você será redirecionado para a tela inicial`
      );
      window.location = 'http://127.0.0.1:5173/';
    }
  };

  const { description, image } = produto;

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
                to={`/produtos/edit/${produtoId}`}
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

export default ProdutoDetail;
