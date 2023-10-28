import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import './reset.css'
import './index.css'
import store from './redux/configureStore'

axios.defaults.baseURL =
  process.env.REACT_APP_API || 'http://localhost:4000'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
