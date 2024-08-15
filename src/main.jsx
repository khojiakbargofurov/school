import React from 'react';
import ReactDOM from 'react-dom/client';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <KindeProvider
    clientId="9ab823d7db284e10b4b60edcb6f9113d"
    domain="https://lingualite.kinde.com"
    redirectUri="http://localhost:5173"
    logoutUri="http://localhost:5173"
  >
    <App />
  </KindeProvider>
);
