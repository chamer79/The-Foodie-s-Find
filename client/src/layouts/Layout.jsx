import { NavLink } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;
  return (
    <div>
      <header>
        {currentUser ? (
          <nav classNmae="user-logged-in">
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
            <nav classname="user-logged-out">
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
