import Layout from '../../components/Shared/Layout/Layout'
import './SignUp.css'
import { signUp, signIn} from '../../services/users'
import { useHistory } from "react-router-dom"
import {useState} from 'react'

const SignUp = (props) => {

    const history = useHistory()

    const [form, setForm] = useState({
      firstName: '',
      lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: false,
        errorMsg: ''
    })

    const handleChange = event =>
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

    const onSignUp = event => {
        event.preventDefault()
        const { setUser } = props

        signUp(form)
            .then(() => signIn(form))
            .then(user => setUser(user))
            .then(() => history.push('/bikes'))
            .catch(error => {
                console.error(error)
                setForm({
                  firstName: '',
                  lastName: '',
                  email: '',
                    password: '',
                    passwordConfirmation: '',
                    isError: true,
                    errorMsg: 'Sign Up Details Invalid'
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
            return <button type="submit">Sign Up</button>
        }
    }

    const { email, firstName, lastName, password, passwordConfirmation } = form

  return (
      <Layout>
        <div className="form-container">
            <h3>Sign Up</h3>
            <form onSubmit={onSignUp}>
                <label>First Name</label>
                <input
                    required
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="First Name"
                    onChange={handleChange}
          />
           <label>Last Name</label>
                <input
                    required
                    type="text"
                    name="lastName"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    required
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    required
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <label>Password Confirmation</label>
                <input
                    required
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                />
                {renderError()}
            </form>
      </div>
      </Layout>
    )
}

export default SignUp