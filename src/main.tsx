import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import FileContextProvider from '../store/Context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FileContextProvider>
      <App />
    </FileContextProvider>
  </React.StrictMode>,
)
