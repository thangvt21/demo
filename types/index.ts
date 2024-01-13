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
    event: {
        name: string
        material: string
        variant: string
        createdAt: Date
        updateAt: Date
        frontUrl: string
        backUrl: string
        productType: string
        price: string
        labelUrl: string
        categoryId: string
    }
    path: string
}

export type UpdateProductParams = {
    userId: string
    event: {
        _id: string
        name: string
        material: string
        variant: string
        createdAt: Date
        updateAt: Date
        frontUrl: string
        backUrl: string
        productType: string
        price: string
        labelUrl: string
        categoryId: string
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
    material: string
    variant: string
    createdAt: Date
    updateAt: Date
    frontUrl: string
    backUrl: string
    productType: string
    price: string
    labelUrl: string
    category: {
        _id: string
        name: string
    }
}

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
    categoryName: string
}

// ====== ORDER PARAMS
export type CheckoutOrderParams = {
    eventTitle: string
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
    eventId: string
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