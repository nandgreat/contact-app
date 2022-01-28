import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from "./ContactList";

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    localStorage.getItem(LOCAL_STORAGE_KEY);
  }, [contacts])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header />

        <div style={{ marginTop: "50px" }}>
          <Routes>
            <Route path="/" exact element={
              <ContactList

                contacts={contacts}
                getContactId={removeContactHandler}
              />}

            />
            <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
