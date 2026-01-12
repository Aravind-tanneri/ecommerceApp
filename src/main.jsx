import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {store} from "./redux/store.js"
import {Toaster} from "react-hot-toast"


import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
      <Toaster/>
    </Provider>
  </BrowserRouter>
);
