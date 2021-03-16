import "./Nav.css";
import { NavLink } from "react-router-dom";

// <<<<<<< HEAD
// const authenticatedOptions = (
//   <>
    
//     <NavLink className="link" to="/sign-out">
//       SignOut
// =======
const Nav = ({ user }) => {

  let authenticatedOptions = null;
  if (user) {
   authenticatedOptions = (
      <>
        <NavLink className="add-bike" to={`/${user.userID}/add-bike`}>
          Add Bike

    </NavLink>
        <NavLink className="link" to="/sign-out">
          Sign Out
    </NavLink>
      </>
    );
  };

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="link" to="/">
      Home
    </NavLink>
    <NavLink className="link" to="/bikes">
      Bikes
    </NavLink>
    <a href="http://westtownbikes.org/events/" target="_blank" rel="noreferrer">
      Events
    </a>
    <a
      href="http://westtownbikes.org/ciclo-urbano/"
      target="_blank"
      rel="noreferrer"
    >
      Visit
    </a>
  </>
);

  return (
    <nav>
      <NavLink className="logo" to="/">
        <img src="https://i.imgur.com/3i8g2OC.jpg" alt="logo" />
      </NavLink>
      {user && <div className="link-greeting">Welcome, {user.firstName}.</div>}
      <div id="hamnav">
        <label htmlFor="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />
        <div id="hamitems">
          {alwaysOptions} {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
