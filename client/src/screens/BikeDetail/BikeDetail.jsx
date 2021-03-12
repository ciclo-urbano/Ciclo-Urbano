import { useState, useEffect } from 'react';
import './BikeDetail.css';
import Layout from '../../components/Shared/Layout/Layout'
import { useParams, Link } from 'react-router-dom';
import { getBike, deleteBike } from '../../services/bikes';

function BikeDetail(props) {
  const [bike, setBike] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBike = async () => {
      const bike = await getBike(id)
      setBike(bike)
      setLoaded(true)
    }
    fetchBike();
  }, [id])

  if (!isLoaded) {
    return <h2>Loading...</h2>
  }

  return (
    <Layout>
      <div className='bike-detail'>
        <img className='bike-detail-image' src={bike.imageURL} alt={bike.model} />
        <div className='detail-text'>
          <div className='bike-detail-model'>{`${bike.make} ${bike.model}`}</div>
          <div className='bike-detail-price'>{`$${bike.price}`}</div>
          <div className='bike-detail-color'>{bike.color && `Color: ${bike.color}`}</div>
          <div className='bike-detail-size'>{`Size: ${bike.size}`}</div>
          <div className='bike-description'>{bike.description}</div>
          <div className='button-container'>
            <button className='edit-button'>
              <Link className='edit-link' to={`/bikes/${bike._id}/edit`}>Edit</Link>
            </button>
            <button className='delete-button' onClick={() => deleteBike(bike._id)}>Delete</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BikeDetail