import React from 'react'
import { twMerge } from 'tailwind-merge'
interface props{
    children: React.ReactNode,
    className?: string
    diasbled?: boolean
    onClick?: any;
}

const Button = ({children, className,diasbled, onClick} : props) => {
  return (
    <button 
    onClick={onClick}
    disabled = {diasbled}
    className={twMerge("bg-lightOrange text-white text-base hover:text-darkOrange hoverEffect md:px-8 md:py-3 rounded-full font-bold",className)}>{children}</button>
  )
}

export default Button