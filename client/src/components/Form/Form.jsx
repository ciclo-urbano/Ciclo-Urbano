import { useState, useEffect } from 'react';
import { getBike, updateBike, createBike } from '../../services/bikes.js';
import './Form.css'

function Form(props) {
  const [created, setCreated] = useState(false)
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

  useEffect(() => {
    if (props.id) {
      const fetchBike = async () => {
        const theBike = await getBike(props.id);
        setBike(theBike);
      }
      fetchBike();
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
      setCreated(theBike)
    } else {
      const theBike = await createBike(bike);
      console.log(theBike)
      setCreated(theBike)
    }
  }

  return (
    <form className="bike-form" onSubmit={handleSubmit}>
      <input
        className="input-model"
        placeholder="Model"
        value={bike.model}
        name="model"
        required
        onChange={handleChange}
      />
      <input
        className="input-make"
        placeholder="Make"
        value={bike.make}
        name="make"
        required
        onChange={handleChange}
      />
      <input
        className="input-category"
        placeholder="Category"
        value={bike.category}
        name="category"
        required
        onChange={handleChange}
      />
      <input
        className="input-description"
        placeholder="Description"
        value={bike.description}
        name="description"
        required
        onChange={handleChange}
      />
      <input
        className="input-color"
        placeholder="Color"
        value={bike.color}
        name="color"
        required
        onChange={handleChange}
      />
      <input
        className="input-price"
        placeholder="Price"
        value={bike.price}
        name="price"
        required
        onChange={handleChange}
      />
      <input
        className="input-size"
        placeholder="Size"
        value={bike.size}
        name="size"
        required
        onChange={handleChange}
      />
      <input
        className="input-url"
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