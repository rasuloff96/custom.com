import Link from "next/link"

const CatalogPage = () => {
    return (
        <section className="flex w-full items-center justify-between  py-2 px-3 text-gray-900 text-sm font-semibold">
            <Link href={"/deals"} className=" flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center items-center transition-all w-16 h-16 bg-blue-100 rounded-md hover:bg-blue-400 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-blue-300 dark:hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </div>
                <p className="text-gray-900 transition-all hover:underline dark:text-blue-300">Deals</p>
            </Link>
            <Link href={"/grocery"} className=" flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center items-center transition-all w-16 h-16 bg-blue-100 rounded-md hover:bg-blue-400 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-blue-300 dark:hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </div>
                <p className="text-gray-900 transition-all hover:underline dark:text-blue-300">Grocery</p>
            </Link>
            <Link href={"/fashion"} className=" flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center items-center transition-all w-16 h-16 bg-blue-100 rounded-md hover:bg-blue-400 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-blue-300 dark:hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                </div>
                <p className="text-gray-900 transition-all hover:underline dark:text-blue-300">Fashion</p>
            </Link>
            <Link href={"/mobile"} className=" flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center items-center transition-all w-16 h-16 bg-blue-100 rounded-md hover:bg-blue-400 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-blue-300 dark:hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                </div>
                <p className="text-gray-900 transition-all hover:underline dark:text-blue-300">Mobile</p>
            </Link>
            <Link href={"/electronics"} className=" flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center items-center transition-all w-16 h-16 bg-blue-100 rounded-md hover:bg-blue-400 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-blue-300 dark:hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                </div>
                <p className="text-gray-900 transition-all hover:underline dark:text-blue-300">Electronics</p>
            </Link>
            <Link href={"/products"} className=" flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center items-center transition-all w-16 h-16 bg-blue-100 rounded-md hover:bg-blue-400 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-blue-300 dark:hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
                <p className="text-gray-900 transition-all hover:underline dark:text-blue-300">Home</p>
            </Link>
            <Link href={"/books"} className=" flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center items-center transition-all w-16 h-16 bg-blue-100 rounded-md hover:bg-blue-400 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-blue-300 dark:hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                </div>
                <p className="text-gray-900 transition-all hover:underline dark:text-blue-300">Books</p>
            </Link>
            <Link href={"/gifts"} className=" flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center items-center transition-all w-16 h-16 bg-blue-100 rounded-md hover:bg-blue-400 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-blue-300 dark:hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                </div>
                <p className="text-gray-900 transition-all hover:underline dark:text-blue-300">Gifts</p>
            </Link>
            <Link href={"/tools"} className=" flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center items-center transition-all w-16 h-16 bg-blue-100 rounded-md hover:bg-blue-400 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-blue-300 dark:hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                    </svg>
                </div>
                <p className="text-gray-900 transition-all hover:underline dark:text-blue-300">Tools</p>
            </Link>
            <Link href={"/travel"} className=" flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center items-center transition-all w-16 h-16 bg-blue-100 rounded-md hover:bg-blue-400 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-blue-300 dark:hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </div>
                <p className="text-gray-900 transition-all hover:underline dark:text-blue-300">Travel</p>
            </Link>
            <Link href={"/households"} className=" flex flex-col justify-center items-center gap-1">
                <div className="flex justify-center items-center transition-all w-16 h-16 bg-blue-100 rounded-md hover:bg-blue-400 dark:bg-gray-800 dark:text-blue-200 dark:hover:bg-blue-300 dark:hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>
                </div>
                <p className="text-gray-900 transition-all hover:underline dark:text-blue-300">Households</p>
            </Link>
        </section>
    )
}

export default CatalogPage