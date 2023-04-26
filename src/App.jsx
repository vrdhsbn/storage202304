import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ContactList from './ContactList'
import Webstorage from './Webstorage'

const App = () => {
  const homeUrl = process.env.PUBLIC_URL

  return (
    <main className="main">
      <BrowserRouter>
        <Link to={homeUrl + '/storage'}>Web Storageのデモ</Link>
        <br />
        <Link to={homeUrl + '/contact'}>IndexedDBのデモ</Link>
        <Routes>
          <Route path={homeUrl + '/contact'} element={<ContactList />}></Route>
          <Route path={homeUrl + '/storage'} element={<Webstorage />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
