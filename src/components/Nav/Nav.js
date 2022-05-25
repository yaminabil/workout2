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

  // contact
  const handleContact = () => {
    Navigate("/contact");
  };

  //About
  const handleAbout = () => {
    Navigate("/about");
  };

  //Home
  const handleHome = () => {
    Navigate("/exercises");
  };

  return (
    <div className="Nav">
      <div className="logo"></div>
      <div className="buttons">
        <ul className="nav-list">
          <li>
            <button onClick={handleHome}>Home</button>
          </li>
          <li>
            <button onClick={handleContact}>Contact</button>
          </li>
          <li>
            <button onClick={handleAbout}>About</button>
          </li>
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
