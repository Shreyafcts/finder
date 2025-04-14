import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx';
import { ThemeProvider } from './context/ThemeProvider.jsx';
function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
