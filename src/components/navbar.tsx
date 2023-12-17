"use client"

import Image from "next/image";
import Link from "next/link";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";


const Navbar = () => {


  return (
    <header className=" flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white ">
      <Link href={"/"}>
        <Image
          src={"/custom-logo.png"}
          alt="logo here"
          width={150}
          height={40}
        />
      </Link>


      {/* <TEDropdown className="flex justify-center">
        <TERipple rippleColor="light">
          <TEDropdownToggle className="flex items-center whitespace-nowrap rounded bg-sky-200 px-5 pb-3 pt-3 text-sm font-medium  uppercase leading-normal text-sky-800 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Katalog
            <span className="ml-2 [&>svg]:w-5 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </TEDropdownToggle>
        </TERipple>

        <TEDropdownMenu className="mt-3">
          <TEDropdownItem>
            <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
              Maishiy Texnika
            </a>
          </TEDropdownItem>
          <TEDropdownItem>
            <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
              Ro`zg`or tovarlari
            </a>
          </TEDropdownItem>
          <TEDropdownItem>
            <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
              Kopmyuter jihozlari
            </a>
          </TEDropdownItem>
        </TEDropdownMenu>
      </TEDropdown> */}



      <form className="flex w-96">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative w-full" >
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full h-11 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Istalgan mahsulotni qidiring ..." required />
          {/* Submit Button */}
          {/* <button type="submit" className="text-white h-9 absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
        </div>
      </form>


      <div className="flex items-center space-x-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <Link href={'/'} className="mr-5 hover:text-gray-900 cursor-pointer">Home page</Link>
          <Link href={'/products'} className="mr-5 hover:text-gray-900 cursor-pointer">All products</Link>
          <Link href={'/contacts'} className="mr-5 hover:text-gray-900 cursor-pointer">Contacts</Link> */}

          {/* saqlanganlar */}
          <Link href={"/wishes"} className="flex justify-center items-center mr-5">
            <Image src={"/like.png"}
              width={25}
              height={25}
              alt="saqlangan mahsulotlar"
            />
            <p className="text-base ml-2">Saqlanganlar</p>
          </Link>
          {/* savat */}
          <Link href={"/shopping-cart"} className="flex justify-center items-center">
            <Image src={"/shopping-cart.png"}
              alt="basket icon"
              width={25}
              height={25}
            />
            <p className="text-base ml-2">Savat</p>
          </Link>
          <Link href={"/log-in"} className="ml-2 mr-1">
            <button className='button flex justify-center items-center w-33 h-10 ml-2 text-sm bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black'>
              Log in
            </button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="button flex justify-center items-center w-33 h-10 ml-2 text-sm bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
              Sign up
            </button>
          </Link>

          {/* User Profile Here */}
          {/* <Link href={"/client-profile"}>
          <button className="flex justify-center items-center rounded-full border-sky-500">
            Profile
          </button>
        </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
