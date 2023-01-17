import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCancelled, setIsCancelled] = useState();
  const { dispatch } = useAuthContext();


  const signup = async (email, password, displayName) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      console.log(res);
      if (!res) {
        throw new Error("could not create new user ");
      }

      await res.user.updateProfile({displayName})

      dispatch({type: "SIGNUP", payload: res.user});


      if (!isCancelled) {
        setIsLoading(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setIsLoading(false);
        setError(err.message);
      }
    }
  };

  //for cleanup function
  useState(() => {
    return () => {
      setIsCancelled(true);
    };
  });

  return { isLoading, error, signup };
};
