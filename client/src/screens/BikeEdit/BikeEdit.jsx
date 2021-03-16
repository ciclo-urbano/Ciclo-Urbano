import Form from "../../components/Form/Form.jsx";
import Layout from "../../components/Shared/Layout/Layout";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBike } from "../../services/bikes";
import "./BikeEdit.css";
import background from '../../img/bicycle-pegboard.jpg';

function BikeEdit(props) {
  const { id } = useParams();
  const [bike, setBike] = useState(null);

  useEffect(() => {
    const fetchBike = async () => {
      const theBike = await getBike(id);
      setBike(theBike);
    };
    fetchBike();

    // Image upload could go here if/else
  }, [id]);

  return (
    <Layout user={props.user}>
      <div className="form-background" style={{ backgroundImage: `url(${background})` }}>
        <div className="image-box">
        {bike ? (
          <img src={bike.imageURL} alt="bike" className="edit-image" />
        ) : (
          <h1>Loading...</h1>
          )}
          </div>
        <Form id={id} />
      </div>
    </Layout>
  );
}

export default BikeEdit;
