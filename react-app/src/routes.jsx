import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

import ProdutoDetail from './components/ProdutoDetail/ProdutoDetail';
import ProdutoForm from './components/ProdutoForm/ProdutoForm';
import DonatarioDetail from './components/DonatarioDetail/DonatarioDetail';
import DonatarioForm from './components/DonatarioForm/DonatarioForm';
import FiscalizadorDetail from './components/FiscalizadorDetail/FiscalizadorDetail';
import FiscalizadorForm from './components/FiscalizadorForm/FiscalizadorForm';
import LoteDetail from './components/LoteDetail/LoteDetail';
import LoteForm from './components/LoteForm/LoteForm';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos/:produtoId' element={<ProdutoDetail />} />
        <Route path='/produtos/new' element={<ProdutoForm />} />
        <Route path='/produtos/edit/:produtoId' element={<ProdutoForm />} />
        <Route path='/donatarios/:donatarioId' element={<DonatarioDetail />} />
        <Route path='/donatarios/new' element={<DonatarioForm />} />
        <Route path='/donatarios/edit/:donatarioId' element={<DonatarioForm />} />
        <Route path='/fiscalizadores/:fiscalizadorId' element={<FiscalizadorDetail />} />
        <Route path='/fiscalizadores/new' element={<FiscalizadorForm />} />
        <Route path='/fiscalizadores/edit/:fiscalizadorId' element={<FiscalizadorForm />} />
        <Route path='/lotes/:loteId' element={<LoteDetail />} />
        <Route path='/lotes/new' element={<LoteForm />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
