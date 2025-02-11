import { twMerge } from 'tailwind-merge'

interface Props{
    children: React.ReactNode;
    className?: string;
}

const Container = ({children,className}:Props) => {
  return (
    <div className={twMerge("mx-w-screen-xl mx-auto px-12 ",className) }>{children}</div>
  )
}

export default Container