import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { getUser, logout, checkToken } from "../../utilities/users-service";
import Exercises from "../Exercises/Exercises";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Category from "../Category/Category";
import OneExercise from "../OneExercise/OneExercise";

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
              <Route path="/exercises" element={<Exercises user={user} />} />
              <Route
                path="/exercises/:type"
                element={<Category user={user} />}
              />
              <Route path="/exercises/:type/:id" element={<OneExercise />} />

              <Route path="/*" element={<Navigate to="/exercises" />} />
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
