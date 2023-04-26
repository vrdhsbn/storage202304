/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { useState } from 'react'
import { db } from './lib/db.ts'
import isValid from './lib/isValid'
import removeHyphen from './lib/removeHyphen'
import { toast } from 'react-toastify'

export default function AddItemForm() {
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')

  async function addItems() {
    const telNumber = removeHyphen(tel)

    if (!isValid(name, telNumber)) {
      return
    }

    try {
      const _id = await db.items.add({
        name,
        tel,
      })
      toast.success(`${name} を追加しました。`)
      setName('')
      setTel('')
    } catch (error) {
      toast.error(`${name} を追加できませんでした。`)
    }
  }

  return (
    <div css={inputForm}>
      <div css={inputContainer}>
        <label css={label}>名前</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          css={inputArea}
        />
      </div>
      <div css={inputContainer}>
        <label css={label}>電話番号</label>
        <input
          type="text"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          css={inputArea}
        />
      </div>
      <button onClick={addItems} css={button}>
        追加
      </button>
    </div>
  )
}

const inputForm = css`
  margin-top: 8px;
`
const inputContainer = css`
  margin-top: 16px;
`
const label = css`
  margin-right: 8px;
`
const inputArea = css`
  font-size: 14px;
  appearance: none;
  -webkit-appearance: none;
  border: 1px solid #ccc;
  padding: 8px;
  outline: none;
`
const button = css`
  appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 16px;
  padding: 8px;
  width: 128px;
  margin-top: 16px;
  background: #2424f3;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`
