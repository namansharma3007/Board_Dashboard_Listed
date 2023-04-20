import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/LoginPage/Login'

function App() {
  const [user, setUser] = useState(null)
  const getUser = async () => {
    try {
      const url = "https://google-auth-board-listed.up.railway.app/auth/login/success";
      // const url = "http://localhost:8080/auth/login/success";

      // const response = await axios.get(url, { withCredentials: true });

      const response = await axios.get(url, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://board-dashboard-listed.netlify.app",
        },
      }
      );

      if (response.data.error) {
        // handle error response
        console.log(response.data.message);
      } else {
        // handle success response
        setUser(response.data.user._json);
      }

      // setUser(response.data.user._json)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUser();
  }, [])
  // console.log(user)

  return (
    <div className="App">

      <Routes>
        <Route
          exact
          path="/dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to={"/"} />} />

        <Route
          exact
          path="/"
          element={user ? <Navigate to={"/dashboard"} /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
