import { useEffect, useState } from 'react';
import { useCreate } from '../../hooks/useCreate';
import classes from './Create.module.css'
import { timestamp } from '../../firebase/config';
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [kids, setKids] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const Navigate = useNavigate();

   const {isSuccessful,  isPending, error, create} = useCreate("contacts")

    const submitHandler =(e)=>{
        e.preventDefault();
        const timeStamp = timestamp.fromDate(new Date());
        const sortDate = new Date(date)
        create({name, number, kids, date, sortDate,  timeStamp , description});   
    }

        useEffect(()=>{
            setTimeout(()=>{
                if(isSuccessful){
                    Navigate('/')
                }
            }, 800)
        }, [isSuccessful, Navigate])
   

    return ( 
        <div className={classes.create_form}>
            <form onSubmit={(e)=>{submitHandler(e)}}>
                <label>
                    <span>Name:</span>
                    <input type="text"
                        onChange={(e)=>{setName(e.target.value)}}
                        value={name}
                    required/>
                </label>

                <label>
                    <span>Number:</span>
                    <input type="number"
                        onChange={(e)=>{setNumber(e.target.value)}}
                        value={number}
                    required/>
                </label>

                <label>
                    <span>Kids:</span>
                    <input type="text"
                        onChange={(e)=>{setKids(e.target.value)}}
                        value={kids}
                    
                    required/>
                </label>

                <label>
                    <span>Date to call:</span>
                    <input type="date"
                        onChange={(e)=>{setDate(e.target.value)}}
                        value={date}          
                        required/>
                </label>
                <label>
                    <span>Description:</span>
                    <textarea  type="textarea"
                        onChange={(e)=>{setDescription(e.target.value)}}
                        value={description}
                        required
                        />
                </label>
                {!isPending && <button>Submit</button>}
                {isPending && <button disabled>Loading...</button>}
                {error && <p>{error}</p>}
            </form>
        </div>
     );
}
 
export default Create;