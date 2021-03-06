import React, { useState } from 'react';
import "./UserInfo.css"
const UserInfo = (props) => {
     const {name,img,email,phone,city,yearIncome}=props.user;
     const [mobile,setMobile]=useState("")
     function handleNum(){
         setMobile(phone)
     }
    return (
        <div  style={{border: '1px solid red',padding: '5px'}}>
       
           <img  style={{width: '100%',height: '200px'}}src={img} alt="" />
            <p>name : {name}</p>
            <p>email : {email}</p>
            <p>phone :{mobile}<span class="phone" style={{display:"none"}}>{phone}</span></p>
            <p>city : {city}</p>
            <p>yearIncome : {yearIncome}</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr", gridGap:"5px",margin:"5px"}}>
            <button onClick={handleNum}>View Phone No</button>
            <button onClick={()=>props.eventHandler(props.user)}>+ Add Button</button>
            </div>
            
        </div>
    );
};

export default UserInfo;