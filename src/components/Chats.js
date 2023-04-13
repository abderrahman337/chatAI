import React, {useRef , useEffect , useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import axios from 'axios'
const Chats = ()=>{
      const history = useHistory()
      const {user}=  useAuth()

      const [loading, setloading] =useState(true)

      const handleLogout = async ()=>{
            await auth.signOut()

           history.push('/')
      }

      const getFile = async(url) =>{
            const response = await fetch(url)
            const data = await response.blob()

            return new File([data],'userPhoto.jpg',{type:'image/jpeg'})
            
      }
      useEffect(()=>{
            if(!user){
                  history.push('/')

                  return
            }
            axios.get('https://api.chatengine.io/users/me',{
               headers : {
                 "project-id": "0be38c4f-c793-45b8-b16b-abde46a5ca0b",
                 "user-name": user.email,
                 "user-secret" : user.uid
               }
            })
            .then(()=>{
                  setloading(false)
            })
           
            .catch(()=>{
                  let formdata = new FormData()
                  formdata.append('email',user.email)
                  formdata.append('username', user.email)
                  formdata.append('secret', user.uid)

                  getFile(user.photoURL)
                  .then((avatar)=>{
                        formdata.append('avatar' , avatar , avatar.name)

                        axios.post('https://api.chatengine.io/users/',
                        formdata, 
                        {headers : {"private-key":"2151aa00-9c36-44c8-be96-6c842261e52c"}}
                        )
                        .then(()=>{
                              setloading(false)
                              
                        })
                        .catch((error)=> console.log(error))
                  })
            })
      },[user, history])

      if(!user || loading) return 'Loading ...'

      return (

            <div className="chats-page">
                  <div className="nav-bar">
                        <div className="logo-tab">
                              Unichats
                        </div>
                        <div className="logout-tab" onClick={handleLogout}>
                              logout
                        </div>
                        <div className="logo-tab">
                              Unichats
                        </div>
                  </div>
                  <ChatEngine height = "calc{110vh - 66px}"
                              projectID ="0be38c4f-c793-45b8-b16b-abde46a5ca0b"
                              userName = {user.email}
                              userSecret = {user.uid}/>
            </div>
           
      )
}

export default Chats