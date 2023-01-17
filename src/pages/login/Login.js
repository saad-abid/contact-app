import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import classes from "./Login.module.css";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {isLoading, error, login} = useLogin();



    const submitHandler =(e)=>{
        e.preventDefault();
        // console.log(email, password)
        login(email, password);
    }
    return ( 
        <form onSubmit={(e)=>{submitHandler(e)}} className={classes.signin_form}>
            <label>
                <span>Email:</span>
                <input
                 type="text"
                 onChange={(e)=>{setEmail(e.target.value)}}
                 value={email}
                 required
                 placeholder='saad@gmail.com'
                 />
            </label>
            <label>
                <span>Password:</span>
                <input
                 type="password"
                 onChange={(e)=>{setPassword(e.target.value)}}
                 value={password}
                 placeholder='password'
                 required
                 />
            </label>

    
            {!isLoading && <button>Sign In</button>}
            {isLoading && <button>Loading...</button>}
            {error && <p style={{color: 'red', textAling: 'center'}}> {error}</p>}
        </form>
     );
};

export default Login;
