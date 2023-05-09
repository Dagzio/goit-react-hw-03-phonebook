import { Component } from "react";
import {ContactForm} from "../Form/ContactForm";
import Container from "./App.styled";
import Section from "components/Section/Section";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
     filter: '',
  }

   formSubmitHandler = (name, number) => {
    const duplicateName = this.state.contacts.find(
      contact => contact.name === name
    );
    if (duplicateName) {
      alert(duplicateName.name+' is already in contacts');
      return;
    }
    this.setState({
      contacts: [...this.state.contacts, { id: nanoid(), name, number }],
    });
  };
  


  deleteContact = (id) => {
    const filterId = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: [...filterId] });
  };

  onChangeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };
  
  
  render() {

    return <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={this.formSubmitHandler} />
      </Section>

      <Section title="Contacts">
        <Filter onChange={this.onChangeFilter } value={this.state.filter} />
        <Contacts contacts={this.state.contacts} onClick={ this.deleteContact} filter={this.state.filter} />
      </Section>
      </Container>
    
  }
};
