import "./Login.css";
import { useState } from "react";

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
      [name]: value,
    }));
  };

  return (
    <div className="login-signup-img">
      <div className="login-signup-container">
        <form
          className="login-signup-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
        >
          <input
            className="username"
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            className="password"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
          <button className="login-signup-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
