import { MagnifyingGlass } from 'phosphor-react'
import styles from './styles.module.scss'

export function Search() {
  return (
    <form action="" className={styles.searchContainer}>
      <label htmlFor="">
        <MagnifyingGlass/>
        <input type="search" name="searchProducts" id="searchProducts" placeholder='Buscar' />
      </label>
    </form>
  )
}