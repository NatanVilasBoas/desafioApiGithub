import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './App.tsx'
import { UserProvider } from './context/user.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <AppRouter />
    </UserProvider>
  </React.StrictMode>,
)
