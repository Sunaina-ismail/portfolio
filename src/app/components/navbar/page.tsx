'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="relative flex justify-between w-full px-8 py-2 md:px-10 lg:px-24 m-auto md:py-4 items-center bg-white">
      <div className="text-xl lg:text-2xl text-blue-900 font-extrabold nav-name">
        <span className="font-tangerine text-3xl lg:text-5xl">Sunaina</span> ISMAIL
      </div>
      
      <div className="font-serif">
        <ul className="hidden md:flex justify-between md:text-xl lg:text-2xl gap-x-5">
          <li className="nav-item hover:text-blue-900 hover:border-b-blue-900 hover:border-b-2"><Link href="/" onClick={closeDropdown}>Home</Link></li>
          <li className="nav-item hover:text-blue-900 hover:border-b-blue-900 hover:border-b-2"><Link href="/components/about" onClick={closeDropdown}>About me</Link></li>
          <li className="nav-item hover:text-blue-900 hover:border-b-blue-900 hover:border-b-2"><Link href="/components/skills" onClick={closeDropdown}>Skills</Link></li>
          <li className="nav-item hover:text-blue-900 hover:border-b-blue-900 hover:border-b-2"><Link href="/components/portfolio" onClick={closeDropdown}>Portfolio</Link></li>
        </ul>
      </div>
      
      <div className="nav-item hidden md:block text-sm md:text-md lg:text-lg font-semibold">
      <Link href="/components/contact">
        <button className="border-2 border-blue-900 py-1 px-1 md:py-2 md:px-4 text-blue-900 rounded-md">
         Contact me
        </button>
        </Link>
      </div>
      
      <FaBars 
        className="md:hidden text-blue-900 cursor-pointer fa-bars" 
        size={30} 
        onClick={toggleDropdown} 
      />

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="nav-item hover:text-blue-900 text-lg text-black"><Link href="/" onClick={closeDropdown}>Home</Link></li>
            <li className="nav-item hover:text-blue-900 text-lg text-black"><Link href="/components/about" onClick={closeDropdown}>About me</Link></li>
            <li className="nav-item hover:text-blue-900 text-lg text-black"><Link href="/components/skills" onClick={closeDropdown}>Skills</Link></li>
            <li className="nav-item hover:text-blue-900 text-lg text-black"><Link href="/components/portfolio" onClick={closeDropdown}>Portfolio</Link></li>
            <li className="nav-item thover:text-blue-900 font-semibold">
              <button className="border-2 border-blue-900 py-2 px-4 rounded-md">
                <Link href="/components/contact" onClick={closeDropdown}>Contact me</Link>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;