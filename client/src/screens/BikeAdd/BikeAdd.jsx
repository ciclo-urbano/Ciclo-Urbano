import Form from '../../components/Form/Form.jsx';
import Layout from '../../components/Shared/Layout/Layout';
import './BikeAdd.css'
import background from '../../img/bicycle-pegboard.jpg';

function BikeAdd(props) {
  return (
    <Layout user={props.user}>
      <div className="form-background" style={{ backgroundImage: `url(${background})` }}>
        <Form user={props.user} />
      </div>
    </Layout>
  )
}

export default BikeAdd