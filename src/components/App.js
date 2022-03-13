import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import PropertyDescriptionPage from '../pages/PropertyDescriptionPage';
import PropertyListingPage from '../pages/PropertyListingPage';
import RegistrationPage from '../pages/RegistrationPage';
import ScrollToTop from '../components/ScrollToTop'



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="detail" element={<PropertyDescriptionPage />} />
        <Route path="signup" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path='listing' element={<PropertyListingPage />} />
        <Route path='listing/:id' element={<PropertyDescriptionPage />} />
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
