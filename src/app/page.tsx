import Cta from '@/components/cta';
import Footers from '@/components/footers';
import Hero from '@/app/hero';
import Product from '@/components/product';
import Statistic from '@/components/statistic';
import { ProductType } from '@/interfaces';
import CatalogPage from '@/components/catalog';
import Link from "next/link";

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: ProductType[] = await res.json();


  return (
    <main className='min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-16'>
      <CatalogPage />
      <Hero />
      <section className='flex flex-col space-y-12 '>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            <p className='text-gray-800 text-2xl font-bold dark:text-white'>
              Top Deals today
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
          </div>
          <div className='flex items-center justify-center transition-all text-blue-600 hover:underline dark:text-blue-300'>
            <Link href={"/deals"}>
              <p className='font-medium text-sm'>Explore more</p>
            </Link>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

          </div>
        </div>

        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Cta />
      <Statistic />
      <Footers />
    </main>
  )
}
