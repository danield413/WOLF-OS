import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SnackbarProvider } from 'notistack';
import { MyContextProvider } from './globalstate/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <MyContextProvider>
        <SnackbarProvider>
          <App />
      </SnackbarProvider>
    </MyContextProvider>
)
