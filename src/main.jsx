import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { StateContent } from './content/StateContent';
import './css/style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContent>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StateContent>,
)
