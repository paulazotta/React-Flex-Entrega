import bolsa from './assets/bolsa.svg'

function CartWidget() {
  return (
    <div>
      <img src={bolsa} alt="bolsa-compras"  className='cartWidget' />
      0
    </div>
  )
}

export default CartWidget
