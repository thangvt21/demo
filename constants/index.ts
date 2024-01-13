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
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }