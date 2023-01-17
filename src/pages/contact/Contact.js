import { useDelete } from "../../hooks/useDelete";
import classes from "./Contact.module.css";

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JUL", "AUG", "SEP","OCT", "NOV", "DEC"]

const Contact = ({ contact }) => {
  const { deleteResourse } = useDelete("contacts");

  const dateFormatter =(date) =>{
  const formattedDate = new Date(date)
  const day = formattedDate.getDay();
  const month = MONTHS[formattedDate.getMonth()];
  const year = formattedDate.getFullYear();
  return {day, month, year}
  }

  const {day, month, year} = dateFormatter(contact.date);

  const deleteHandler = (id) => {
    deleteResourse(id);
  };

  const editHandler =(id)=>{

  }
  return (
    <li className={classes.contact}>
      <h3 className={classes.name}>{contact.name}</h3>
      <p className={classes.number}> Contact Number: {contact.number}</p>
      <p className={classes.kids}>Kids: {contact.kids}</p>
      <p className={classes.date}>Date to call: {`${month} ${day}, ${year}`}</p> 
      {/* <p className={classes.description}>{contact.description}</p>
              */}
      <button
        onClick={() => {
          deleteHandler(contact.id);
        }}
        className={classes.delete}
      >
        x
      </button>
        <div className={classes.edit} >
       <button onClick={()=>{editHandler(contact.id)}} >Edit</button>
      </div>
    </li>
  );
};

export default Contact;
