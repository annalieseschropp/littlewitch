const products = [
    {
      id: 1,
      name: 'Test Product 1',
      href: '#',
      price: '$48',
      imageSrc: '../../Assets/Images/test_d20.JPG',
      imageAlt: '',
    },
    {
      id: 2,
      name: 'Test Product 2',
      href: '#',
      price: '$35',
      imageSrc: '../../Assets/Images/test_d20.JPG',
      imageAlt: '',
    },
    {
      id: 3,
      name: 'Test Product 3',
      href: '#',
      price: '$135',
      imageSrc: '../../Assets/Images/test_d20.JPG',
      imageAlt: '',
    },
    {
      id: 4,
      name: 'Test Product 4',
      href: '#',
      price: '$20',
      imageSrc: '../../Assets/Images/test_d20.JPG',
      imageAlt: '',
    },
  ]

const Products = () => {

    return (
      <div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-dark-grey xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-white">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-white">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
      </div>
    );
  }
    
  export default Products;