import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from 'layout/AppLayout'

const LaunchPad = lazy(() => import('views/Launchpad'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppLayout>
          <Routes>
            <Route path='/' element={<LaunchPad/>}></Route>
          </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
