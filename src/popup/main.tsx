import React from 'react'
import ReactDOM from 'react-dom'
import { Popup } from './Popup'

window.onload = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>,
    document.getElementById('root'),
  )
}
