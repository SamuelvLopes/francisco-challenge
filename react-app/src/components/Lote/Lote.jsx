import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import produtosService from '../../services/produtosService';
import orgaosDonatariosService from '../../services/orgaosDonatariosService';
import orgaosFiscalizadoresService from '../../services/orgaosFiscalizadoresService';

const Lote = ({ lote }) => {
  const [produtoLote, setProduto] = useState([]);
  const [donatario, setDonatario] = useState([]);
  const [fiscalizador, setFiscalizadore] = useState([]);

  const { id, orgaoDonatario, orgaoFiscalizador, produto } = lote;

  useEffect(() => {
    produtosService.getOne(produto).then((produto) => {
      setProduto(produto);
    });
  }, []);

  useEffect(() => {
    orgaosDonatariosService.getOne(orgaoDonatario).then((donatario) => {
      setDonatario(donatario);
    });
  }, []);

  useEffect(() => {
    orgaosFiscalizadoresService
      .getOne(orgaoFiscalizador)
      .then((fiscalizador) => {
        setFiscalizadore(fiscalizador);
      });
  }, []);

  return (
    <Link to={`/lotes/${id}`} className='block'>
      <img
        alt={produtoLote.description}
        src={produtoLote.image}
        className='object-cover w-full -mt-3 h-96'
      />

      <h5 className='mt-4 text-sm text-black/90'>Donatario: {donatario.name}</h5>
      <h5 className='mt-4 text-sm text-black/90'>Fiscalizador: {fiscalizador.description}</h5>

      <div className='flex Lotes-center justify-between mt-4 font-bold'>
        <p className='text-lg'>Produto: {produtoLote.description}</p>
      </div>
    </Link>
  );
};

export default Lote;
