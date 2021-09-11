import React, { useState } from 'react';
import Cart from './Components/Cart/Cart';
import fakeData from "./Components/FakeData/FakeData.json"
import UserInfo from './Components/UserInfo/UserInfo';
function App() {
  const [user,setUser]=useState(fakeData)
  const [cart,setCart]=useState([])
  const eventHandler =(dt)=>{
    const newCart = [...cart,dt]
    setCart(newCart)
  }
  return (
    <div className="style">
      <div  className="UserInfoStyle">
     {
       user.map((x,y)=> <UserInfo key={y} eventHandler={eventHandler} user={x}/>)
     }
      </div>
      <div>
      <Cart cart={cart}/>
      </div>
    </div>
  );
}

export default App;
