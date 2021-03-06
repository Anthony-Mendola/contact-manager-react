import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Mark Cuban",
        email: "markcuban@mavericks.com",
        phone: "222-222-2222"
      },
      {
        id: 2,
        name: "Daymond John",
        email: "daymond@thesharkgroup.com",
        phone: "111-111-1111"
      },
      {
        id: 3,
        name: "Robert Herjavec",
        email: "Robert@herjavecgroup.com .com",
        phone: "333-333-3333"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
