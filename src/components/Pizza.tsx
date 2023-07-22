import React, {useState} from 'react'

const Pizza = () => {
    const [pizza, setPizza] = useState({
        name : 'Spicy Pepperoni',
        toppings : ['Mushrooms','Meat', 'Sosis']
    })
const hanldeAdd = () =>{
    const cheese ={ ...pizza, toppings:[ ...pizza.toppings,'Cheese']}
    setPizza(cheese)
}
    
  return (
    <>
        {pizza.name}
        <h3>The Toppings are :</h3>
        {pizza.toppings.map(topping => <li key={topping}> {topping}</li>)}
        <button onClick={hanldeAdd}>Add Cheese</button>

    </>
  )
}

export default Pizza