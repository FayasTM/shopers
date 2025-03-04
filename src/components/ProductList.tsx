import React from 'react'
import { ProductData } from '../../type'
import { getProductsData } from '@/app/lib/getData'
import ProductCard from './ProductCard';

const ProductList = async () => {
    const products:ProductData[] = await getProductsData();

  return (

    <div className='grid grid-cols-1 md-grid-cols lg:grid-cols-4 gap-5'>
      {products?.map((item) =>
       
            <ProductCard  key={item?._id} item={item}/>
       )}</div>
  )
}

export default ProductList