import './TreatDetailsStyles.css'
import axios from 'axios';
import {useTreatsContext} from '../../hooks/useTreatsContext'
import DeleteIcon from '@mui/icons-material/Delete';

const TreatDetails = ({ treat }) => { 
  const {dispatch} = useTreatsContext();

  async function handleDelete(){
      const response = await axios.delete('http://localhost:4000/api/treats/'+treat._id)
      const data = await response.data
      
      if(response.status===200){
        dispatch({type: 'DELETE_TASK', payload : data})
      } 
    }
  
    // async function handleUpdate(){
    //   const response = await axios.patch('http://localhost:4000/api/treats/'+treat._id)
    //   const data = await response.data
      
    //   if(response.status===200){
    //     dispatch({type: 'DELETE_TASK', payload : data})
    //   } 
    // }
  
    return (
      <div className="treat-details">
        <h4>{treat.title}</h4>
        <p><strong>Description: </strong>{treat.description}</p>
        <p><strong>Host: </strong>{treat.host}</p>
        <p><strong>Status: </strong>{treat.status}</p>
        <DeleteIcon className='deleteIcon' onClick={handleDelete}></DeleteIcon>
      </div>
    )
  }
  
  export default TreatDetails;