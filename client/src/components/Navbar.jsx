import React from "react";
import { Link } from "react-router-dom"; // Added missing Link import
import { assets } from "../assets/assets";
import { SignIn, useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="shadow-md py-4">
      {/* Fixed breakpoint class syntax */}
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img loading="lazy" src={assets.logo} alt="Logo" />
        {user ? (
          // User logged-in state
          <div className="flex items-center gap-4">
            <Link to="/Applications" className="text-gray-600 hover:text-blue-600">
              Applied Jobs
            </Link>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">
            Welcome!, {user.firstName} {user.lastName}
            </span>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          // Guest state
          <div className="flex gap-4 max-sm:text-xs">
            {/* Removed invalid ☐ symbol */}
            <button className="text-gray-600 hover:text-blue-600">
              Recruiter Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 hover:bg-blue-400 text-white px-6 sm:px-9 py-2 rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;