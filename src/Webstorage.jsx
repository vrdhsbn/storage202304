import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'

function Webstorage() {
  const local = localStorage
  const session = sessionStorage
  const data = {
    id: 0,
    message:
      'これはセッションストレージに保存されたテキストです。タブやブラウザを閉じるとこの内容は削除されます。',
  }
  const defaultMemoContent = local.getItem('memo') ? local.getItem('memo') : ''
  const [content, setContent] = useState(null)
  const [memoContent, setMemoContent] = useState(defaultMemoContent)

  useEffect(() => {
    local.setItem('memo', memoContent)
  }, [memoContent])

  // セッションストレージにデータを保存する
  function setStorage() {
    // オブジェクトはそのままではセットできないことに注意
    session.setItem('data', JSON.stringify(data))
  }

  function showSessionStorage() {
    setContent(session.getItem('data'))
  }

  function handleChange(e) {
    setMemoContent(e.target.value)
  }

  return (
    <>
      <h1 className="headings">Web Storageのデモ</h1>

      <h2 className="headings">セッションストレージ</h2>
      <div className="button-container">
        <button onClick={setStorage}>セッションストレージをセットする</button>
        <button onClick={showSessionStorage}>
          セッションストレージを表示する
        </button>
      </div>

      {content && <p className="text">{content}</p>}

      <h2 className="headings">ローカルストレージ</h2>
      <p className="text">
        テキストエリアに入力した内容はローカルストレージに保存されます。タブやブラウザを閉じてもデータは保持されます。
      </p>
      <textarea
        onChange={(e) => handleChange(e)}
        value={memoContent}
        cols={40}
        rows={10}
        className="textarea"
      />
    </>
  )
}

export default Webstorage
