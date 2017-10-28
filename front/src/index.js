//This allows us to use react library for our applications
import React from 'react';
//This allows us to throw the react code to the browser for us.
import ReactDOM from 'react-dom';
//Import App Component
import App from './components/app.js'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
