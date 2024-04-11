import { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter,Routes, Route } from 'react-dom'
import { Home } from './components/Home'
function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
</Routes>
<Home/>
</BrowserRouter>
    </>
  )
}

export default App
