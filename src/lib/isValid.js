import { toast } from 'react-toastify'
import removeHyphen from './removeHyphen.js'

export default function isValid(name, tel) {
  // 空の入力を禁止する
  if (name === '' || tel === '') {
    toast.error('空欄があります')
    return false
  }

  // 電話番号に数字以外は使えない
  const regex = new RegExp(/^\d+$/)
  if (!regex.test(removeHyphen(tel))) {
    toast.error('電話番号に使用できない文字が含まれています')
    return false
  }

  // 電話番号は10桁または11桁
  if (tel.length < 10 || tel.length > 11) {
    toast.error('電話番号は10桁または11桁です')
    return false
  }

  return true
}
