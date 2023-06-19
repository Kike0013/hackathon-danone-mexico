"use client"

import { useState, useEffect } from "react";
import Product from "./Product";

const ProductList = () => {

  const [allProducts, setAllProducts] = useState()

  const getProducts = async () => {
    const result = await fetch("https://graphql.contentful.com/content/v1/spaces/s2i21vbm1e84/environments/master",
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer vksyRE6d2pn3nKtQFKqM05Zkywn68_kgCPVeq9k7w14`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          query {
            productCollection {
              items{
                name
                ingredients
                kcal
                imageUrl
              }
            }
          }
          `
        })
      })

    if (!result.ok) {
      console.error(result);
      return {};
    }

    const { data } = await result.json();
    const products = data.productCollection.items;

    return products
  }

  useEffect(() => {

    getProducts()
      .then(res => setAllProducts(res))
      .catch(err => console.log(err))


  }, [])

  return (
    <div className="flex justify-center">
      <ul className="flex gap-4 p-5 flex-wrap justify-start w-full max-w-7xl">
        {allProducts?.map((el, i) => {
          return <li key={i}>
            <Product
              name={el.name}
              kcal={el.kcal}
              imageUrl={el.imageUrl}
            />
          </li>
        })}
      </ul>
    </div>
  )
}

export default ProductList