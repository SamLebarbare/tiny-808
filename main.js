import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import './style.css'


render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
