"use client"

import { IProduct } from '@/lib/database/models/product.model'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Checkout from './Checkout'

const CheckoutButton = ({ product }: { product: IProduct }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
//   const hasproductFinished = new Date(product.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {/* {hasproductFinished ? (
        <p className="p-2 text-red-400"></p>
      ): ( */}
        <>
          <SignedOut>
            <Button asChild className="button rounded-full" size="lg">
              <Link href="/sign-in">
                Get Tickets
              </Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <Checkout product={product} userId={userId} />
          </SignedIn>
        </>
      {/* )} */}
    </div>
  )
}

export default CheckoutButton