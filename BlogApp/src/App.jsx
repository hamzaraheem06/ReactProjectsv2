import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import ReactLoading from "react-loading";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const Loading = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={"5%"} width={"10%"} />
  );

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
        <Loading type={"cubes"} color={"black"} />
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-neutral-600 flex flex-wrap justify-center items-center">
        <div className="w-full min-h-screen flex flex-col justify-between">
          <Header />
          <h1 className="text-slate-300 text-3xl text-center">
            Login to see posts.
          </h1>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
