

import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import First from './components/first';
import Login from './components/login'; // Login page
import Home from './components/home'; // Home page
import Details from './components/itemsDetails'; // Details page

const App = () => {
  return (
    <Auth0Provider
    domain="dev-2lrqwtvhrumwyyvq.us.auth0.com"
    clientId="ekS38jz7HRNWjvXDmtrsid7rYDunzRsI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >

    <Router>
      <Routes>
        <Route path="/" element={<First />} /> {/* Initial Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/home" element={<Home />} /> {/* Home Page */}
        <Route path="/details/:itemName" element={<Details />} /> 
      </Routes>
    </Router>
    // </Auth0Provider>
  );
};

export default App;




