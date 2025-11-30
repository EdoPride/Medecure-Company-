import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white px-6 py-4 flex justify-between items-center z-50 relative">

      {/* Logo */}
      <div className="text-2xl font-bold">MyWebsite</div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6 text-lg">
  <NavLink
    to="/"
    className={({ isActive }) =>
      `relative px-3 py-2 rounded-full transition duration-300 ${
        isActive ? "bg-[#10002b]" : "hover:bg-[#9d4edd]"
      }`
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/services"
    className={({ isActive }) =>
      `relative px-3 py-2 rounded-full transition duration-300 ${
        isActive ? "bg-[#10002b]" : "hover:bg-[#9d4edd]"
      }`
    }
  >
    Services
  </NavLink>

  <NavLink
    to="/appointment"
    className={({ isActive }) =>
      `relative px-3 py-2 rounded-full transition duration-300 ${
        isActive ? "bg-[#10002b]" : "hover:bg-[#9d4edd]"
      }`
    }
  >
    Appointment
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `relative px-3 py-2 rounded-full transition duration-300 ${
        isActive ? "bg-[#10002b]" : "hover:bg-[#9d4edd]"
      }`
    }
  >
    About
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `relative px-3 py-2 rounded-full transition duration-300 ${
        isActive ? "bg-[#10002b]" : "hover:bg-[#9d4edd]"
      }`
    }
  >
    Contact
  </NavLink>
</ul>


      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

  {/* Mobile Menu */}
<ul
  className={`
    absolute top-full left-0 w-full
    bg-gradient-to-r from-[#10002b] to-[#904edd]
    text-white flex flex-col space-y-4 px-6 py-6
    transition-all duration-500 ease-out
    ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}
  `}
>
  <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
  <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
  <li><Link to="/appointment" onClick={() => setIsOpen(false)}>Appointment</Link></li>
  <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
  <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
</ul>


    </nav>
  );
}
