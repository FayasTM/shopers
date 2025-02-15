'use client'
import { twMerge } from "tailwind-merge";
import { ProductData } from "../../type"
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppersSlice";
import toast from "react-hot-toast";
interface  Props{
    item: ProductData;
    className?: string;
}

const AddtoCartButton = ({item, className} : Props) => {
  const dispacth = useDispatch();
  const handleAddToCart = ( ) =>{
    dispacth(addToCart(item));
    toast.success(`${item?.title.substring(0,12)} added successfully`);
  }
  return (
    <button 
      onClick={handleAddToCart}
      className={twMerge("bg-black text-white w-full py-2 border border-px border-accent hover:bg-darkOrange hover:border-darkOrange hoverEffect font-semibold tracking-wide flex item-center justify-center gap-1" ,
      className
        )}
    >
        Add to cart</button>
  )
}

export default AddtoCartButton