import axios from 'axios';
import { Userprops } from '../Models/homeModel';



const url = 'http://localhost:3003/users';

 export const Getusers= async(id:Userprops)=>{
     id =id || ''; 
     return await axios.get(`${url}/${id}`);
 }

export const adduser= async(user:Userprops)=>{
    return await axios.post(`${url}`,user);
}
 export const deleteuser = async(id:Userprops) => {
     return await axios.delete(`${url}/${id}`);
 }

export const Editusers = async(user : Userprops) =>{
    return await axios.put(`${url}/${user.id}`,user);
}


