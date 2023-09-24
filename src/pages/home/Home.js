import React from 'react'
import NavBar from '../../features/NavBar/NavBar'
import ProductList from '../../features/Product-list/ProductList'



export default function Home() {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
    </div>
  )
}
