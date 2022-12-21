import { Component } from 'react';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {/* <Filter/> */}
        <ContactList options={this.state.contacts} />
      </div>
    );
  }
}
