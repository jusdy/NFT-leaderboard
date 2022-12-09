import { lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import AppLayout from 'layout/AppLayout'

const LaunchPad = lazy(() => import('views/Launchpad'));
const NFTView = lazy(() => import('views/NFTView'));
const Featured = lazy(() => import('views/Featured'));
const Tournament = lazy(() => import('views/Tournament'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppLayout>
          <Routes>
            <Route path='/' element={<Navigate to="/launchpad" replace />}></Route>
            <Route path='/launchpad' element={<LaunchPad/>}></Route>
            <Route path='/nfts' element={<NFTView/>}></Route>
            <Route path='/featured' element={<Featured/>}></Route>
            <Route path='/tournament' element={<Tournament/>}></Route>
          </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
