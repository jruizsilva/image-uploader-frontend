import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './reset.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/configureStore'
import axios from 'axios'

axios.defaults.baseURL =
  process.env.REACT_APP_API || 'http://localhost:3001'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)