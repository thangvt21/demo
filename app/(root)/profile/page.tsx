import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getProductsByUser } from '@/lib/actions/product.action'
import { getOrdersByUser } from '@/lib/actions/order.action'
import { IOrder } from '@/lib/database/models/order.model'
import { SearchParamProps } from '@/types'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const productsPage = Number(searchParams?.productsPage) || 1;

  const orders = await getOrdersByUser({ userId, page: ordersPage})

  const orderedProducts = orders?.data.map((order: IOrder) => order.product) || [];
  const organizedProducts = await getProductsByUser({ userId, page: productsPage })

  return (
    <>
      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className='h3-bold text-center sm:text-left'>My Products</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/#products">
              Explore More products
            </Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection 
          data={orderedProducts}
          emptyTitle="No product purchased yet"
          emptyStateSubtext=""
          collectionType="My_Products"
          limit={3}
          page={ordersPage}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
        />
      </section>

      {/* products Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className='h3-bold text-center sm:text-left'>Other products</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/products/create">
              Create New product
            </Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection 
          data={organizedProducts?.data}
          emptyTitle="No products have been created yet"
          emptyStateSubtext="Go create some now"
          collectionType="Product_Organized"
          limit={3}
          page={productsPage}
          urlParamName="productsPage"
          totalPages={organizedProducts?.totalPages}
        />
      </section>
    </>
  )
}

export default ProfilePage