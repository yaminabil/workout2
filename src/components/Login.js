import { useState } from "react";
import { login } from "../utilities/users-service";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  let Navigate = useNavigate();
  // declaring the user data
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    err: "",
  });
  // handle the change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value, err: "" });
  };

  // handle the submit

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const formData = { ...userData };
      delete formData.err;
      const user = await login(formData);
      setUser(user);
      Navigate("/exercises");
    } catch {
      setUserData({ ...userData, err: "sign up failed ! " });
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleLogin}>
        <label>Email : </label>
        <input type="text" onChange={handleChange} name="email" />
        <br />

        <label>Password :</label>
        <input type="password" onChange={handleChange} name="password" />
        <br />

        <button type="submit">Log In</button>
      </form>
      <p style={{ color: "red" }}>{userData.err} </p>
    </div>
  );
}
