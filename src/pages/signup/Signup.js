import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import classes from "./Signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { signup, isLoading, error } = useSignup();

  //submit hander for form
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, password, displayName)
    signup(email, password, displayName);
  };


  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className={classes.signup_form}
    >
      <label>
        <span>Email:</span>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
          placeholder="saad@gmail.com"
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          placeholder="password"
          required
        />
      </label>

      <label>
        <span>Display Name:</span>
        <input
          type="text"
          onChange={(e) => {
            setDisplayName(e.target.value);
          }}
          required
          value={displayName}
          placeholder="saad12"
        />
      </label>
      {/* loading button conditionally  */}
      {!isLoading && <button>Sign Up</button>}
      {isLoading && <button disabled>Loading...</button>}
      {error && <p style={{color: 'red', textAling: 'center'}}>{error}</p>}
    </form>
  );
};

export default Signup;
