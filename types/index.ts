// ====== USER PARAMS
export type CreateUserParams = {
    clerkId: string
    firstName: string
    lastName: string
    username: string
    email: string
    photo: string
}

export type UpdateUserParams = {
    firstName: string
    lastName: string
    username: string
    photo: string
}

// ====== EVENT PARAMS
export type CreateProductParams = {
    userId: string
    product: {
        name: string
        variantId: string
        frontUrl: string
        createdAt: Date
        updatedAt: Date
        categoryId: string
        price: string
    }
    path: string
}

export type UpdateProductParams = {
    userId: string
    product: {
        _id: string
        name: string
        frontUrl: string
        variantId: string
        createdAt: Date
        updatedAt: Date
        categoryId: string
        price: string
    }
    path: string
}

export type DeleteProductParams = {
    productId: string
    path: string
}

export type GetAllProductsParams = {
    query: string
    category: string
    limit: number
    page: number
}

export type GetEventsByUserParams = {
    userId: string
    limit?: number
    page: number
}

export type GetRelatedProductsByCategoryParams = {
    categoryId: string
    productId: string
    limit?: number
    page: number | string
}

export type Product = {
    _id: string
    name: string
    price: string
    frontUrl: string
    variant: {
        _id: string
        name: string
    }
    createdAt: Date
    updatedAt: Date
    organizer: {
        _id: string
        firstName: string
        lastName: string
    }
    category: {
        _id: string
        name: string
    }
}

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
    categoryName: string
}

export type CreateVariantParams = {
    variantName: string
}

// ====== ORDER PARAMS
export type CheckoutOrderParams = {
    productName: string
    productId: string
    price: string
    isFree: boolean
    buyerId: string
}

export type CreateOrderParams = {
    stripeId: string
    productId: string
    buyerId: string
    totalAmount: string
    createdAt: Date
}

export type GetOrdersByProductParams = {
    productId: string
    searchString: string
}

export type GetOrdersByUserParams = {
    userId: string | null
    limit?: number
    page: string | number | null
}

// ====== URL QUERY PARAMS
export type UrlQueryParams = {
    params: string
    key: string
    value: string | null
}

export type RemoveUrlQueryParams = {
    params: string
    keysToRemove: string[]
}

export type SearchParamProps = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}