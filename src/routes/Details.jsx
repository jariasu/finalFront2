
import  axios  from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

const Details = () => {

  const [dent, setDent] = useState("")
  const {id} = useParams()

  

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => setDent(res.data))
      console.log(dent);

  },[id])


  return (
    <div>
      
      <p>{dent.name}</p>
      <p>{dent.email}</p>
     
      
      
    </div>
  );
};

export default Details;
