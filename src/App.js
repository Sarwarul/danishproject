import AddContact from "./Components/AddContact";
import ContactCard from "./Components/ContactCard";
import Contactlist from "./Components/Contactlist";
import Header from "./Components/Header";
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contacts) => {
    console.log(contacts);
    setContacts([...contacts, contacts]);
  };
  return (
    <div className="ui container">
      <Header />

      <AddContact addContactHandler={addContactHandler} />
      <Contactlist contacts={contacts} />
    </div>
  );
}
