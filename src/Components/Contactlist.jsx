import React from "react";
import ContactCard from "./ContactCard";

const Contactlist = (props) => {
  const rendercontactlist = props.contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });
  return <div className="ui celled list">{rendercontactlist}</div>;
};
export default Contactlist;
