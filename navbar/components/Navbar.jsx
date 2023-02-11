import React, { useEffect, useState } from "react";

import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("home");

  const toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 640) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    // When the page loads for first time
    if (window.innerWidth < 640) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  return (
    <div
      className={`sticky top-0 left-0 ${
        show ? "h-fit" : "h-[10vh]"
      } w-full text-lg text-white flex flex-col justify-start items-start bg-gray-700`}
    >
      <div className={`h-[10vh] w-full p-6 flex justify-between items-center`}>
        <h1 className="text-2xl font-[600]">Navbar</h1>

        <div className="hidden sm:flex justify-start items-center space-x-6">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Profile</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Contact</p>
          <p className="cursor-pointer">Logout</p>
        </div>

        <div className={`block sm:hidden`}>
          {show ? (
            <IoMdClose className="h-9 w-9" onClick={toggle} />
          ) : (
            <HiOutlineMenu className="h-9 w-9" onClick={toggle} />
          )}
        </div>
      </div>

      {show && (
        <div className="w-full py-4 px-4 flex flex-col justify-start items-start space-y-2 xs:space-y-3 border-t border-white">
          <div
            className={`w-full py-2 px-4 rounded-md ${
              active === "home" ? "bg-gray-500" : "bg-transparent"
            }`}
          >
            <p className="cursor-pointer" onClick={() => setActive("home")}>
              Home
            </p>
          </div>
          <div
            className={`w-full py-2 px-4 rounded-md ${
              active === "profile" ? "bg-gray-500" : "bg-transparent"
            }`}
          >
            <p className="cursor-pointer" onClick={() => setActive("profile")}>
              Profile
            </p>
          </div>
          <div
            className={`w-full py-2 px-4 rounded-md ${
              active === "about" ? "bg-gray-500" : "bg-transparent"
            }`}
          >
            <p className="cursor-pointer" onClick={() => setActive("about")}>
              About
            </p>
          </div>
          <div
            className={`w-full py-2 px-4 rounded-md ${
              active === "contact" ? "bg-gray-500" : "bg-transparent"
            }`}
          >
            <p className="cursor-pointer" onClick={() => setActive("contact")}>
              Contact
            </p>
          </div>
          <div
            className={`w-full py-2 px-4 rounded-md ${
              active === "logout" ? "bg-gray-500" : "bg-transparent"
            }`}
          >
            <p className="cursor-pointer">Logout</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
