import { twMerge } from "tailwind-merge"

interface props{
    amount: number;
    className?: string
}

const FormatedPrice = ({amount, className}:props) => {
    const priceFormat = new Number(amount).toLocaleString('en-US', {
         style: 'currency', 
         currency: 'USD',
        minimumFractionDigits: 2,});
  return (
    <span className={twMerge("text-base font-semibold", className)}>{priceFormat}</span>
  )
}

export default FormatedPrice