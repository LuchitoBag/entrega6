import { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {getFetchUno}from './utils/mock'
import "./Item.css"

const ItemDetailContainer = () => {

   const [item,setItem]= useState({})
   
   useEffect(() => {
     
        getFetchUno
       
        .then(resp=>setItem(resp) )

   },[])
   
   
    return (
        <>
           <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer
