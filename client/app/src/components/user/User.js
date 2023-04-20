import {useState, useEffect} from 'react';
import { getMeData } from '../../model/getData';

export default function User(){
    const [user, setUser] = useState({});
    useEffect(()=>{
        getMeData().then(res=>{
            setUser(res);
        })
    },[])
    return (<div style={{margin: "16px"}}>
            User Info:
            <div>Name: {user.fname} {user.lname}</div>
            <div>Age: {user.age}</div>
        </div>)
}