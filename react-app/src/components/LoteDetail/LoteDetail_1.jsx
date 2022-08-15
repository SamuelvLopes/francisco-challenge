import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import lotesService from '../../services/lotesService';
import produtosService from '../../services/produtosService';
import orgaosDonatariosService from '../../services/orgaosDonatariosService';
import orgaosFiscalizadoresService from '../../services/orgaosFiscalizadoresService';

const loteDetail = () => {
  const [lote, setLote] = useState({});
  const [produtoLote, setProduto] = useState([]);
  const [donatario, setDonatario] = useState([]);
  const [fiscalizador, setFiscalizadores] = useState([]);
  const routeParams = useParams();
  const loteId = routeParams.loteId;
  

  useEffect(() => {
    lotesService.getOne(loteId).then((lote) => {
      setLote(lote);
    });
  }, []);

  useEffect(() => {
    produtosService.getOne(lote.produto).then((produto) => {
      setProduto(produto);
    });
  }, [lote]);

  useEffect(() => {
    orgaosDonatariosService.getOne(lote.orgaoDonatario).then((donatario) => {
      setDonatario(donatario);
    });
  }, [lote]);

  useEffect(() => {
    orgaosFiscalizadoresService
      .getOne(lote.orgaoFiscalizador)
      .then((fiscalizador) => {
        setFiscalizadores(fiscalizador);
      });
  }, [lote]);

  const handleRemoveLote = () => {
    if (window.confirm(`Deseja excluir o lote de ${produtoLote.description}?`)) {
      lotesService.remove(loteId).then(() => {});
      alert(
        `${produtoLote.description} foi excluido, você será redirecionado para a tela inicial`
      );
      window.location = 'http://127.0.0.1:5173/';
    }
  };

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
            alt={produtoLote.description}
            src={produtoLote.image}
            className='object-cover w-full -mt-3 h-[350px] sm:h-[450px]'
          />

          <div className='flex items-center justify-between mt-4 font-medium'>
            <p>
              Orgão Fiscalizador: {fiscalizador.description}
              <br />
              Orgão Donatario: {donatario.name}
              <br />
              Produto: {produtoLote.description}
            </p>

            <div>
              <button
                onClick={handleRemoveLote}
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

export default loteDetail;
