import React,{useState} from 'react'

const Cart = () => {
    const [cart,setCart] = useState({
        discount :0.1,
        items: [
            { id:1, title: 'Product 1', quantity: 1},
            { id:2, title: 'Product 2', quantity: 3}
        ]
    })
    const handldeAdd = (id:number)=>{
        const addedQuantity = cart.items.map(item => item.id ===id?
            { ...item,quantity:item.quantity +1}:item)
        setCart({...cart,items:addedQuantity})
    } 
    const handleMin = (id:number) =>{
        const minQuantity = cart.items.map(item => item.id ===id?
            { ...item,quantity:item.quantity-1}:item)
        setCart({...cart,items:minQuantity})
        }


  return (
    <div>
        {cart.items.map(item => 
        <li key={item.id}>{item.title}:{item.quantity}
            <button onClick = {() => handldeAdd(item.id)}>Add</button>
            <button onClick = {() => handleMin(item.id)}>Decrease</button>
        </li>)}
    </div>
  )
}

export default Cart