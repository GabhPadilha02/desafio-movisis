import { ChangeEvent, useState } from 'react'
import { useQueryProductsQuery } from '../../graphql/generated'
import { Product } from '../Product/Index'
import styles from './styles.module.scss'

export function SidebarFilters() {
  const {data} = useQueryProductsQuery()
  const [priceFilter, setPriceFilter] = useState('')
  function handleFilterMinPrice(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setPriceFilter(event.target.value)
    console.log(priceFilter)
  }

  return (
    <aside className={styles.sidebarContainer}>
      <h1>Filtrar</h1>
      <h2>Preço</h2>
      <form action=""  className={styles.priceFilterContainer} >
        <label htmlFor="">De
          <input type="number" placeholder='R$ 0,00' name="minPrice" id="minPrice" onChange={handleFilterMinPrice}/>
        </label>
        <label htmlFor="">Até
          <input type="number" placeholder='R$ 0,00' name="maxPrice" id="maxPrice" />
        </label>
      </form>
      <h2>Ordenar</h2>
      <form action="" className={styles.orderFilterContainer}>
        <label htmlFor="price"> Preço
          <select name="price" id="price">
            <option value="Menor preço">Menor preço</option>
            <option value="Maior preço">Maior preço</option>
          </select>
        </label>
        <label htmlFor="date">Data de inclusão
          <select name="date" id="date">
            <option value="Mais recente">Mais recente</option>
            <option value="Menos recente">Menos recente</option>
          </select>
        </label>
      </form>
    
  
    </aside>
  )
}