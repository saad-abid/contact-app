import { useState } from "react"
import {projectFirestore} from '../firebase/config'

export const useDelete =(col)=>{
    const [error, setError] = useState(null);
    
    const deleteResourse =(id)=>{
      
        try{
            setError(null);
            const res = projectFirestore.collection(col).doc(id).delete()
            console.log(res)
        }catch(err){
            setError(err.message)
        }
    }

    return {error, deleteResourse}
}