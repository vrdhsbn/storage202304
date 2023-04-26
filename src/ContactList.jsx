import React from 'react'
import ItemList from './ItemList'
import AddItemForm from './AddItemForm'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ContactList() {
  return (
    <>
      <h1 className="headings">連絡先アプリ</h1>

      <div className="form">
        <h2>連絡先を登録する</h2>
        <AddItemForm />
      </div>

      <div className="index">
        <h2>連絡先一覧</h2>
        <ItemList />
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default ContactList
