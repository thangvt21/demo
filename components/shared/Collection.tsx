import { IProduct } from '@/lib/database/models/product.model'
import React from 'react'
import Card from './Card'

type CollectionProps = {
    data: IProduct[],
    emptyTitle: string,
    emptyStateSubtext: string,
    limit: number,
    page: number | string,
    totalPages?: number,
    urlParamName?: string,
    collectionType?: 'Product_Organized' | 'My_Product' | 'All_products'
}

const Collection = ({
    data,
    emptyTitle,
    emptyStateSubtext,
    page,
    totalPages,
    collectionType,
    urlParamName,
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className='flex flex-col items-center gap-10'>
          <ul className='grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10'>
            {data.map((product) => {
              const hasOrderLink = collectionType === 'Product_Organized';
              const hidePrice = collectionType === 'My_Product';
              return (
                <li key={product.id} className='flex justify-center'>
                  <Card product={product} hasOrderLink={hasOrderLink} hidePrice={hidePrice}/>
                </li>
              )
            })}
          </ul>
        </div>
      ): (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3>{emptyTitle}</h3>
          <p>{emptyStateSubtext}</p>
        </div>
      )}
    </>
  )
}

export default Collection