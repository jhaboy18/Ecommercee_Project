import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Datastate from './Context/Datastate.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Datastate>
     <App />
  </Datastate>
   </BrowserRouter>
)
