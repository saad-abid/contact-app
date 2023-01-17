import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCancelled, setIsCancelled] = useState();
  const { dispatch } = useAuthContext();

  console.log(isLoading, error, isCancelled)

  const logout = async () => {
    setError(null);
    setIsLoading(true);

    try {
      await projectAuth.signOut();


      //dispatching login action
      dispatch({ type: "SIGNOUT" });

   

      if (!isCancelled) {
        setError(null);
        setIsLoading(false);

      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message)
        setError(err.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { isLoading, error, logout };
};
