import React,{useState} from 'react';
import axios from 'axios';
function AxiosPost(){
    const data={name:"", lastName:""};
    const [inputData,setInputData]=useState(data);

    const handleData=(e)=>{
        setInputData({...inputData,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData).then((response)=>{
            console.log(response);
        })
    }
    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData).then((response)=>{
            console.log(response);
        })
    }
    const handleDelete=(e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1").then((response)=>{
            console.log(response);
        })
    }
    return(
        <>
        <label>First Name: </label>
        <input type='text' name='fname' value={inputData.fname} onChange={handleData}/><br/>
        <label>Last Name: </label>
        <input type='text' name='lastName' value={inputData.lastName} onChange={handleData}/><br/>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>delete</button>
        </>
    )
}
export default AxiosPost;