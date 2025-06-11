import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todolist from './TodoList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Todolist/>
  
  </React.StrictMode>
);

reportWebVitals();
