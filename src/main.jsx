/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux';

import Store from './app/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  //ye kaam app.jsx me v kar sakte hai ki un sab ko provider ke andar wrap kar diye
  //yaha v provider ke andar value pass karte hai
  //context ke andar sara methods pass karte the but yaha sirf store pass karna hai
  <Provider store = {Store}>
    <App />
  </Provider>,
)
