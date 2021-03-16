import Form from "../../components/Form/Form.jsx";
import Layout from "../../components/Shared/Layout/Layout";
import { useParams } from "react-router-dom";
import "./BikeEdit.css";

function BikeEdit(props) {
  const { id } = useParams();

  return (
    <Layout user={props.user}>
      <div className="form-background">
        <Form id={id} />
      </div>
    </Layout>
  );
}

export default BikeEdit;
