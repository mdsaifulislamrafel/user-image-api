import React from 'react';
import './User.css'
const User = (props) => {
    const {picture, name, email, phone, id} = props.children;
    return (
        <div className='user-list'>
            <img src={picture.large} alt="" />
            <h1>{name.title} {name.first} {name.last}</h1>
            <p>Email: {email}</p>
            <p><small>Phone : {phone}</small></p>
            <span>{id.name} {id.value}</span>
        </div>
    );
};

export default User;