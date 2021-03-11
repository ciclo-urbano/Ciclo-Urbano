import './Nav.css'
import { NavLink } from 'react-router-dom'


const authenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-out">SignOut</NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-in">SignIn</NavLink>
    <NavLink className='link' to='/sign-up'>SignUp</NavLink>
  </>
)

const alwaysOptions = (
  <>
    <NavLink className='link' to='/'>Home</NavLink>
    <NavLink className="link" to="/bikes">Bikes</NavLink>
    <a href='http://westtownbikes.org/events/' target="_blank">Events</a>
    <a href='http://westtownbikes.org/youth-rograms/' target="_blank">YouthPrograms</a>
    <a href='http://westtownbikes.org/ciclo-urbano/' target='_blank'>Visit</a>
  </>
)



const Nav = ({ user }) => {
  return (
    <nav>
      <div className='nav'>
        <NavLink className="logo" to="/"><img src='http://westtownbikes.org/wp-content/uploads/2018/08/WTB-Ciclo-Urbano-Yellow-logo.jpg' alt='logo' /></NavLink>
        {user && <div className="link-greeting">Hello, {user.firstName}</div>}
        <div className="links">
          {alwaysOptions}{user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}

export default Nav;