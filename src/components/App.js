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
        <Route path="/Detail" element={<PropertyDescriptionPage />} />
        <Route path="/Signup" element={<RegistrationPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path='/Listing' element={<PropertyListingPage />} />
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
