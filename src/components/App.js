import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import PropertyDescriptionPage from '../pages/PropertyDescriptionPage';
import PropertyListingPage from '../pages/PropertyListingPage';
import RegistrationPage from '../pages/RegistrationPage';
import ScrollToTop from '../components/ScrollToTop'
import PropertyTypePage from '../pages/PropertyTypePage';
import DashboardPage from '../pages/DashboardPage'
import { useSelector } from 'react-redux';



function App() {
  const user = useSelector(state => state.user.currentUser);

  return (
    <BrowserRouter>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signup" element={
        user ? <Navigate to='/login/dashboard' replace={true}/> : <RegistrationPage />} />
        <Route path="login" element={
        user ? <Navigate to='/login/dashboard' replace={true}/> : <LoginPage />} />
        <Route path='listing' element={<PropertyListingPage />} />
        <Route path='listing/:id' element={<PropertyDescriptionPage />} />
        <Route path='listing/search' element={<PropertyTypePage />} />
        <Route path='login/dashboard' element={
        user ? <DashboardPage /> : <Navigate to='/login' replace={true}/>} />
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
