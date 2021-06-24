import Layout from "./layouts/Layout.jsx";
import Login from "./screens/Login/Login.jsx";
import SignUp from "./screens/SignUp/SignUp.jsx";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  loginUser,
  signUpUser,
  verifyUser,
  removeToken,
} from "./services/auth"


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])
  
  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/")
  };

  const handleSignUp = async (formData) => {
    const userData = await signUpUser(formData);
    setCurrentUser(userData);
    history.push("/")
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  }
  
  return (
    <div>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <SignUp handleSignUp={handleSignUp} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
