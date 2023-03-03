import { useEffect} from "react";
import axios from "axios";
import {useTreatsContext} from '../../hooks/useTreatsContext'

import {Grid} from '@mui/material';

// components
import WorkoutDetails from "../../Components/TreatDetails/TreatDetails";

export default function Home() {
  const {treats, dispatch} = useTreatsContext();

  useEffect(() => {
    const fetchTreats = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/treats");
        // console.log(response);
        if(response.status===200){
          dispatch({type: 'SET_TREATS', payload : response.data })
        }else{
          throw new Error();
        }

      } catch (error) {
        console.log(error);
      }
    }

    fetchTreats();
  }, [dispatch]);

  return (
    <div  style={{padding: '5px 20px'}}>
    <Grid container spacing={2} mt={2}>
      {treats &&
        treats.map((treat) => (
          <WorkoutDetails treat={treat} key={treat._id} />
        ))}
    </Grid>
    </div>
  );
}


