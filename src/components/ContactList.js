import Contact from '../pages/contact/Contact';
import classes from './ContactList.module.css'

const ContactList = ({contacts}) => {
    return ( 
    <ul className={classes.contact_list}>
        {contacts.map((contact)=>(
            <Contact key={contact.id} contact={contact}/>
        ))}
    </ul> );
}
 
export default ContactList;