import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getProductById, getProductsByUser } from '@/lib/actions/product.action'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const ProfilePage = async () => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

    const organizedProducts = await getProductsByUser({ userId, page: 1})

  return (
    <>
        <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
            <div className='wrapper flex items-center justify-center sm:justify-between'>
                <h3 className='h3-bold text-center sm:text-left'>My Products</h3>
                <Button asChild size="lg" className="button hidden sm:flex">
                    <Link href="/#products">
                        Explore More Products
                    </Link>
                </Button>
            </div>
        </section>
        {/* <section className='wrapper my-8'>
            <Collection 
                data={products?.data}
                emptyTitle = "No Product order purchased yet"
                emptyStateSubtext = "Come back later"
                collectionType = "My_Products"
                limit={6}
                page={1}
                urlParamName='ordersPage'
                totalPages={2}
            />
        </section> */}
        <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
            <div className='wrapper flex items-center justify-center sm:justify-between'>
                <h3 className='h3-bold text-center sm:text-left'>New Arrivals</h3>
                <Button asChild size="lg" className="button hidden sm:flex">
                    <Link href="/products/create">
                        Add new product
                    </Link>
                </Button>
            </div>
        </section>
        <section className='wrapper my-8'>
            <Collection 
                data={organizedProducts?.data}
                emptyTitle = "No Product order added yet"
                emptyStateSubtext = "Add some new product"
                collectionType = "Product_Organized"
                limit={6}
                page={1}
                urlParamName='ordersPage'
                totalPages={2}
            />
        </section>
    </>
    )
}

export default ProfilePage