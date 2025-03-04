import { getBannersData } from '@/app/lib/getData'
import React from 'react'
import Container from './Container';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import Button from './Button';
import { BannerData } from '../../type';
import FormatedPrice from './FormatedPrice';



const Banner = async () => {
    const banners = await getBannersData()
    // console.log(banners);

    const singleBanner = banners[0];

  return (
    <Container className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:max-h-[600px]'>
        {/* Left half - single image  */}
        <div className='md:col-span-2 bg-bgLight relative flex items-end 
        justify-end rounded-lg overflow-hidden group'>
            <div className='h-full z-10 absolute left-10 top-0 flex flex-col
            justify-center isolate gap-5 md:gap-10'>
                <div className='flex flex-col gap-1 md:gap-3 '>
                    <button className=' bg-green-400 text-white rounded-full w-20 py-1 text-sm font-semibold hover:bg-green-600 hoverEffect'>
                        {singleBanner?.price ? `Sale: ${singleBanner?.price}` : "Sale"}
                    </button>
                    <p className='text-xl md:text-3xl font-semibold'>
                        {singleBanner?.title}
                    </p>
                    <h2 className='text-2xl md:text-6xl font-bold  '>{singleBanner?.subtitle}</h2>
                    <p className='text-xs md:text-sm text-black/60 font-medium max-w-44'>{singleBanner?.description}</p>
                </div>
                <Button className='w-36 px-0 py-2.5 text-sm'>Shop Now</Button>
            </div>
            <Image src={urlFor(singleBanner?.image).url()} alt={singleBanner?.title}
            width={600} height={500} priority
            className='object-contain h-72 md:h-full max-h-[500px] self-end group hover:scale-105 hoverEffect' />
        </div>
        {/* Right half - two images */}
        <div className='flex flex-col space-y-5 md:space-y-10 h-auto md:max-h-[600px] bg-bgLight'>
            {banners.slice(1,3).map((item: BannerData)=>(
                <div key={item?._id} className='h-full md:h-1/2 bg-bglight rounded-lg overflow-hiden flex 
                justify-center p-5 group'
                >
                    <div className='w-1/2 flex flex-col  '>
                     <div>
                        <p className='text-2xl font-semibold'>{item?.title}</p>
                        <p className='text-3xl font-bold'> {item?.subtitle}</p>
                     </div>
                     <p className='mt-3 font-medium text-black/60'>From
                        <FormatedPrice className="text-lightOrange font-bold"amount={ item?.price }/>
                    </p>
                    <Link href={"/shop"} className='mt-5 font-bold underline underline-offset-2 
                    decoration-lightOrange decoration-[1px] hover:text-darkOrange hoverEffect'>Shop Now</Link>
                    </div>
                    <Image  src={urlFor(item?.image).url()} alt={item.title} 
                    width={500}
                    priority
                    height={500} 
                    className='object-contain h-72 md:h-60 w-1/2 group-hover:scale-105
                    hoverEffect '/>
                </div>
            ))}
        </div>
    </Container>
  )
}

export default Banner