import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="shadow-md py-3 sm:py-4">
      <div className="container px-4 2xl:px-20 mx-auto 
                      flex flex-wrap justify-between items-center">
        {/* Logo */}
        <img
          loading="lazy"
          src={assets.logo}
          alt="Logo"
          className="h-8 w-auto max-sm:h-7"
        />

        {/* Right side (User info or Login) */}
        {user ? (
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 sm:mt-0">
            <Link
              to="/Applications"
              className="text-gray-600 hover:text-blue-600 
                         text-sm max-sm:text-xs"
            >
              <span className="max-sm:hidden">Applied Jobs</span>
              <span className="sm:hidden">Jobs</span>
            </Link>

            {/* You can remove or style the separator as needed */}
            <span className="text-gray-400 text-sm max-sm:hidden">|</span>

            <span className="text-gray-600 text-sm max-sm:text-xs truncate max-w-[120px]">
              Hi, {user.firstName}
            </span>

            {/* User avatar/sign out */}
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8 max-sm:h-7 max-sm:w-7",
                },
              }}
            />
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 sm:mt-0">
            <button className="text-gray-600 hover:text-blue-600 
                               text-sm max-sm:text-xs">
              Recruiter
            </button>
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 hover:bg-blue-400 text-white 
                         px-4 sm:px-6 py-1.5 sm:py-2 
                         rounded-full text-sm max-sm:text-xs"
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
