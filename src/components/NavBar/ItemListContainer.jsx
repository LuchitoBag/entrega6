import ItemCount from './ItemCount'
import { useState,useEffect } from 'react'
import { getFetch, } from './utils/mock'
import ItemList from './ItemList'



function ItemListContainer({greeting}) {
        
    const [productos, setProductos] = useState([])
    const [loading,setLoading] = useState(true)
    
    const onAdd=(cant)=>{
        console.log(cant)
    }  

    useEffect(()=>{
        getFetch
    .then(respuesta=> {
        setProductos(respuesta)
    })
    .catch(error => console.log(error))
    .finally(()=> setLoading(false))

},[])

    


    

return(
    <div>
        <h1>{greeting}</h1>

        { loading ? <h2>Cargando...</h2>: <ItemList productos={productos}/> }
       
            <ItemCount stock={5} initial={1} onAdd={onAdd} /> 
            </div>
)
}
export default ItemListContainer