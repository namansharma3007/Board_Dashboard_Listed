import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/LoginPage/Login'

function App() {
  const [user, setUser] = useState(null)
  // console.log(user)
  const getUser = async () => {
    try {
      const url = "http://localhost:8080/auth/login/success";

      const response = await axios.get(url, { withCredentials: true });
      setUser(response.data.user._json)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUser();
  }, [])

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
