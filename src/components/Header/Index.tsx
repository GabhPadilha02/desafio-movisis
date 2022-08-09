import { ShoppingCart } from "phosphor-react";
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <a href="/">Início</a>
      <a href="/cart" className={styles.cart}>
        <ShoppingCart size={24}/>
        <span>10</span>
      </a>
    </header>
  )
}