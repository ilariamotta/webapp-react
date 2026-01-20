import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
const nomeApp = "Movies App";
  return (
    <>
    <Header nomeApp={nomeApp} />
    <h1>Hello World</h1>
    </>
  )
}

export default App
