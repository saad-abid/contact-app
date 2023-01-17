import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

//styles
import classes from "./NavBar.module.css";

//logout icon
import image from "../images/logout.svg";
import { useAuthContext } from "../hooks/useAuthContext";
import CreateButton from "./CreateButton";

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick =()=>{
    logout();
  }
  return (
    <div className={classes.navbar}>
      <nav>
        <Link className={classes.title} to="/">
          CONTACT
        </Link>

        {!user && (
          <div className={classes.left}>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
        {user && (<>
          <CreateButton/>
          <div
            onClick={handleClick}
            className={classes.logout}
          >
            <span>Logout({user.displayName.substring(0,4)})</span>
            <img src={image} alt="Logout icond" />
          </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
