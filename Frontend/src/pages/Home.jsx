import { useEffect, useState } from "react";
import axios from "axios";
import './Home.css'

// components
import WorkoutDetails from "../Components/WorkoutDetails/WorkoutDetails";
import WorkoutForm from "../Components/WorkoutForm/WorkoutForm";

export default function Home() {
  const [treats, setTreats] = useState(null);

  

  useEffect(() => {
    const fetchTreats = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/treats");
        setTreats(response.data);
        if(!response){
          throw new Error;
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchTreats();
  }, []);

  return (
    <div className="home">
    <div className='treatDetails'>
      {treats &&
        treats.map((treat) => (
          <WorkoutDetails treat={treat} key={treat._id} />
        ))}
    </div>
    <WorkoutForm/>
    </div>
  );
}