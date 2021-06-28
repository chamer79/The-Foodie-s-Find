import { NavLink } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;
  return (
    <div className="background-img">
      <header>
        {currentUser ? (
          <nav className="user-logged-in">
            <NavLink to="/">
              <img
                src="http://i.imgur.com/aHMHpXc.png"
              />
            </NavLink>
            <p>Welcome {currentUser.username}</p>
            <NavLink to="/post-recipe">New Post</NavLink>
            <button className="logout" onClick={handleLogout}>Logout</button>
          </nav>
        ) : (
            <nav className="user-logged-out">
              <NavLink to="/">
              <img
                src="http://i.imgur.com/aHMHpXc.png"
              />
            </NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
            </nav>
        )}
       
      </header>
      {children}
    </div>
  )
}
