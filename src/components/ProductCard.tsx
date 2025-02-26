import React from 'react'
import { ProductData } from '../../type'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { MdStar } from 'react-icons/md'
import FormatedPrice from './FormatedPrice'
import AddtoCartButton from './AddtoCartButton'

const ProductCard = ({item }: {item: ProductData}) => {
  return (
    <div className='bordder border-px border-lightText/40 rounded-md relative group
    overflow-hidden'>
      <div className='overflow-hidden'>
      <Link href={`/product/${item?.slug?.current}`}>
        <Image src={urlFor(item?.image).url()} 
          alt={item?.title} 
          width={500}
          loading='lazy'
          height={500}

          className='w-60 h-72 object-cover group-hover:scale-105 hoverEffect' />
      </Link>
      </div>
      <div className='px-6 flex flex-col items-center gap-2'>
        <div className='text-base text-lightText flex item-center'>
          {Array?.from({length: 5})?.map((_, index) => {
            const filled = index + 1 <= Math.floor(item?.ratings);
            const halfFilled = 
              index + 1 > Math.floor(item?.ratings) &&
              index < Math.ceil(item?.ratings)
            return <MdStar className={`${filled ? "text-[#fa8900]" : halfFilled? 
            "text-yellow-300" : "text-lightText"}`} key={index} />;
          })}

        </div>
        <p className='uppercase text-xl font-medium text-lightOrange'>
          {item?.brand}
        </p>
        <h2 className='text-base font-semibold text-accent line-clamp-1'>{item.title}</h2>
        <p className='text-center text-sm line-clamp-2'>{item.description}</p>
        <div className='flex item-center gap-3 mb-5'>
          <FormatedPrice amount={item?.rowprice} className='text-lightText 
          line-through'/>
          <FormatedPrice amount={item?.price} className='text-darkOrange font-bold'/>
        </div>
      </div>
      <AddtoCartButton item={item}/>
    </div>
  )
}

export default ProductCard