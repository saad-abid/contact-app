import { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

const initSate = { user: null, authIsReady: false };
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "SIGNUP":
      return { ...state, user: action.payload };
    case "SIGNOUT":
      return { ...state, user: null };
      case "AUTH_IS_READY":
        return {...state, authIsReady: true, user: action.payload}
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initSate);

    useEffect(()=>{
      const unsub =  projectAuth.onAuthStateChanged((user)=>{
            dispatch({type: "AUTH_IS_READY", payload: user});
            unsub();
        })
    }, []);

  console.log("Auth context state", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
