import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { CurrentWeatherProvider } from './contexts/CurrentWeatherContext';
import { ForecastProvider } from './contexts/ForecastContext';
import { App } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CurrentWeatherProvider>
    <ForecastProvider>
      <App />
    </ForecastProvider>
  </CurrentWeatherProvider>
);
