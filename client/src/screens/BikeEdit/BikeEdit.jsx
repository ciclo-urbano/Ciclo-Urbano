import Form from '../../components/Form/Form.jsx';
import Layout from '../../components/Shared/Layout/Layout';
import { useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import './BikeEdit.css'


function BikeEdit(props) {
  const [isUpdated, setUpdated] = useState(false)
  const history = useHistory();
  const { id } = useParams();

  if (isUpdated) {
    history.push('/')
  }
  
  return (
    <Layout user={props.user}>
      <Form setUpdated={setUpdated} id={id}/>
    </Layout>
  )
}

export default BikeEdit