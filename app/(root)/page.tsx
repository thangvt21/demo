import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-36 2xl:gap-0'>
          <div className='flex flex-col justify-center gap-8'>
            <h1 className='h2-bold text-valentine-500'>
              #FlashPODValentines2024
            </h1>
            <p className='p-regular-20 md:p-regulare-24 text-black'>
              Maximize Your Profits This Valentine's Day 2024:
              <br/>
              Discover the Magic of Unique, Trendsetting Products Exclusively from FlashPOD!</p>
            <div className='flex flex-start justify-start gap-2 items-center'>
              <Button size="lg" asChild className='bg-valentine-500 w-full sm:w-fit'>
                <Link href="/products">
                  More Details
                </Link>
              </Button>
              <Button size="lg" asChild className='hover:bg-white hover:text-valentine-500 hover:border w-full sm:w-fit'>
                <Link href="/sign-up">
                  Join us
                </Link>
              </Button>
            </div> 
          </div>
          <Image src="/assets/images/anh-web-1.png" alt="hero" width={1200} height={1200} className='max-h-[100vh] object-contain object-center 2xl:max-h-[70vh]'/>
        </div>
      </section>
      <section id="products" className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
        <div className='flex flex-col gap-8 items-center justify-center'>
          <h2 className='h3-bold'>
            FlashPOD Print on Demand Fulfillment Service
          </h2>
          <p>We’re the experts in print-on-demand solutions, trusted to deliver by merchants worldwide!</p>
        </div>
        <div className='flex w-full flex-col gap-5 md:flex-row'>
          Search 
          Category
          Filter
        </div>
      </section>
    </>
  )
}
