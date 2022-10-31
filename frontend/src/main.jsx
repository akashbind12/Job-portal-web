import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import {store} from "./Redux/store"
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider> 
        </BrowserRouter> 
      </StyledEngineProvider>
  </React.StrictMode>
)
