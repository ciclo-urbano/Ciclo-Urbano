import React from 'react';
import './Bike.css';
import { Link } from 'react-router-dom'

const Bike = (props) => {
    return (
        <div className='bike'>
          <Link className="bike-link" to={`/bikes/${props._id}`}>
            <img className="bike-image" src={props.imageURL} alt={props.model} />
            <div className='bike-text'>
              <div className="bike-model">{props.model}</div>
              <div className="bike-price">{`${props.price}`}</div>
            </div>
            </Link>
        </div>
    )
}

export default Bike