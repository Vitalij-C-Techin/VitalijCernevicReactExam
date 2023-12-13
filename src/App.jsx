import { Route, Routes } from 'react-router-dom';

import { BloodDonorProvider } from './components/providers/BloodDonorProvider';

import BloodDonorListPage from './components/pages/BloodDonorListPage';
import BloodDonorPage from './components/pages/BloodDonorPage';

import BloodDonorInvitePage from './components/pages/BloodDonorInvitePage';
import BloodDonorRegistrationPage from './components/pages/BloodDonorRegistrationPage';

import ErrorPage from './components/pages/ErrorPage';

const App = () => {
  return (
    <BloodDonorProvider>
      <Routes>
        <Route path="/" element={<BloodDonorInvitePage />} />

        <Route path="/donors" element={<BloodDonorListPage />} />
        <Route path="/donor/:id" element={<BloodDonorPage />} />

        <Route path="/donor-registration" element={<BloodDonorRegistrationPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BloodDonorProvider>
  );
};

export default App;
