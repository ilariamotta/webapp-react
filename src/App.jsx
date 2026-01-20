import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import AppLayout from './layouts/AppLayout';
import Header from './components/Header'
import Homepage from './pages/Homepage';
import MoviesPage from './pages/MoviesPage';

function App() {
const nomeApp = "Movies App";
  return (
    <>
<BrowserRouter>
<Routes>
<Route element={<AppLayout nomeApp={nomeApp}/>}>
<Route element={<Homepage/>} path="/"/>
<Route element={<MoviesPage/>} path="/movies"/>
</Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
