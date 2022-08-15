import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import lotesService from '../../services/lotesService';
import produtosService from '../../services/produtosService';

import Lote from '../../components/Lote/Lote';
import Produto from '../../components/Produto/Produto';

const Home = () => {
  const [lotes, setLotes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [currentMenu, setCurrentMenu] = useState('');
  const [arrayCurrentMenu, setCurrentArrayMenu] = useState([]);
  console.log(currentMenu);
  const handleExport = () => {
      console.log(Date());
      
      window.location ='http://localhost:8080/api/export';
  };
const handleRemoveProduto = (produto) => {
    console.log(produto);
    if (window.confirm(`Deseja excluir ${produto.desc}?`)) {
      produtosService.remove(produto.ean).then(() => {});
      alert(
        `${produto.ean} foi excluido, você será redirecionado para a tela inicial`
      );
      window.location = 'http://127.0.0.1:5173/';
    }
  };
  const handleRemoveLote = (lote) => {
    console.log(lote);
    if(lote.qtd>0){
        alert ('Esse Grupo não pode ser excluido pois ele contém produtos');
        return 0;
    }
    if (window.confirm(`Deseja excluir ${lote.pg_descricao}?`)) {
      lotesService.remove(lote.id).then(() => {});
      alert(
        `${lote.pg_descricao} foi excluido, você será redirecionado para a tela inicial`
      );
      window.location = 'http://127.0.0.1:5173/';
    }
  };
  
  useEffect(() => {
    lotesService.getAll().then((lotes) => {
      setLotes(lotes);
    });
  }, []);

  useEffect(() => {
    produtosService.getAll().then((produtos) => {
      setProdutos(produtos);
    });
  }, []);

  const handleChangeCurrentMenu = (menu) => {
    setCurrentMenu(menu);
    menu === 'produtos'
      ? setCurrentArrayMenu(produtos)
      : setCurrentArrayMenu(lotes);
  };

  return (
    <div className='flex flex-row'>
      {/*side Bar*/}
      <div className='flex flex-col justify-between w-16 h-screen bg-white border-r'>
        <div>
          <div className='inline-flex items-center justify-center w-16 h-16'>
            <span className='block w-10 h-10 bg-gray-200 rounded-lg'></span>
          </div>

          <div className='border-t border-gray-100'>
            <nav className='flex flex-col p-2'>
              <ul className='pt-4 space-y-1 border-gray-100'>
                {/*produtos*/}
                <li onClick={() => handleChangeCurrentMenu('produtos')}>
                  <Link
                    to={''}
                    className='flex relative group justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 opacity-75'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                      />
                    </svg>

                    <span className='absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                      Produtos
                    </span>
                  </Link>
                </li>


                {/*lotes*/}
                <li onClick={() => handleChangeCurrentMenu('lotes')}>
                  <Link
                    to={''}
                    className='flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 opacity-75'
                      fill='none'
                      viewBox='0 0 22 22'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z'
                      />
                    </svg>

                    <span className='absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                      Grupos
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* cards */}
      <section>
        <div className='max-w-screen-xl w-screen px-4 py-8 mx-auto'>
          <div className='flex justify-between justify-items-stretch items-center'>
            <h2 className='mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl'>
              {currentMenu.length === 0
                ? 'Selecione uma opção no menu ao lado'
                : currentMenu === 'produtos'
                ? 'Produtos'
                : 'Grupos'}
            </h2>
            
            <Link to={`${currentMenu}/new`}>
              {' '}
              {currentMenu.length === 0
                ? ''
                : currentMenu === 'produtos'
                ? 'Novo produto'
                : 'Novo Grupo'}
            </Link>
          </div>
            
            <table class="w-full text-sm divide-y divide-gray-200">
            
                     
              <thead>
              {currentMenu === 'produtos' ? (
                  <tr class="bg-gray-50">
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Descricao</th>
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Cod.Barras</th>
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">UND</th>
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Grupo</th>
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Tipo</th>
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Saldo</th>
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Apagar</th>
                </tr>
                      ) : (<p></p>)}
               
              {currentMenu === 'lotes' ? (
                  <tr class="bg-gray-50">
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Id</th>
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Descricao</th>
                  <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Apagar</th>
                </tr>
                      ) : (<p></p>)}
               
              </thead>

              <tbody class="divide-y divide-gray-100">
        
              {currentMenu === 'produtos' &&
              arrayCurrentMenu.map((produto, i) => (
                <tr>
                  <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{produto.desc}</td>
                  <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{produto.ean}</td>
                  <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{produto.und}</td>
                  <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{produto.grupo}</td>
                  <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{produto.tipo}</td>
                  <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{produto.saldo}</td>
                  <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
                  
                     <div class="flex items-center -space-x-4 hover:space-x-1">
                        <button
                          class="z-30 block p-4 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                          type="button"
                          onClick={()=>handleRemoveProduto(produto)}
                        >
                          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                        
                         <button
                         
                          class="z-30 block p-4 text-red-700 transition-all bg-green-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                          type="button"
                          onClick={()=>handleExport()}
                        >
                         🖨️
                        </button>
                     </div>

                  </td>
                  
                </tr>
              ))}
                
              </tbody>
            </table>

            
      
              {currentMenu === 'lotes' &&
              arrayCurrentMenu.map((lote, i) => (
                <tr>
                  <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{lote.id}</td>
                  <td class="px-4 py-2 text-gray-700 whitespace-nowrap">{lote.pg_descricao}</td>
                  <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
            
                  <div class="flex items-center -space-x-4 hover:space-x-1">
                    <button
                      class="z-30 block p-4 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                      type="button"
                      
                      onClick={()=>handleRemoveLote(lote)}
                    >
                      <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                 </div>
            
            
                  </td>
                </tr>
              ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
