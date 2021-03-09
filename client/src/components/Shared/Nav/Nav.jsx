import './Nav.css'
import { NavLink } from 'react-router-dom'


const Nav = ({ user }) => {
  return (
    <nav>
      <div className='nav'>
        <NavLink className="logo" to="/"><img src='http://westtownbikes.org/wp-content/uploads/2018/08/cropped-WTB_Logo-1.jpg' alt='logo'/></NavLink>
        {/* <div className="links">
                        {user && <div className="link welcome">Welcome, {user.username}</div>}
                        {alwaysOptions}
                        {user ? authenticatedOptions : unauthenticatedOptions}
                    </div> */}
      </div>
    </nav>
  )
}