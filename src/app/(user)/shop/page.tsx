import React from 'react'
import Container from '@/components/Container'
import ProductList from '@/components/ProductList'

const page = () => {
  return (
    <Container className='py-5' >
        <h2 className='text-2xl font-semibold mb5'>All Available product list</h2>
        <ProductList />
    </Container>
  )
}

export default page