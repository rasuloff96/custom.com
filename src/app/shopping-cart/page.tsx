'use client';

import Footers from '@/components/footers';
import CustomImage from '@/components/image';
import Product from '@/components/product';
import { ProductType } from '@/interfaces';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ShoppingCart = () => {
  const [total, setTotal] = useState<number>(0)
  const [products, setProducts] = useState<ProductType[]>(
    JSON.parse(localStorage.getItem('carts') as string) || []
  )

  const removeProduct = (id: number) => {
    const updateCart = products.filter(product => product.id != id)
    localStorage.setItem("carts", JSON.stringify(updateCart))
    setProducts(updateCart)
  }

  const handleIncrement = (id: number) => {
    const updatedCart = products.map(product => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }

      return product;
    });

    localStorage.setItem('carts', JSON.stringify(updatedCart));
    setProducts(updatedCart);
  };

  const handleDecrement = (id: number) => {
    const existProduct = products.find(product => product.id === id);

    if (existProduct?.quantity === 1) {
      removeProduct(existProduct.id);

    } else {

      const updatedCart = products.map(product => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }

        return product;
      });

      localStorage.setItem('carts', JSON.stringify(updatedCart));
      setProducts(updatedCart);
    }
  }

  useEffect(() => {
    const total = products.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    setTotal(total)
  }, [products])

  return (
    <>
      {products.length ? (
        <div className='h-screen bg-gray-100 pt-20'>
          <h1 className='mb-10 text-center text-2xl font-bold'>
            Mahsulotlaringiz
          </h1>
          <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
            <div className='rounded-lg md:w-2/3'>
              {products.map(product => (
                <div
                  key={product.id}
                  className='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'
                >
                  <div className='relative w-52'>
                    <CustomImage product={product} fill />
                  </div>
                  <div className='sm:ml-4 sm:flex sm:w-full gap-x-4 sm:justify-between'>
                    <div className='mt-5 sm:mt-0'>
                      <h2 className='text-lg font-bold text-gray-900 line-clamp-1'>
                        {product.title}
                      </h2>
                      <p className='mt-1 text-xs text-gray-700 line-clamp-2'>
                        {product.description}
                      </p>
                      <div className='flex items-center text-sm my-4'>
                        <p>{product?.rating.rate}</p>
                        {product?.rating.rate && (
                          <div className='flex items-center ml-2 mr-6'>
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
                                <StarIconOutline
                                  key={i}
                                  className='h-4 w-4 text-yellow-500'
                                />
                              )
                            )}
                          </div>
                        )}
                        <p className='text-blue-600 hover:underline cursor-pointer text-xs'>
                          See all {product?.rating.count} reviews
                        </p>
                      </div>
                    </div>
                    <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                      <div className='flex items-center border-gray-100'>
                        <span className='cursor-pointer select-none rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50'
                          onClick={() => handleDecrement(product.id)}
                        >
                          {' '}
                          -{' '}
                        </span>
                        <input
                          className='h-8 w-8 border bg-white text-center text-xs outline-none'
                          type='number'
                          value={product.quantity}
                          min='1'
                        />
                        <span className='cursor-pointer select-none rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'
                          onClick={() => handleIncrement(product.id)}
                        >
                          {' '}
                          +{' '}
                        </span>
                      </div>
                      <div className='flex items-center space-x-4'>
                        <p className='text-sm'>
                          {(product.price * product.quantity).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'usd',
                          })}
                        </p>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'
                          onClick={() => removeProduct(product.id)}
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
              <div className='mb-2 flex justify-between'>
                <p className='text-gray-700'>Subtotal</p>
                <p className='text-gray-700'>
                  {
                    total.toLocaleString("en-US", { currency: "USD", style: "currency" })
                  }
                </p>
              </div>
              <div className='flex justify-between'>
                <p className='text-gray-700'>Shipping</p>
                <p className='text-gray-700'>
                  {
                    (10).toLocaleString("en-US", { currency: "USD", style: "currency" })
                  }
                </p>
              </div>
              <hr className='my-4' />
              <div className='flex justify-between'>
                <p className='text-lg font-bold'>Total</p>
                <div className=''>
                  <p className='mb-1 text-lg font-bold'>
                    {
                      (total + 10).toLocaleString("en-US", { currency: "USD", style: "currency" })
                    }
                  </p>
                  <p className='text-sm text-gray-700'>including VAT</p>
                </div>
              </div>
              <button className='mt-6 w-full rounded-md bg-blue-500 py-4 font-medium  text-blue-50 hover:bg-blue-600'>
                Check out
              </button>
            </div>
          </div>
          <Footers />
        </div>
      ) : (
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
          <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
            <div className="relative">
              <div className="absolute">
                <div className="">
                  <h1 className="my-2 text-gray-800 font-bold text-2xl">
                    There are currently no products in your cart
                  </h1>
                  <p className="my-2 text-gray-800">Start with the collections on the home page or find the product you need by searching</p>
                  <Link href={"/products"}>
                    <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button>
                  </Link>
                </div>
              </div>
              {/* <div>
                <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
              </div> */}
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;