import { MagnifyingGlass } from 'phosphor-react'
import { useApp } from '../../contexts/AppContext'
import styles from './styles.module.scss'

export function Search() {
  const { query, setQuery } = useApp()

  return (
    <main className={styles.displayMainContainer}>
      <div className={styles.searchContainer} >
        <label htmlFor="">
          <MagnifyingGlass />
          <input
            type="search"
            name="searchProducts"
            id="searchProducts"
            placeholder="Buscar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
    </main>
  )
}