import React from 'react';
import { ContactCard } from './ContactCard';

import { Link } from 'react-router-dom'

const ContactList = (props) => {
    console.log(props.contacts);
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const contacts = [
        {
            id: "1",
            name: "Nandom Kumchi",
            email: "paul4nank@gmail.com"
        }
    ]

    const renderContactList = props.contacts.map((contact) => {
        console.log(contact);
        return (<ContactCard
            contact={contact}
            clickHandler={deleteContactHandler}
            key={contact.id} />);
    });
    return <div className='main'>
        <h3>Contact List
            <Link to="/add">
                <button className='ui button blue right'>Add Contact</button>
            </Link>
        </h3>
        <div className='ui celled list'>
            {renderContactList}</div>
    </div>;
};

export default ContactList; 