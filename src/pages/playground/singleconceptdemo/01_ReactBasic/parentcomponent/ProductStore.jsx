import React from 'react'
import { products } from '../../../../../data/productData'
import ProductRenderingCard from '../childcomponent/ProductRenderingCard'

function buyNow(selectedProduct){
  console.log(selectedProduct);
}

function ProductStore() {
  return (
    <div>
        <ProductRenderingCard products={products}/>
    </div>
  )
}
 
export default ProductStore