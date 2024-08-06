import { useAppContext } from '../Context/Context'
import bolsa from './assets/bolsa.svg'

function CartWidget() {
  const {carrito} = useAppContext();
  return (
    <div>
      <img src={bolsa} alt="bolsa-compras"  className='cartWidget' />
      <p>{carrito.length}</p>
    </div>
  )
}

export default CartWidget
