import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';

import SharedLayout from './components/common/SharedLayout/SharedLayout';

import AccountActivity from './components/personal_account_activity/activity.jsx';
import Account from './components/personal_account_0/home.jsx';

import './assets/styles/global.module.css';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />

        <Route path="/account" element={<Account />} />
        <Route path="/activity" element={<AccountActivity />} />

        <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </>
  );
}
export default App;
