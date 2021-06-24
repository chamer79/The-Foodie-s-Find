import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
    }))
  }
  
  return (
    <form className="login-form" onSubmit={(e) => {
      e.preventDefault()
      handleLogin(formData)
    }}>
      <h3>Login</h3>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="Email"
        onChange={handleChange}
      />
      <Link>Sign Up</Link>
      <button>Submit</button>
    </form>
  )
}


