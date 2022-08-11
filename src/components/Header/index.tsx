import { ShoppingCart } from "phosphor-react";
import styles from './styles.module.scss';
import { useApp } from '../../contexts/AppContext';
import { Link } from "react-router-dom";

export function Header() {
  const { cart } = useApp()

  return (
    <header className={styles.container}>
      <Link to="/">Início</Link>
      <Link to="/cart" className={styles.cart}>
        <ShoppingCart size={24} />
        <span>{cart.length}</span>
      </Link>
    </header>
  )
}