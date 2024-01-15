export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Products',
    route: '/products/create',
  },
  {
    label: 'Services',
    route: '/services',
  },
  {
    label: 'Pricing',
    route: '/pricing',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
]

export const productDefaultValues = {
  name: '',
  variantId: '',
  frontUrl: '',
  createdAt: new Date(),
  updatedAt: new Date(),
  categoryId: '',
  price: '',
}