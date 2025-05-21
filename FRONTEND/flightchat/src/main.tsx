import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { setupIonicReact } from '@ionic/react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import './global.css';  // importa estils tailwind
import 'leaflet/dist/leaflet.css'; //leaflet! pel mapa



// Call the element loader before the render call
defineCustomElements(window);


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);