import './main.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { IsLoadingProvider } from './IsLoadingContext'
import App from './App'

ReactDOM.render(
  <Router>
    <IsLoadingProvider>
      <App />
    </IsLoadingProvider>
  </Router>,
  document.getElementById('app'),
)
