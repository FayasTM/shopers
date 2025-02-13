import React from 'react'
import { GoRocket } from "react-icons/go";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { PiChats } from "react-icons/pi";

const data = [
    {
    title: "Free delivery",
    description: 'When ordering above $500',
    icon: <GoRocket />,

    },

    {
        title: "90 Dayss Returns",
        description: 'If goods have problams',
        icon: <FaClockRotateLeft />,
    },

    {
        title: "Secure Payment",
        description: '100% Secure Payment',
        icon: <FaWallet />
    },

    {
        title: "24/7 Support",
        description: 'Dedicated Support',
        icon: <PiChats />
    },

];

const Facilities = () => {
  return (
    <div className='py-10 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5'>{data?.map((item) =>(
        <div key={item?.title} className='flex flex-col sm:flex-row items-center gap-3'>
            <span className='text-3xl text-lightOrange'>{item.icon}</span>
            <div className='text-center sm:text-left'>
                <h2 className='uppercase font-bold'>{item.title}</h2>
                <p className='text-sm text-lightText'>{item.description}</p>
                
            </div>
        </div>
    ))}</div>
  )
}

export default Facilities