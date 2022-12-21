import React from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { $submitForm } from '../../dataManager/myQueries'
const KakaoCallback = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const url = new URL(window.location.href)
  const urlParams = url.searchParams.get('code')
  console.log(urlParams)

  return <div>hi</div>
}
export default KakaoCallback
