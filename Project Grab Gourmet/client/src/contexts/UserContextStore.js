import React from 'react'
import { useState} from 'react' 
import { userContext } from './UserContext'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';


function UserContextStore({children}) {
    let [user,setUser]=useState({
        name: ""
        
      });
      const eNotify = (mes) => toast.error(mes);
      
      async function userLogin(name,password,navigation){
      
       
       await axios.post("http://localhost:4000/user-api/userLogin",{name:name,password:password})
        .then((response)=>{
           
          //set user state with loged in user name and navigate to menu
          if(response.data.message === "login success"){
          setUser({...user, name: response.data.name})
          navigation();
          //storing token in local storage
          localStorage.setItem("token",response.data.token)


          }
          else{
            eNotify("Invalid Username/Password")
          }
        })
        .catch((err)=>{
          console.log(err)
        })
        
      }
      
 
  

  return (
   <userContext.Provider value={{user,setUser,userLogin}}>
    <Toaster />
    {children}
    </userContext.Provider>
  )
}

export default UserContextStore