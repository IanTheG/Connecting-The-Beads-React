import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/main'
import ErrorBoundary from './utils/ErrorBoundary'
import RotateToPortrait from './components/RotateToPortrait'

render(
  <Router>
    <ErrorBoundary>
      <App />
      <RotateToPortrait />
    </ErrorBoundary>
  </Router>,
  document.getElementById('app')
)
