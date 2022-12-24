import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import { CurrentWeatherProvider } from './contexts/CurrentWeatherContext';
import { ForecastProvider } from './contexts/ForecastContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CurrentWeatherProvider>
    <ForecastProvider>
      <App />
    </ForecastProvider>
  </CurrentWeatherProvider>
);
