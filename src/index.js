import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import { CurrentWeatherContext } from './contexts/CurrentWeatherContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CurrentWeatherContext>
    <App />
  </CurrentWeatherContext>
);
