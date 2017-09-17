
require('babel-polyfill');
import App from "./containers/App";
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="App" />,
    document.body.appendChild(document.createElement('div'))
  )
});
