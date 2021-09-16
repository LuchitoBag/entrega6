import { useState }  from 'react'

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    function sumar (){
        setCount(count + 1 )
        
    }
    function restar(){
        setCount(count -  1)

    }

    return (
        <div>

               

            <label>{count}</label>

            <button onClick={restar}

            disabled ={count <= 0} >-</button>

            <button onClick={()=>onAdd(count)}>Agregar al carrito</button>

            <button onClick={sumar}

            disabled ={count >= stock } >+ </button>

            

            

            

        </div>
        

        


    )

    return (
        <div>

               

            <label>{count}</label>

            <button onClick={restar}

            disabled ={count <= 0} >-</button>

            <button onClick={()=>onAdd(count)}>Agregar al carrito</button>

            <button onClick={sumar}

            disabled ={count >= stock } >+ </button>

            

            

            

        </div>
        

        


    )
}
export default ItemCount