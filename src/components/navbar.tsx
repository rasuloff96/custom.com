"use client"

import Image from "next/image";
import Link from "next/link";
// import { Dropdown } from 'flowbite-react';

import React, { useState } from "react";
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
import { CiSettings } from 'react-icons/ci'
import { RiEditBoxLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };


  return (
    <header className=" flex items-center px-4 flex-wrap  md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white dark:bg-gray-900 dark:text-white">

      <div className="flex justify-center items-center">
        <Link href={"/"}>
          <Image
          className="inline dark:hidden"
            src={"/custom-logo.png"}
            alt="light mode  logo here"
            width={150}
            height={40}
          />
          <Image
            className="hidden dark:inline"
            src={"/custom-logo-dark.png"}
            alt="dark mode logo here"
            width={150}
            height={40}
          />
        </Link>

        <form className="flex w-96 ml-52 ">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative w-full" >
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full outline-none h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Istalgan mahsulotni qidiring ..." required />
          </div>
        </form>
      </div>


      <div className="flex items-center space-x-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center select-none text-base justify-center gap-3">
          {/* Kirish */}
          <Link
            href={"/access"}
            className="flex justify-center items-center"
          >
            <Image
              src={"/sign-in.png"}
              alt="sign in photo"
              width={25}
              height={25}
              color="white"
            />
          </Link>

          {/* saqlanganlar */}
          {/* <Link href={"/wishes"} className="flex justify-center items-center">
            <Image src={"/like.png"}
              width={22}
              height={22}
              alt="saqlangan mahsulotlar"
            />
          </Link> */}
          {/* savat */}
          <Link href={"/shopping-cart"} className="flex justify-center items-center">
            <Image src={"/shopping-cart.png"}
              alt="basket icon"
              width={25}
              height={25}
            />
          </Link>

          {/* Notifications */}
          <Link
            className="flex justify-center items-center"
            href={"/notification"}
          >
            <Image
              src={"/notification.png"}
              width={25}
              height={25}
              alt="notification icon"
            />
          </Link>

          {/* User profile */}
          <Link className="flex justify-center items-center"
            href={"/profile"}
          >
            <Image
              src={"/user.png"}
              width={25}
              height={25}
              alt="user profile"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
