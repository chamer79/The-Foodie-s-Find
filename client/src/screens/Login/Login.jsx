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
    <div className="login-register-container">
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <input
          className="login-user"
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          className="login-password"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="login-submit">Submit</button>
      </form>
    </div>
  );
}
