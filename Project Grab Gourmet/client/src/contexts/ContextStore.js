import React from 'react'
import {useState} from "react"
import {foodContext} from './Context'

function ContextStore({children}) {

   
    let [dishes,setDishes]=useState({
        name:"",
        price:"",
        restaurant:""
    })
    
   

  return (
        <foodContext.Provider value={{dishes,setDishes}}>
            {children}
        </foodContext.Provider>
  )
}

export default ContextStore