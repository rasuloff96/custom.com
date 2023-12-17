import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  // test change
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



      <form className="flex w-96">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative w-full" >
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full h-11 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
            <button type="submit" className="text-white h-9 absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>


      <div className="flex items-center space-x-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} className="mr-5 hover:text-gray-900 cursor-pointer">Home page</Link>
          <Link href={'/products'} className="mr-5 hover:text-gray-900 cursor-pointer">All products</Link>
          <Link href={'/contacts'} className="mr-5 hover:text-gray-900 cursor-pointer">Contacts</Link>
        </nav>
        <Link href={"/shopping-cart"}>
          {/* <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black "> */}
          <Image src={"/shopping-cart.png"}
            alt="basket icon"
            width={25}
            height={25}
          />

          {/* </button> */}
        </Link>
        <Link href={"/client-profile"}>
          <button className="flex justify-center items-center rounded-full border-sky-500">
            Profile
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
