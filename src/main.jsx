import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Aggiungi le icone alla libreria
library.add(faCircleChevronLeft, faCircleChevronRight, fab);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


