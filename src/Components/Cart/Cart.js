import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const {length}= props.cart
   const income = props.cart.map(x=>x.yearIncome)
  const inco= income.reduce((x,y)=>x+y,0)
    return (
        <div className="cart">
            <p>Cart</p>
            <p>Total added Person : {length} </p>
            <p>Total yearly income : {inco} </p>
            <div>
                <p>those who are added :</p>
                <ul>
                    {
                        props.cart.map(x=><li>{x.name}</li>)
                    }
                </ul>
            </div>

        </div>
    );
};

export default Cart;