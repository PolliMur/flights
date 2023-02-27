import { Routes, Route, Navigate } from 'react-router-dom';

import Toaster from '@components/Toaster';

import { routes } from '@utils/routes';

import MainLayout from '@layouts/Main';

import Home from '@pages/Home';
import Tickets from '@pages/Tickets';

const App = () => (
  <MainLayout>
    <Toaster />
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.tickets} element={<Tickets />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </MainLayout>
);

export default App;
