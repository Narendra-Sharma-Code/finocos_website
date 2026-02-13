import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import logo from './assets/logo.png';

const container = document.getElementById('root');
const root = createRoot(container);

const ensureFavicon = () => {
  const head = document.head;
  const existing = head.querySelector('link[rel~="icon"]');
  const link = existing || document.createElement('link');

  link.rel = 'icon';
  link.type = 'image/png';
  link.href = logo;

  if (!existing) head.appendChild(link);
};

ensureFavicon();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
