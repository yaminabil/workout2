import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { getUser, logout, checkToken } from "../../utilities/users-service";
import NewExercise from "../NewExercise/NewExercise";
import Exercise from "../Exercises/Exercises";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser);
  }, []);

  return (
    <div className="App">
      <Nav setUser={setUser} />
      <main>
        {user ? (
          <>
            <Routes>
              <Route path="/exercises" element={<Exercise user={user} />} />
              <Route
                path="/exercises/new"
                element={<NewExercise user={user} />}
              />
              <Route path="/*" element={<Navigate to="/exercises/new" />} />
            </Routes>
          </>
        ) : (
          <div>
            <AuthPage setUser={setUser} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
