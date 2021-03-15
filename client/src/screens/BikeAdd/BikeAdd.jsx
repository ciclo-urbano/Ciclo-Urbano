import Form from '../../components/Form/Form.jsx';
import Layout from '../../components/Shared/Layout/Layout';
// import { useHistory } from 'react-router-dom';
import './BikeAdd.css'

function BikeAdd(props) {
  return (
    <Layout user={props.user}>
      <div className="form-background">
        <Form user={props.user} />
        </div>
    </Layout>
  )
}

export default BikeAdd