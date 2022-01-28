import React from 'react';
import user from '../images/user_react.png';

export const ContactCard = (props) => {

    const { id, name, email } = props.contact;
    return (
        <div className='item' style={{ flexDirection: 'row' }}>
            <img className='ui avatar image' src={user} alt="user" />
            <div className='content'>
                <div className='header'>{name}</div>
                <div>{email}</div> 
            </div>
            <i className="trash alternate outline icon" 
            style={{ color: "red", marsginTop: "7px" }}
            onClick={() => props.clickHandler(id)}
            ></i>
        </div>
    );
};


