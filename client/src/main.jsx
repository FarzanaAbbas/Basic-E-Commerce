import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import { AuthProvider } from './context/AuthContext.jsx'
=======
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* wrapping our app with Browser Router . So React-Router-dom is only package used*/}
<<<<<<< HEAD
      <AuthProvider>
      <App />
      </AuthProvider>
=======
      <App />
>>>>>>> 337ff2f0eb705c45cd38a1fc63dc368e24fb9d47
    </BrowserRouter>
  </React.StrictMode>,
)   
