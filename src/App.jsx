import { useState,useEffect } from 'react';
import './App.css'
import axios from "axios";
import AxiosPost from './AxiosPost';
function App() {
  const [myData,setMyData]=useState([]);
  const [isError,setIsError]=useState("");
  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>setMyData(res.data)).catch((error)=>{
  //     setIsError(error.message);//is  a method to print error
  //   })

  // },[]);

  // const getApiData=async()=>{
  //   try{
  //     const res=await axios.get("https://jsonplaceholder.typicode.codfm/posts");
      
  //   setMyData(res.data);
  //   }catch(err){
  //     setIsError(err.message);
  //   }
  // }
  // useEffect(()=>{
  //  getApiData();

  // },[]);

  return (
    <>
    {/* <h1 style={{backgroundColor:'black'}}>Axios tutorial</h1>
    {isError != "" && <h2>{isError}</h2>};
    {
      myData.slice(0,3).map((post)=>{
        const {id,title,body}=post;
        return <div key={id}>
          <h2>{title.slice(0,10)}</h2>
          <p>{body.slice(0,25)}</p>
        </div>
      })
    } */}
    <AxiosPost />
    </>
  )
}

export default App;
