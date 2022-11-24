import React from "react";
import hero from "../assets/hero.png";
import { useAuth0 } from "@auth0/auth0-react";
// import Header from "./Header";
import Dashboard from "../pages/Dashboard"
import Loader from "./Loader";

const Hero = () => {
  const { loginWithRedirect, isAuthenticated, logout, user,isLoading } = useAuth0();
  if (isLoading) {
    return <>
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <Loader/>
            </div></div>
    </>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
        
          {/* <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
            </div>
          </div> */}
          <div className="w-full h-screen py-24 bg-zinc-200 flex flex-col justify-between">
          <Dashboard user={user} logout={logout}/>
          </div>
          
        </>
      ) : (
        <>
          <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
              <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center  md:items-start w-96 px-2 py-8  bg-zinc-300 drop-shadow-lg rounded-lg">
                  <p className="text-2xl text-center font-serif">
                    Sign In to Start Your
                  </p>
                  <h1 className="py-3 text-5xl  text-center md:text-7xl font-bold font-serif">
                    Frontend Journey
                  </h1>
                  <div className="flex justify-center items-center flex-wrap space-x-2">
                    <button
                      onClick={() => {
                        loginWithRedirect();
                      }}
                      type="submit"
                      className="inline-block px-7 mx-20 w-48 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Sign in Or Log in
                    </button>
                  </div>
                </div>
              </div>
              <div className="py-28">
                <img className="w-full" src={hero} alt="/" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Hero;
