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
  return (
    <div className="Nav">
      <div className="logo"></div>
      <div className="buttons">
        <ul className="nav-list">
          <li>
            <button>Contact</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
