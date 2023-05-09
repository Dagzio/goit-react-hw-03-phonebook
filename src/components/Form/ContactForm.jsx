import { Formik } from "formik";
import { CurrentForm, Input, Button, Label } from "./ContactForm.styled";
import { Component } from "react";



export class ContactForm extends Component {
    state = {
      name: '',
      number: ''
    };
        
    handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
        };

    formReset = () => {
      this.setState({
      name: '',
      number: ''
     });
        };
        
    handleSubmit = () => {
        this.formReset();
        this.props.onSubmit(this.state.name, this.state.number);  
    };

    render() {
        return (
   
        <Formik initialValues={this.state}
              onSubmit={this.handleSubmit}
            >
        <CurrentForm>
        <Label htmlFor="name">Name</Label>
           <Input type="text" name="name"
           id="name" onChange={this.handleChange}
           value={this.state.name}
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required/>
                                
        <Label htmlFor="number">Number</Label>
         <Input type="tel" name="number"
          id="number" onChange={this.handleChange}
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required/>
                                
        <Button type="submit">Add to contact</Button>
        </CurrentForm>
        </Formik>
    )
  };
    
    
};
export default ContactForm;