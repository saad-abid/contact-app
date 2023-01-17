//styles
import classes from './CreateButton.module.css'

import {Link} from 'react-router-dom';

const CreateButton = () => {
  
    return ( 
        <div className={classes.createBtn}>
            <Link to='/create'>Create Contact</Link>
        </div>
     );
}
 
export default CreateButton;