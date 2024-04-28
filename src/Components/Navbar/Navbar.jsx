import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/UseAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  // console.log(user, logOut);


  // nav link variable
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-arts-and-craft-items">All Art & Craft Items</Link>
      </li>
      <li>
        <Link to="/add-craft-item">Add Craft Item</Link>
      </li>
      <li>
        <Link to="/my-art-craft-list">My Art & Craft List</Link>
      </li>
    </>
  );


  // theme controller function start
  const [theme, setTheme] = useState('light');
  useEffect(()=> {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)

  }, [theme])
  const handleToggle = (e) => {
    // console.log(e.target.checked)
    if(e.target.checked) {
      setTheme('synthwave')
    }else {
      setTheme('light')
    }
  }
  // theme controller function end

  return (
    <div className="navbar bg-base-100 poppins-regular">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[15]  shadow bg-base-100 rounded-box w-52 poppins-regular"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center cursor-pointer text-2xl">
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-16"
            // src={logo}
            alt=""
          />
          <h2 className="hidden md:block font-bold w-64 playfair-display">Art Gallery</h2>
        </Link>
      </div>

      <div className="navbar">
        <div className=" hidden lg:flex justify-start">
          <ul className="menu menu-horizontal">{navLinks}</ul>
        </div>
      </div>

      {/* Login and Register  theme controller  */}
      <div>
        {/* Theme controller */}
        <label className="swap swap-rotate items-center">
          {/* this hidden checkbox controls the state */}
          <input onChange={handleToggle}
            type="checkbox"
            className="theme-controller"
           
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      {user ? (
          <div className="">
            <div className=" flex items-center">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <button
                  className="w-10  rounded-full tooltip tooltip-bottom"
                  data-tip={user?.displayName || "Anonymous"}
                >
                  <img
                    className=" rounded-full"
                    src={
                      user?.photoURL ||
                      "https://lh3.googleusercontent.com/a/ACg8ocLgMoPuzTbu3w6-hU9tKW5_DGwio0pcsH0vNr5NcJZ9MglZFM4=s288-c-no"
                    }
                  />
                </button>
              </label>

              <button
                onClick={logOut}
                className="btn btn-sm   btn-ghost"
              >
                Logout
              </button>
              
            </div>

            {/* {user?.displayName || "user name not found"} */}
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm  btn-ghost  poppins-regular">Login</button>
          </Link>
        )}
    </div>
  );
};

export default Navbar;
