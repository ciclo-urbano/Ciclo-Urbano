import Form from '../../components/Form/Form.jsx';
import Layout from '../../components/Shared/Layout/Layout';
import { useParams } from 'react-router-dom';
import './BikeEdit.css'


function BikeEdit(props) {
  const { id } = useParams();

  return (
    <Layout user={props.user}>
      <Form id={id}/>
    </Layout>
  )
}

export default BikeEdit