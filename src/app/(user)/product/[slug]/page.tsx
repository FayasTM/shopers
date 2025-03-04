import Container from '@/components/Container'
import React from 'react'
import { groq } from 'next-sanity'
import { ProductData } from '../../../../../type'
import { client } from '@/sanity/lib/client'
import { getBestSellerssData } from '@/app/lib/getData'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import ProductCard from '@/components/ProductCard'
import FormatedPrice from '@/components/FormatedPrice'
import { MdStar } from 'react-icons/md'
import AddtoCartButton from '@/components/AddtoCartButton'

interface Props {
    params: {
        slug: string
    }
}

const SingleProductPage = async ({ params }: Props) => {   
    const { slug } = await Promise.resolve(params);

    
    const query = groq`*[_type == "product" && slug.current == $slug][0] {
        ...
    }`; 

    const product: ProductData | null = await client.fetch(query, { slug });

    if (!product) {
        return (
            <Container>
                <div className="text-center py-10">
                    <h2 className="text-xl font-semibold">Product not found</h2>
                </div>
            </Container>
        );
    }

    const bestSellerData: ProductData[] = await getBestSellerssData();
    // console.log("Fetched product:", product);

    return (
        <Container className='my-10 bg-bgLight'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 h-full p-4">
                <div className='h-full xl:col-span-2'>
                    {product.image ? (
                        <Image 
                            src={urlFor(product.image).url()} 
                            alt={product.title || 'Product image'} 
                            width={500}
                            height={500}
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <p>No Image Available</p>
                    )}
                </div>
                <div className='w-full md:col-span-2 xl:col-span-3 xl:p-14 flex 
                flex-col justify-center gap-6'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-4xl font-semibold'>{product?.title}</h2>
                        <div className='flex items-center gap-4'>
                            <p>
                                <FormatedPrice amount={product?.rowprice}/> {/* Ensure correct field name */}
                            </p>
                            <FormatedPrice
                                amount={product?.price}
                                className='text-lg font-bold line-through'
                            />
                            <p className="text-sm">
                                You saved{" "}
                                <FormatedPrice 
                                    amount={(product?.rowprice || 0) - (product?.price || 0)}
                                    className='bg-lightGreen text-black px-2 rounded-md
                                    text-xs py-1' 
                                /> 
                                {" "} from this item
                            </p>
                        </div>
                        <div className='flex item-center gap-10'>
                            <div className='text-base text-lightText flex items-center'>
                                {Array.from({ length: 5 })?.map((_, index) => {
                                const filled = index + 1 <= Math.floor(product?.ratings || 0);
                                const halfFilled = index + 1 > Math.floor(product?.ratings || 0) && 
                                    index < Math.ceil(product?.ratings || 0);

                                return (
                                    <MdStar
                                        key={index}
                                        className={`${
                                            filled
                                            ? "text-[#fa8900]"
                                            : halfFilled
                                            ? "text-[#f7ca00]"
                                            : "text-lightText"
                                        }`}
                                    />
                                );
                                })}
                            </div>
                            <p className='text-sm font-semibold text-accent/60 
                             tracking-wide'>{`(5 customer reviews)`}</p>
                         </div>
                        <p className='text-sm tracking-wide text-gray-600 '>{product?.description}</p>
                        <p className='text-sm text-gray-500'>Be the first to leave a review</p>
                        <AddtoCartButton item={product} className='rounded-md  py-3 ' />
                        <p className='font-normal text-sm'>
                            <span className='font-medium text-base'>Category:</span> Spring
                            collection, Streetwear, Women Tags: featured SKU: N/A
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
               {bestSellerData?.map((item) => (
                   <ProductCard key={item?._id} item={item} />
               ))} 
            </div>
        </Container>
    );
}

export default SingleProductPage;
