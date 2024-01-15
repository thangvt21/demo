import CheckoutButton from '@/components/shared/CheckoutButton';
import Collection from '@/components/shared/Collection';
import { getProductById, getRelatedProductsByCategory } from '@/lib/actions/product.action'
import { SearchParamProps } from '@/types'
import Image from 'next/image';
import React from 'react'

const ProductDetails = async ({params: { id }, searchParams }: SearchParamProps) => {
    const product = await getProductById(id);

    const relatedProducts = await getRelatedProductsByCategory({
        categoryId: product.category._id,
        productId: product._id,
        page: searchParams.page as string,
    })
  return (
    <>
        <section className='flex justify-center bg-primary-50 bg-dotted-pattern bg-contain'>
            <div className='grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl'>
                <Image src={product.frontUrl} alt="hero" width={400} height={400} className='h-full min-h-[300px] object-cover object-center'/>
                <div className='flex w-full flex-col gap-8 p-5 md:p-10'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='h2-bold'>{product.name}</h2>
                        <p className='p-medium-18 ml-2 mt-2 md:mt-0'>{product.category.name}</p>
                        <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                            <div className='flex gap-3'>
                                <p className='p-bold-20'>
                                    From USD {product.price}
                                </p>                            
                            </div>
                        </div>
                    </div>
                    {/* CHECK_OUT BUTTON */}
                    <CheckoutButton product={product}/>

                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-2 md:gap-3'>
                            ...
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*SAME BRAND */}
        <section className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
            <h2 className='h2-bold'>Related Products</h2>
            <Collection 
                data={relatedProducts?.data}
                emptyTitle = "No Products Found"
                emptyStateSubtext = "Come back later"
                collectionType = "All_products"
                limit={6}
                page={1}
                totalPages={2}
            />
        </section>
    </>
  )
}

export default ProductDetails