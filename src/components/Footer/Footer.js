import { useNavigate } from "react-router-dom";
import { getUser, logout, checkToken } from "../../utilities/users-service";
export default function Nav({ setUser }) {
  let Navigate = useNavigate();
  // logout
  const handleLogout = () => {
    logout();
    setUser(null);
    Navigate("/");
  };
  return <div className="Footer"></div>;
}
