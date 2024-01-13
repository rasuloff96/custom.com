"use client"

import { ProductType } from "@/interfaces"
import Link from "next/link";
import { FC, useEffect, useState } from "react"
import CustomImage from "./image";
import { useParams } from "next/navigation";
import { StarIcon as StarIconOutlined } from "@heroicons/react/24/outline";
import { StarIcon } from '@heroicons/react/24/solid';

const Product: FC<{ product: ProductType }> = ({ product }) => {

    return (
        <Link className="w-56" href={`/product/${product.id}`}>
            <div className="flex h-96 flex-col group transition-transform ease-out duration-200 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="relative flex mb-1 justify-center w-52 h-52 items-center border rounded-lg flex-1 dark:border-slate-700">
                    <div className="w-28 h-52 relative flex justify-center items-center ">
                        <CustomImage product={product} fill />
                    </div>
                </div>
                <div className="flex flex-col py-1 px-1">
                    <h1 className="text-sm mb-2 font-medium truncate dark:text-gray-200">{product.title}</h1>
                    <div className="flex items-center gap-1 mb-4">
                        <div className="text-xs flex w-16">
                            {Array.from(
                                {
                                    length: Math.floor(product.rating.rate),
                                },
                                (_, i) => (
                                    <StarIcon
                                        key={i}
                                        className='h-4 w-4 text-yellow-500'
                                    />
                                )
                            )}
                            {Array.from(
                                {
                                    length:
                                        5 - Math.floor(product.rating.rate),
                                },
                                (_, i) => (
                                    <StarIconOutlined
                                        key={i}
                                        className='h-4 w-4 text-yellow-500'
                                    />
                                )
                            )}
                        </div>
                        <p className="text-xs dark:text-gray-400">({product.rating.count} people rated)</p>
                    </div>
                    <p className="text-xs mb-2 dark:text-gray-200">{product.category}</p>
                    <div className="flex gap-2 items-center justify-start">
                        <p className="text-base dark:text-gray-500">$1200</p>
                        <p className="text-2xl font-semibold dark:text-gray-100">${product.price}</p>
                    </div>
                    <p className="text-xs font-medium dark:text-gray-400">7 colors</p>
                </div>
            </div>
        </Link >
    )
}

export default Product
