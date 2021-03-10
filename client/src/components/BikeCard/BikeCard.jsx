import './BikeCard.css';
import { Link } from 'react-router-dom';

function BikeCard(props) {
  return (
    <div className='bike-card'>
      <Link className='card' to={`/bikes/${props.id}`}>
        <img className='bike-card-image' src={props.image_url} alt={props.title}/>
        <p className="card-model">{props.model}</p>
      </Link>
    </div>
  )
};

export default BikeCard