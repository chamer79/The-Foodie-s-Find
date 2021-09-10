import "./SignUp.css";
import { useState } from "react";

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const { username, email, password } = formData;
  const { handleSignUp } = props;

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
            handleSignUp(formData);
          }}
        >
          <input
            required
            className="username"
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            required
            className="email"
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            required
            className="password"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            required
            className="password-confirmation"
            type="password"
            name="passwordConfirmation"
            value={password}
            placeholder="Password Confirmation"
            onChange={handleChange}
          />
          <button className="login-signup-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
