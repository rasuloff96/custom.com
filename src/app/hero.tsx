import React from 'react'
import CustomImage from "@/components/image";
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (

        // <section className="w-full bg-white dark:bg-gray-900 select-none">
        //     <div className="grid w-full max-w-screen-xl mt-14 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        //         <div className="mr-auto place-self-center lg:col-span-7">
        //             <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white select-text">Quality and Reliable!</h1>
        //             <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 select-text">
        //                 Everything in Custom Uzbekistan is Halal and High Quality. In addition, 1 year technical service is free of charge.
        //             </p>
        //             <Link href={"/products"} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
        //                 Buy now
        //                 <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        //             </Link>
        //             <Link href={"/contacts"} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        //                 Contact us
        //             </Link>
        //         </div>
        //         <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        //             <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        //         </div>
        //     </div>
        // </section>

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero