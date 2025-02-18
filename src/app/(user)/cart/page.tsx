import Container from '@/components/Container'
import CartContainer from '@/components/CartContainer'
import { auth } from '@/auth'

const CartPage = async() => {
const session = await auth();

  return (
    <Container className='py-10'>
        <CartContainer session={session}/>
    </Container>
  )
}

export default CartPage