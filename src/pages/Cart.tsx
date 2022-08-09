import { Header } from '../components/Header/Index'
import { ProductInCart } from '../components/ProductInCart/Index'
import styles from './Cart.module.scss'

export function Cart() {
  return (
    <>
      <Header />
      <div className={styles.cartContainer}>
        <h1>Checkout</h1>
        <div className={styles.payInfo}>
          <div className={styles.productInfo}>
            <div className={styles.detailsOfProduct}>
              <span>Nome do Produto</span>
              <span>Valor</span>
              <span>Quantidade</span>
            </div>
            <div className={styles.productInCartContainer}>
              <ProductInCart/>
            </div>
          </div>

          <div className={styles.priceInfo}>
            <h2>Resumo</h2>
            <div className={styles.priceDetails}>
              <div>
                <span>Produtos</span>
                <span>R$ 200,00</span>
              </div>
              <div>
                <span>Descontos</span>
                <span>R$ 0,00</span>
              </div>
              <div>
                <span>Frete</span>
                <span>R$ 10,00</span>  
              </div>
              <div className={styles.line}></div>
              <div>
                <span>Total</span>
                <strong>R$ 210,00</strong> 
              </div>
            </div>
            <button>Finalizar Compra</button>
          </div>
        </div>
      </div>
    </>
    
  )
}