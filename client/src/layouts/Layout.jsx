import { NavLink } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;
  return (
    <main className="background-img">
      <header>
        {currentUser ? (
          <nav className="user-logged-in">
            <NavLink to="/">
              <img src="http://i.imgur.com/aHMHpXc.png" />
            </NavLink>
            <p>Welcome {currentUser.username}</p>
            <NavLink to="/post-recipe">New Post</NavLink>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </nav>
        ) : (
          <nav className="user-logged-out">
            <NavLink to="/">
              <img src="http://i.imgur.com/aHMHpXc.png" />
            </NavLink>
            <NavLink className="login-button" to="/login">Login</NavLink>
            <NavLink className="signup-button" to="/signup">Sign up</NavLink>
          </nav>
        )}
      </header>
      {children}
    </main>
  );
}
