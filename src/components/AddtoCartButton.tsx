import { twMerge } from "tailwind-merge";
import { ProductData } from "../../type"

interface  Props{
    item: ProductData;
    className?: string;
}

const AddtoCartButton = ({item, className} : Props) => {
  return (
    <button className={twMerge("bg-black text-white w-full py-2 border border-px border-accent hover:bg-darkOrange hover:border-darkOrange hoverEffect font-semibold tracking-wide flex item-center justify-center gap-1" 
        )}
    >
        Add to cart</button>
  )
}

export default AddtoCartButton