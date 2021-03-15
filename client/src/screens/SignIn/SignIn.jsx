import Layout from '../../components/Shared/Layout/Layout'
import './SignIn.css'
import { signIn } from '../../services/users'
import { useHistory } from "react-router-dom"
import {useState} from 'react'

const SignIn = (props) => {

    const history = useHistory()

    const [form, setForm] = useState({
        email: '',
        password: '',
        isError: false,
        errorMsg: ''
    })

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSignIn = event => {
        event.preventDefault()

        const { setUser } = props

        signIn(form)
            .then(user => {
                setUser(user)
            })
            .then(() => history.push('/bikes'))
            .catch(error => {
                console.error(error)
                setForm({
                    isError: true,
                    errorMsg: 'Invalid Credentials',
                    username: '',
                    password: ''
                })
            })
    }

    const renderError = () => {
        const toggleForm = form.isError ? 'danger' : ''
        if (form.isError) {
            return (
                <button type="submit" className={toggleForm}>
                    {form.errorMsg}
                </button>
            )
        } else {
            return <button type="submit">Sign In</button>
        }
    }

    const { email, password } = form

  return (
      <Layout>
        <div>
            <h3>Admin Sign In</h3>
            <form className="form-container" onSubmit={onSignIn}>
                <label>Email:</label>
          <input
            className="input"
                    required
                    type="text"
                    name="email"
                    value={email}
                    placeholder=""
                    onChange={handleChange}
                />
                <label>Password:</label>
          <input
            className="input"
                    required
                    name="password"
                    value={password}
                    type="password"
                    placeholder=""
                    onChange={handleChange}
                />
                {renderError()}
            </form>
      </div>
      </Layout>
    )
}

export default SignIn