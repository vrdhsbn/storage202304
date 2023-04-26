import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ContactList from './ContactList'
import Webstorage from './Webstorage'

const App = () => {
  return (
    <main className="main">
      <BrowserRouter>
        <Link to="/storage">Web Storageのデモ</Link>
        <br />
        <Link to="/contact">IndexedDBのデモ</Link>
        <Routes>
          <Route path="contact" element={<ContactList />}></Route>
          <Route path="storage" element={<Webstorage />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
