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
      <form className="login-register-container"
        className="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp(formData);
        }}
      >
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="passwordConfirmation"
          value={password}
          placeholder="Password Confirmation"
          onChange={handleChange}
        />
        <button className="login-submit">Submit</button>
      </form>
    </main>
  );
}
