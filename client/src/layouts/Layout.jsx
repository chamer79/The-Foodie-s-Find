import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props;
  return (
    <div>
      <header>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button className="logout" onClick={handleLogout}>Logout</button>
          </>
        ) : (
            <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
            </>
        )}
        {
          currentUser &&
          <>
            <Link to="/post-recipe">New Post</Link>
          </>
        }
      </header>
      {children}
    </div>
  )
}
