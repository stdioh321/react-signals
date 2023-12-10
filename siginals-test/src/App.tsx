import { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Link, Outlet, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { addCounter, getCounter, subCounter } from './states/counter'

export function CounterComponent() {
  return <div>
    <button onClick={() => {
      addCounter()
    }}>add</button>
    <button onClick={() => {
      subCounter()
    }} disabled={getCounter() < 1}>sub</button>
  </div>
}


function App() {
  return (
    <>
      <h1>App</h1>
      <h5>
        Total Couter: {getCounter()}
      </h5>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
            </ul>
          </nav>
          {CounterComponent()}
          <hr />
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </BrowserRouter>
        <Outlet />
      </div>
    </>
  )
}

export default App
