import { ContactsList, Button } from "./Contacts.styled";
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onClick, filter }) => {
    
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
        );

    return <div>

        <ContactsList>
            {filteredContacts.map(contact => {
                return <li key={contact.id}>{contact.name} : {contact.number}
                    <Button type="button" onClick={() => onClick(contact.id)}>Delete</Button>
                </li>
                
            })}
        </ContactsList>
    </div>
};

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onClick: PropTypes.func,
    filter: PropTypes.string
};


export default Contacts;