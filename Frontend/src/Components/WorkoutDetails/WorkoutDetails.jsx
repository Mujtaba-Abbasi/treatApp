import './WorkoutDetailsStyles.css'

const WorkoutDetails = ({ treat }) => {

    return (
      <div className="treat-details">
        <h4>{treat.title}</h4>
        <p><strong>Description: </strong>{treat.description}</p>
        <p><strong>Host: </strong>{treat.host}</p>
        <p><strong>Status: </strong>{treat.status}</p>
      </div>
    )
  }
  
  export default WorkoutDetails;