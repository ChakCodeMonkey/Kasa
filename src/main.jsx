import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/header/header.css'
import './components/footer/footer.css'
import './components/banner/banner.css'
import './pages/home/home.css';
import './components/cards/card.css'
import './components/collapse/collapse.css'
import './pages/About/about.css'
import './pages/error/error.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
