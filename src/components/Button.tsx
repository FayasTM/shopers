import React from 'react'
import { twMerge } from 'tailwind-merge'
interface props{
    children: React.ReactNode,
    className?: string
}

const Button = ({children, className} : props) => {
  return (
    <button className={twMerge("bg-lightOrange text-white text-base hover:text-darkOrange hoverEffect md:px-8 md:py-3 rounded-full font-bold",className)}>{children}</button>
  )
}

export default Button