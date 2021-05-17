import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Main from '../pages/main'
import '../assets/styles/app.scss'
const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Main} />
  </BrowserRouter>
)

export default App
