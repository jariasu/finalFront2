import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";


const Home = () => {
  const [denti, setDenti] = useState([]);
  const Url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(Url).then((res) => setDenti(res.data));
  }, []);

  

  return (
   
      
      <div className="container-cards">
        {denti.map((data) => (
          <Cards data={data} key={data.id}  />
        ))}
      </div>
  
  );
};

export default Home;
