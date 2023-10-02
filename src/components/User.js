import React, { useState } from 'react';
import './User.css'
const User = (props) => {
    const {picture, name, email, phone, id} = props.user;
    const addMember = props.addMember;
   const [mobile, setMobile] = useState('');
   const fullName = name.first + ' '+ name.last;
   const showNumber = () => setMobile(phone);
    return (
        <div className='user-list'>
            <img src={picture.large} alt="" />
            <h1>{fullName}</h1>
            <p>Email: {email}</p>
            <p><small>Phone : {mobile}</small></p>
            <span>{id.name} {id.value}</span>
            <br />
            <button onClick={showNumber}>Show Phone number</button>
            <button onClick={() => addMember(fullName)}>Add me</button>
        </div>
    );
};

export default User;