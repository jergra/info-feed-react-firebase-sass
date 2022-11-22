import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../../redux/actions/auth.action'

import './loginScreen.scss'

const LoginScreen = () => {
   
   const dispatch = useDispatch()

   const accessToken = useSelector(state=>state.auth.accessToken)

   const handleLogin = () => {
      dispatch(login())
   }

   const history = useHistory()

   useEffect(()=> {
      if (accessToken) {
         history.push('/')
      }
   }, [accessToken, history])
   
   return (
      <div className='login'>
         <div className='login__container'>
            <h2>Info Feed</h2>
            <img
               //src='https://pngimg.com/uploads/youtube/youtube_PNG2.png'
               //src='https://icon2.cleanpng.com/20180329/thq/kisspng-online-newspaper-computer-icons-newspaper-5abc7bfd98df25.2914582015223019496262.jpg'
               src={require('./information-icon.png').default}
               alt=''
               style={{marginBottom: 20}}
            />
            <button onClick={handleLogin}>Login with Google</button>
         </div>
      </div>
   )
}

export default LoginScreen