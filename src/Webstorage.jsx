import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'

function Webstorage() {
  const local = localStorage
  const session = sessionStorage
  const data = {
    id: 0,
    name: 'komazawa',
    age: 40,
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

  // メモをダウンロードする
  // memoのstateからBlobを作成し、URLを発行して
  // それをダウンロードするaタグを作ってclickイベントをシミュレートする。
  // その後aタグとURLは破棄する。
  function downloadMemo() {
    const blob = new Blob([memoContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    console.log(url)
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.download = 'memo.txt'
    a.href = url
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <h1 className="headings">Web Storageのデモ</h1>
      <div className="button-container">
        <button onClick={setStorage}>セッションストレージをセットする</button>
        <button onClick={showSessionStorage}>
          セッションストレージを表示する
        </button>
      </div>

      {content && <p className="text">{content}</p>}

      <h2 className="headings">メモ帳</h2>
      <textarea
        onChange={(e) => handleChange(e)}
        value={memoContent}
        cols={40}
        rows={10}
        className="textarea"
      />
      <button onClick={downloadMemo}>
        メモの内容をtxtファイルでダウンロードする
      </button>
    </>
  )
}

export default Webstorage
