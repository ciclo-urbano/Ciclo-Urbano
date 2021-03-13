import { useState, useEffect } from 'react';
import { getBike, updateBike, createBike } from '../../services/bikes.js';
import { useHistory } from 'react-router-dom';

import './Form.css'

function Form(props) {
  const [isUpdated, setUpdated] = useState(false);
  const history = useHistory();
  
  if (isUpdated) {
    history.push('/')
  }
  
  //initialize bike as empty object
  const [bike, setBike] = useState(
    {
      model: '',
      make: '',
      category: '',
      description: '',
      price: '',
      size: '',
      imageURL: '',
      isSold: false,
      onHold: false,
    }
  )
  
  //grab the bike if passed, if not set builderID as currently logged in user's ID
  useEffect(() => {
    if (props.id) {
      const fetchBike = async () => {
        const theBike = await getBike(props.id);
        setBike(theBike);
      }
      fetchBike();
    } else {
      setBike({ ...bike, builderID: props.user.userID });
    }
  }, [props.id]);

  const handleChange = (e) => {
    const { name, value } = e.target
    setBike({
      ...bike,
      [name]: value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.id) {
      const theBike = await updateBike(props.id, bike);
      setUpdated(theBike);
    } else {
      const theBike = await createBike(bike);
      console.log('created', theBike);
      setUpdated(theBike);
    }
  }

  return (
    <form className="bike-form" onSubmit={handleSubmit}>
      <label htmlFor='Make'>Make</label>
      <input
        className="input input-make"
        placeholder="Make"
        value={bike.make}
        name="make"
        required
        onChange={handleChange}
      />
      <label htmlFor='Model'>Model</label>
      <input
        className="input input-model"
        placeholder="Model"
        value={bike.model}
        name="model"
        required
        onChange={handleChange}
      />
      <label htmlFor='Category'>Category</label>
      <input
        className="input input-category"
        placeholder="Category"
        value={bike.category}
        name="category"
        required
        onChange={handleChange}
      />
      <label htmlFor='Description'>Description</label>
      <input
        className="input input-description"
        placeholder="Description"
        value={bike.description}
        name="description"
        required
        onChange={handleChange}
      />
      <label htmlFor='Color'>Color</label>
      <input
        className="input input-color"
        placeholder="Color"
        value={bike.color}
        name="color"
        required
        onChange={handleChange}
      />
      <label htmlFor='Price'>Price</label>
      <input
        className="input input-price"
        placeholder="Price"
        value={bike.price}
        name="price"
        required
        onChange={handleChange}
      />
      <label htmlFor='Size'>Size</label>
      <input
        className="input input-size"
        placeholder="Size"
        value={bike.size}
        name="size"
        required
        onChange={handleChange}
      />
      <label htmlFor='Image'>Image URL</label>
      <input
        className="input input-url"
        placeholder="Image URL"
        value={bike.imageURL}
        name="imageURL"
        required
        onChange={handleChange}
      />
      <button type='submit' className='submit-button'>{ props.id ? 'Save Changes' : 'Add'}</button>
      </form>
  )
}

export default Form