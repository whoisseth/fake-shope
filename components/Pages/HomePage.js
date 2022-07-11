import ProductCart from './../ProductCart'
import { useState } from 'react'
import Layout from './../Layout'

function HomePage({ data }) {
  const [searchField, setSearchField] = useState('')
  const filterProducts = data.filter((product) =>
    searchField
      ? product.title.toLowerCase().includes(searchField.toLocaleLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(searchField.toLocaleLowerCase()) ||
        product.category.toLowerCase().includes(searchField.toLocaleLowerCase())
      : product,
  )

  return (
    <>
      <Layout search={(e) => setSearchField(e.target.value)} />
      <ProductsContainer>
        {filterProducts.map(({ title, price, id, image }, index) => (
          <ProductCart
            key={index}
            image={image}
            name={title}
            price={price}
            slug={id}
          />
        ))}
      </ProductsContainer>
    </>
  )
}

export default HomePage

function ProductsContainer({ children }) {
  return (
    <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-4 sm:gap-6 items-center justify-center my-4">
      {children}
    </div>
  )
}
