import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className='flex flex-col justify-center gap-8  text-valentine-500'>
            <h1 className='h1-bold'>
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
              <Button size="lg" asChild className='hover:bg-white hover:text-black hover:border w-full sm:w-fit'>
                <Link href="/sign-up">
                  Join us
                </Link>
              </Button>
            </div> 
          </div>
        </div>
      </section>
    </>
  )
}
