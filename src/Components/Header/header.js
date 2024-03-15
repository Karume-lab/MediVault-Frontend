"use client"
import React, { useState } from 'react';
import Image from 'next/image';


export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOnSignout =()=>{
    alert("You have been logged out")
  }

  return (
    <div>
      <div className="flex flex-row justify-between justify-center  bg-blue-500 p-6 ">
        <div className="flex flex-row align-center justify-center ">
          {/* <Image src="/logo.png" alt="MediVault" width={200} height={200}/> */}
          <h1 className="text-white font-bold">MediVault</h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
          onClick={handleDropdownToggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        {isDropdownOpen && (
          <div className="absolute top-16 right-0 bg-blue-400 p-4 shadow">
            <div className="flex flex-col hover:bg-blue-400 items-start mb-4 text-black">
              {/* Hospital name and logo */}
              {/* <Image src="/hospital-logo.png" alt="Hospital Logo" width={50} height={50} /> */}
              <h2 className="ml-2">Hospital Name :Jkuat Hospital</h2>
            </div>
            <div className="mb-4 text-black hover:bg-blue-400">
              {/* Contact info */}
              <p>Contact Info: hospital@example.com</p>
            </div>
            <div className='hover:bg-blue-400'>
              {/* Sign out */}
              <button className="text-black" onClick={handleOnSignout}>Sign Out</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}