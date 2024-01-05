"use client"

import { ProductType } from "@/interfaces"
import Link from "next/link";
import { FC, useEffect, useState } from "react"
import CustomImage from "./image";
import Image from "next/image"
import { useParams } from "next/navigation";

const Product: FC<{ product: ProductType }> = ({ product }) => {

    return (
        <div className="h-96 flex flex-col group border-2 hover:scale-105 transition-transform ease-out duration-200 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div className="relative max-h-80 flex-1">
                <Link href={`/product/${product.id}`} >
                    <CustomImage product={product} fill />
                </Link>
            </div>
            <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 mt-1">{product.category}</h2>
                <div className="font-semibold flex items-center justify-between mt-4 mb-1  ">
                    <Link href={`/product/${product.id}`}>
                        <p className="w-44 truncate transition-all  hover:text-blue-400">{product.title}</p>
                    </Link>
                    <p>${product.price}</p>
                </div>
                <p className="leading-relaxed mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center flex-wrap">
                    <div className="flex gap-1 w-1/3 justify-between items-center ">
                        <Image
                            // onClick={handleClick}
                            src={"/shopping-cart.png"}
                            width={25}
                            height={25}
                            alt="basket photo"
                        />
                        <Image
                            src={"/like.png"}
                            width={25}
                            height={25}
                            alt="wish photo"
                        />
                    </div>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        {product?.rating.count}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Product
