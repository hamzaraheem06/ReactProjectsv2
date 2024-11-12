import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer, Container, Loading } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-600 flex flex-wrap justify-center items-center">
        <Loading type={"spinningBubbles"} color={"black"} />
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-neutral-600 flex flex-col justify-between items-center">
        <Header />
        <h1 className="text-slate-300 text-3xl text-center">
          Login to see posts.
        </h1>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
