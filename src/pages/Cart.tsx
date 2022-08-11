import { Minus, Plus } from 'phosphor-react'
import { Header } from '../components/Header'
import { useApp } from '../contexts/AppContext'
import styles from './Cart.module.scss'

export function Cart() {
  const { cart, setCart } = useApp()
  const sumPrices = cart.reduce((a, b) => a + (b.price * b.quantity), 0);

  function handleIncrement(p) {
    setCart(cart.map((data) => {
      if (data.id === p.id) {
        return {
          ...data,
          quantity: data.quantity + 1
        }
      }
      return data
    }))
  }

  function handleDecrement(p) {
    if (p.quantity === 1) return setCart(cart.filter((v) => v.id !== p.id))

    setCart(cart.map((data) => {
      if (data.id === p.id) {
        return {
          ...data,
          quantity: data.quantity - 1
        }
      }
      return data
    }))
  }

  return (
    <>
      <Header />
      <div className={styles.cartContainer}>
        <h1>Checkout</h1>
        <div className={styles.payInfo}>
          <div className={styles.productInfo}>
            <div className={styles.detailsOfProduct}>
              <span>Nome</span>
              <span>Valor</span>
              <span>Quantidade</span>
            </div>
            <div className={styles.productInCartContainer}>
              {cart.map((p) =>
                <div className={styles.productInCart}>
                  <img src={p.productImgUrl} alt="Produto" />
                  <span>{p.title}</span>
                  <span className={styles.colorPrice}>{new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(p.price)}</span>
                  <div className={styles.quantityButtons}>
                    <button onClick={() => handleDecrement(p)}><Minus size={20} /></button>
                    <span className={styles.quantity}>{p.quantity}</span>
                    <button onClick={() => handleIncrement(p)}><Plus size={20} /></button>
                  </div>
                </div>)
              }
            </div>
          </div>

          <div className={styles.priceInfo}>
            <h2>Resumo</h2>
            <div className={styles.priceDetails}>
              <div>
                <span>Produtos</span>
                <span>{new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(sumPrices)}</span>
              </div>
              <div>
                <span>Descontos</span>
                <span>R$ 0,00</span>
              </div>
              <div>
                <span>Frete</span>
                <span>R$ 0,00</span>
              </div>
              <div className={styles.line}></div>
              <div>
                <span>Total</span>
                <strong>
                  {new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(sumPrices)}
                </strong>
              </div>
            </div>
            <button>Finalizar Compra</button>
          </div>
        </div>
      </div>
    </>

  )
}