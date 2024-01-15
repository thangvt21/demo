import { IProduct } from '@/lib/database/models/product.model'
import { auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmation } from './DeleteConfirmation'

type CardProps = {
    product: IProduct,
    hasOrderLink?: boolean,
    hidePrice?: boolean,
}


const Card = ( {product, hasOrderLink, hidePrice}: CardProps) => {
    const {sessionClaims} = auth();
    const userId = sessionClaims?.userId as string;

    const isProductCreator = userId === product.organizer._id;

  return (
    <div className='group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]'>
        <Link href={`/product/${product._id}`} style={{backgroundImage: `url(${product.frontUrl})`}} className='flex-center flex-grow bg-grey-50 bg-cover bg-center text-grey-500'/>
        {isProductCreator && !hidePrice && (
            <div className='absolute right-2 top-2 flex flex-col gap-4 rounded-xl shadow-sm p-3 bg-white transition-all'>
                <Link href={`/products/${product._id}/update`}>
                    <Image src="/assets/icons/edit.svg" alt='edit' width={20} height={20}/>
                </Link>
                <DeleteConfirmation productId={product._id}/>
            </div>
        )}
        <Link href={`/product/${product._id}`} className='flex min-h-[128px] flex-col gap-3 p-5 md:gap-4'>          
            {!hidePrice && 
            <>
                <div className='p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black'>{product.name}</div>
                <div className='flex gap-2'>
                    <span className='p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-600'>${product.price}</span>  
                    <p className='p-semi-bold-14 w-auto rounded-full bg-grey-50 px-4 py-1 text-grey-500'>{product.category.name}</p>
                </div>
            </>}
            <p className='p-medium-16 md:p-medium-18 text-grey-500'>{product.variant.name}</p>
            <div flex-between w-full>
                <p className='p-medium-14 md:p-medium-16 text-grey-500'>
                    {product.organizer.firstName}{product.organizer.lastName}
                </p>
                {hasOrderLink && (
                    <Link href={`/orders?productId=${product._id}`}>
                        <p className='text-primary-500'>Order Details</p>
                        <Image src="/assets/icons/arrow.svg" alt='search' width={10} height={10}/>
                    </Link>
                )}
            </div>
        </Link>
    </div>
  )
}

export default Card