import { signup } from "../utilities/users-service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp({ setUser }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
  });
  let Navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const formData = { ...userData };
      delete formData.error;
      const user = await signup(formData);
      setUser(user);
      Navigate("/exercises");
    } catch (err) {
      setUserData({ ...userData, error: "sign up failed" });
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value, error: "" });
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSignup}>
        <label>Name : </label>
        <input type="text" name="name" onChange={handleChange} />

        <label>Email : </label>
        <input type="text" name="email" onChange={handleChange} />

        <label>Password : </label>
        <input type="password" name="password" onChange={handleChange} />

        <br />
        <button type="submit"> Sign Up </button>
      </form>

      <p>{userData.error}</p>
    </div>
  );
}
