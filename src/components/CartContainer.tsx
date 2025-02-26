'use client'
import React, { use } from 'react'
import { useSelector } from 'react-redux'
import { ProductData, StoreState } from '../../type'
import { CartItem } from './CartItem'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { resetCart } from '@/redux/shoppersSlice'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import FormatedPrice from './FormatedPrice'
import Button from './Button'

const CartContainer = ({session}: any) => {
    const {cart} = useSelector((state: StoreState) => state?.shoppers);
    const dispatch = useDispatch();
    const handleReserttCart = () => {
      const confirmed = window.confirm("Are you sure you want to reset your cart?")
      if(confirmed){
        dispatch(resetCart());
        toast.success('Cart reset successfully');
      }
    }
    console.log(cart);

    const handleCheckout = async ( ) => {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart
        }),
      });

      const result = await response.json();
      console.log(result);

    }
  return (
    <div>
  {cart?.length > 0 ? (
    <div className="pb-20">
      <div className="w-full h-20 bg-[#f5f5f5] text-accent hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold">
        <h2 className="col-span-2">Product</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Sub Total</h2>
      </div>
      <div className="mt-5">
        {cart?.map((item: ProductData) => (
          <CartItem key={item?._id} cart={cart} item={item} />
        ))}
      </div>
      <button
      onClick={handleReserttCart}
       className='py-2 px-10 bg-red-700 text-white font-semibold
      uppercase mb-4 hover:bg-red-600 hoverEffect rounded-md text-sm'>Reset</button>
      <div className='max-w-7xl flex justify-end'>
        <div className='w-96 flex-col gap-4'>
          <div>
          <h1 className='text-2xl font-semibold
          text-right'>
          Cart Totels
         </h1>
          <div className=''>
          <p className='flex items-center justify-between
          border-[1px] border-gray-400 border-b-0 py-1.5 px-4
          text-lg font-medium'>
            SubTotal <FormatedPrice amount={250}/>
          </p>
          <p className='flex items-center justify-between
          border-[1px] border-gray-400 border-b-0 py-1.5 px-4
          text-lg font-medium'>
            Shipping Charge <FormatedPrice amount={250}/>
          </p>
          <p className='flex items-center justify-between
          border-[1px] border-gray-400 py-1.5 px-4
          text-lg font-medium'>
            Totel <FormatedPrice amount={250}/>
          </p>
          </div>
        </div>
        </div>
        <Button 
        onClick={handleCheckout}
        diasbled ={!session?.user} 
          className='py-3 px-8 rounded-md disabled:bg-gray-300'>
           Proceed to Checkout
        </Button>
        {session?. user && <p className='text-center text-sm font-medium
        text-lightRed -mt-3'> Please sign in to make checkout</p>}
        
      </div>
    </div>
  ) : (

    <motion.div 
    initial={{ y:20, opacity:0 }} 
    animate={{ y:0, opacity:1 }} 
    transition={{ duration: 0.4 }}
    className='flex items-center justify-center flex-colpy-20 '>
      <div>
        <h1>Your Cart feels lonely</h1>
      </div>
      <p className='text-sm text-center px-10 -mt-2'>
        Your Shopping cart lives to serve. Give it purpose -
        fill it with 
        books, electronics, videos, ect, and make it happy.
      </p>
      <Link
      href={'/'}
      className='bg-lightOrange text-white
      hover:bg-darkOrange hoverEffect px-8 py-3 rounded-lg
      font-semibold'
      >
        Continue Shopping
      </Link>
    </motion.div>
  )}
</div>

  )
}

export default CartContainer