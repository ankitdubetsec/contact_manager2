import React,{useState,useEffect} from 'react';
import Addcontact from './Addcontact';
import Header from './Header'
import Contactlist from './Contactlist';
// import { useState } from 'react';

function App() {
    // const contacts=[
    //     {
    //         id: "1",
    //         name: "ankit",
    //         email: "ankitdube@gmail.com"
    //     },
    //     {
    //         id: "2",
    //         name: "ankit dube",
    //         email: "ankite@gmail.com"
    //     }
    // ]
    const [contacts,setContacts]=useState([]);
    const addContactHandler=(contact) =>{
        console.log(contact);
        setContacts([...contacts,contact])
    }
    return (
        <div>
        <Header />
        <Addcontact addContactHandler={addContactHandler}/>
        <Contactlist contacts={contacts}/>
        </div>
    );      
    
}


export default App;