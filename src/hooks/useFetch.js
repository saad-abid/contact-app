import { useEffect, useRef, useState } from 'react'
import { projectFirestore } from '../firebase/config'

export const useFetch =(col, sortBy)=>{
    const [error, setError] = useState(null);
    const [isPending,  setIsPending] = useState(false); 
    const [data, setData] = useState(null);


    useEffect(()=>{
        setIsPending(true);

        //collection reference
        const ref = projectFirestore.collection(col);
        
        console.log(...sortBy)
        if(sortBy){
            ref.orderBy(...sortBy)
        }

        const unsub = ref.onSnapshot((snapShot)=>{
            let results = [];
            snapShot.docs.forEach((doc)=>{
                results.push({id: doc.id, ...doc.data()})
            })

        

            //setting data and error
            setError(null);
            setIsPending(false);
            setData(results);
            
        }, (err)=>{
            setError(err.message)
            setIsPending(false);
        })

        return ()=>{
            unsub()
        }

    },[col, sortBy])


    return {data, isPending, error}
}