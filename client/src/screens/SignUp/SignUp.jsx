import "./SignUp.css"
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
    <main>
      <form className="login-signup-container"
        className="login-signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp(formData);
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
          className="email"
          type="text"
          name="email"
          value={email}
          placeholder="Email"
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
        <input
          className="password-confirmation"
          type="password"
          name="passwordConfirmation"
          value={password}
          placeholder="Password Confirmation"
          onChange={handleChange}
        />
        <button className="login-signup-button">Submit</button>
      </form>
    </main>
  );
}
