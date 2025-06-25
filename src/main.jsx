import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root.
const root = createRoot(container);

// Initial render
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
