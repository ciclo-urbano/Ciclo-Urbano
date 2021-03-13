import Form from '../../components/Form/Form.jsx';
import Layout from '../../components/Shared/Layout/Layout';
// import { useHistory } from 'react-router-dom';
import './BikeAdd.css'

function BikeAdd(props) {
  return (
    <Layout user={props.user}>
      <Form user={props.user}/>
    </Layout>
  )
}

export default BikeAdd