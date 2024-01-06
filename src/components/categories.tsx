import Link from "next/link"

const Categories = () => {
    return (
        <section className="flex w-full h-10 px-4 flex-wrap md:px-12 py-2 text-gray-800 bg-gray-200 font-medium transition-all top-14 left-0 z-50 fixed justify-between items-center text-xs dark:bg-gray-800 dark:text-gray-400">
            <div className="flex justify-center items-center transition-all hover:text-black hover:font-semibold dark:hover:text-white dark:hover:font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <button>Category</button>
            </div>
            <div className="w-auto flex">
                <ul className="flex justify-center items-center gap-7">
                    <Link href={"/"} className="transition-all hover:text-black hover:font-semibold dark:hover:text-white dark:hover:font-medium">
                        Home
                    </Link>
                    <Link href={"/favoriteStore"} className="transition-all hover:text-black hover:font-semibold dark:hover:text-white dark:hover:font-medium">
                        My Favorite Stores
                    </Link>
                    <Link href={"/wishes"} className="transition-all hover:text-black hover:font-semibold dark:hover:text-white dark:hover:font-medium">
                        Wishlist
                    </Link>
                    <Link href={"/products"} className="transition-all hover:text-black hover:font-semibold dark:hover:text-white dark:hover:font-medium">
                        Products
                    </Link>
                    <Link href={"/shippingInfo"} className="transition-all hover:text-black hover:font-semibold dark:hover:text-white dark:hover:font-medium">
                        Shipping Info
                    </Link>
                    <Link href={"/trackOrder"} className="transition-all hover:text-black hover:font-semibold dark:hover:text-white dark:hover:font-medium">
                        Track Order
                    </Link>
                    <Link href={"/checkout"} className="transition-all hover:text-black hover:font-semibold dark:hover:text-white dark:hover:font-medium">
                        Checkout
                    </Link>
                </ul>
            </div>
        </section>
    )
}

export default Categories