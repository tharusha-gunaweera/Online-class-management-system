import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  CalendarIcon,
  ChatIcon,
  AcademicCapIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
import logo from "../Logo/LogoV2.jpg";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-[270px] bg-gray-100 shadow-lg flex flex-col items-center py-6 space-y-20">
      <div className="mb-6">
        <img src={logo} alt="Logo" className="w-40 h-15" />
      </div>

      <div className="flex flex-col justify-center items-center space-y-1">
        <NavLink
          to="/"
          className="w-[300px] flex justify-center items-center gap-3 px-6 py-3 text-sm font-medium font-[Poppins] text-gray-500 hover:text-blue-500"
        >
          {({ isActive }) => (
            <span
              className={`flex items-center gap-3 pl-[63px] py-3 w-60 ${
                isActive ? "text-blue-700 bg-blue-100" : "text-gray-500"
              }`}
            >
              <HomeIcon className="w-5 h-5" />
              Dashboard
            </span>
          )}
        </NavLink>

        <NavLink
          to="/timetable"
          className="w-[300px] justify-center flex items-center gap-3 px-6 py-3 text-sm font-medium font-[Poppins] transition-all text-gray-500 hover:text-blue-500"
        >
          {({ isActive }) => (
            <span
              className={`flex items-center gap-3 pl-[63px] py-3 w-60 ${
                isActive ? "text-blue-700 bg-blue-100" : "text-gray-500"
              }`}
            >
              <CalendarIcon className="w-5 h-5" />
              Time table
            </span>
          )}
        </NavLink>

        <NavLink
          to="/chatbox"
          className="w-[300px] justify-center flex items-center gap-3 px-6 py-3 text-sm font-medium font-[Poppins] transition-all text-gray-500 hover:text-blue-500"
        >
          {({ isActive }) => (
            <span
              className={`flex items-center gap-3 pl-[63px] py-3 w-60 ${
                isActive ? "text-blue-700 bg-blue-100" : "text-gray-500"
              }`}
            >
              <ChatIcon className="w-5 h-5" />
              Chatbox
            </span>
          )}
        </NavLink>

        <NavLink
          to="/myclasses"
          className="w-[300px] justify-center flex items-center gap-3 px-6 py-3 text-sm font-medium font-[Poppins] transition-all text-gray-500 hover:text-blue-500"
        >
          {({ isActive }) => (
            <span
              className={`flex items-center gap-3 pl-[63px] py-3 w-60 ${
                isActive ? "text-blue-700 bg-blue-100" : "text-gray-500"
              }`}
            >
              <AcademicCapIcon className="w-5 h-5" />
              My classes
            </span>
          )}
        </NavLink>

        <NavLink
          to="/enrollclass"
          className="w-[300px] justify-center flex items-center gap-3 px-6 py-3 text-sm font-medium font-[Poppins] transition-all text-gray-500 hover:text-blue-500"
        >
          {({ isActive }) => (
            <span
              className={`flex items-center gap-3 pl-[63px] py-3 w-60 ${
                isActive ? "text-blue-700 bg-blue-100" : "text-gray-500"
              }`}
            >
              <ClipboardListIcon className="w-5 h-5" />
              Enroll classes
            </span>
          )}
        </NavLink>
      </div>

      <div
        to="/logout"  // Change this to the appropriate logout page if necessary
        className="w-[250px] flex items-center gap-3 cursor-pointer px-6 py-2 text-sm font-medium font-[Poppins] transition-all text-gray-500 hover:text-red-500 hover:bg-red-100"
      >
        <span className="flex items-center justify-center gap-3 px-10 py-1 w-60">
          Log Out
        </span>
      </div>
    </div>
  );
};

export default Navbar;
