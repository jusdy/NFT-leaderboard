import { lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import AppLayout from 'layout/AppLayout'

const LaunchPad = lazy(() => import('views/Launchpad'));
const MyNFTs = lazy(() => import('views/MyNFTs'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppLayout>
          <Routes>
            <Route path='/' element={<Navigate to="/launchpad" replace />}></Route>
            <Route path='/launchpad' element={<LaunchPad/>}></Route>
            <Route path='/mynfts' element={<MyNFTs/>}></Route>
          </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
