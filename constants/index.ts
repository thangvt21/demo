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
    label: 'Blog',
    route: '/blogs',
  },
  {
    label: 'Helpdesk',
    route: '/helpdesk',
  },
]

export const productDefaultValues = {
  name: '',
  material: '',
  variant: '',
  frontUrl: '',
  createdAt: new Date(),
  updatedAt: new Date(),
  categoryId: '',
  price: '',
  url: '',
}