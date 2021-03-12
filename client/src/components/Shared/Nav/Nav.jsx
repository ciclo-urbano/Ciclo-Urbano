import './Nav.css'
import { NavLink } from 'react-router-dom'
import {useState} from 'react'


const authenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-out"><button className='logButton'>SignOut</button></NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
     <NavLink className='link' to='/sign-up'>SignUp</NavLink>
     <NavLink className="link" to="/sign-in"><button className='logButton'>SignIn</button></NavLink>
  </>
)

const alwaysOptions = (
  <>
    <NavLink className='link' to='/'>Home</NavLink>
    <NavLink className="link" to="/bikes">Bikes</NavLink>
    <a href='http://westtownbikes.org/events/' target="_blank">Events</a>
    <a href='http://westtownbikes.org/ciclo-urbano/' target='_blank'>Visit</a>
  </>
)



const Nav = ({ user }) => {

  const [navLinkOpen, navLinkToggle] = useState(false)
  

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen)
  }

  const renderClasses = () => {
    let classes = 'links'
    if (navLinkOpen) {
      classes += 'active'
    }
    return classes 
  }

  return (
    <nav>
      <div className='nav'>
        <NavLink className="logo" to="/"><img src='https://i.imgur.com/3i8g2OC.jpg' alt='logo' /></NavLink>
        {user && <div className="link-greeting">Hello, {user.firstName}.</div>}
        <div className={renderClasses()}>
          {alwaysOptions}{user ? authenticatedOptions : unauthenticatedOptions}
        </div>
        <div onClick={handleNavLinksToggle} className='hamburgerToggle' >
          <i  className='fas fa-bars fa-lg'></i>
        </div>
      </div>
    </nav>
  )
}

export default Nav;