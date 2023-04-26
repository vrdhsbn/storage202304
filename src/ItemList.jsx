/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from './lib/db.ts'
import { toast } from 'react-toastify'

export default function ItemList() {
  const items = useLiveQuery(() => db.items.toArray()) || []

  async function deleteContact(id) {
    await db.items.delete(id)
    toast.success(`削除しました。`)
  }

  console.log(items)

  if (items.length === 0) {
    return <p css={message}>データがありません</p>
  }

  return (
    <table css={table}>
      <thead>
        <tr>
          <th>名前</th>
          <th>電話番号</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.tel}</td>
            <td>
              <button onClick={() => deleteContact(item.id)} css={deleteButton}>
                削除
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const message = css`
  margin-top: 16px;
`
const table = css`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
  }
`
const deleteButton = css`
  appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 16px;
  padding: 8px;
  width: 64px;
  background: #f32424;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`
