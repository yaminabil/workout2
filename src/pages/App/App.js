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
import About from "../About/About";
import Contact from "../Contact/Contact";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser);
  }, []);

  return (
    <div className="App">
      <main>
        {user ? (
          <>
            <Nav setUser={setUser} />
            <Routes>
              <Route path="/exercises" element={<Exercises user={user} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
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
            <Nav setUser={setUser} />
            <Routes>
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<AuthPage setUser={setUser} />} />
            </Routes>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
