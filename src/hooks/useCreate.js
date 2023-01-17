import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCreate = (collection) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [isSuccessful, setIsSuccessful ] = useState(false);


  const create = async (data) => {
    setError(null);
    setIsPending(true);
    setIsSuccessful(false)

    const ref = projectFirestore.collection(collection);
    try {
      const response = await ref.add(data);

      if (!response) {
        throw new Error("Could not create contact!!");
      }

      if (!isCancelled) {
        setError(null);
        setIsPending(false);
        setIsSuccessful(true)
      }

    } catch (err) {
      console.log(err.message);
      console.log("isCancelled: ", isCancelled)
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
        setIsSuccessful(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { isPending, error,  isSuccessful,  create };
};
