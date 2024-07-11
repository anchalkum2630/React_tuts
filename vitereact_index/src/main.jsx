import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const ReactElement=React.createElement(
   'a',
  {
    href:'https://goggle.com',
    target:'_blank'
    },
    "click me to visit google "
)
const anotherElement=(
  <a href="https://google.com" target='_blank'>visit</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // App() like this can be called
  // ReactElement
  // anotherElement  by this it is executed
)
