import React from 'react'
import 'firebase/app'
import { auth } from '../firebase.js'
// import firebase from 'firebase/app'
import * as firebase from 'firebase/app';


import { GoogleOutlined ,FacebookOutlined } from '@ant-design/icons'
import { useAuth } from '../contexts/AuthContext'
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
const Login = () => {
  return (
    <div id='login-page'>
      <div id='login-card'>
          <h2>Welcome to chat</h2>

          <div className='login-button google' 
               onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
             <GoogleOutlined/> Sign in with Google

          </div>
          <br/><br/>
          <div className='login-button facebook'
               onClick={()=> auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
            <FacebookOutlined/> Sign in with facebook

         </div>

      </div>
      
      

      
    </div>
  )
}

export default Login
