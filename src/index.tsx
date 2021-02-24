import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/main.scss'
import App from './App'
import ErrorBoundary from './utils/ErrorBoundary'
import RotateToPortraitView from './components/RotateToPortraitView'
import DesktopView from './components/DesktopView'

render(
  <Router>
    <ErrorBoundary>
      <App />
      <RotateToPortraitView />
      <DesktopView />
    </ErrorBoundary>
  </Router>,
  document.getElementById('app')
)
