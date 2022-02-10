import ContactCard from "./ContactCard";
import React from "react";

const ContactList = (props) => {
        // console.log(props);

        const deleteContactHandler = (id) => {
            props.getContactId(id);
        };

        const renderContactList = props.contacts.map((contact) => {
            return(
                <ContactCard contact={contact} clickHandler={deleteContactHandler}></ContactCard>

                );
        });
        return <div className="ui celled list">
            {renderContactList}
        </div>
        
    }
    

export default ContactList;