import styles from "./Auth.module.css";
import { useState } from "react";
import SignUp from "../../components/SignUp/SignUp";
import Login from "../../components/Login/Login";
export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className={styles.Auth + " " + "form-container"}>
      <button
        id="log-sign"
        onClick={() => setShowSignUp(!showSignUp)}
        className={styles.SignUpLoginButton}
      >
        {showSignUp ? "Log In" : "Sign Up"}
      </button>

      <div className="SignUpLoginForm">
        {showSignUp ? (
          <SignUp setUser={setUser} />
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
    </div>
  );
}
